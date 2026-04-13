#!/usr/bin/env node
/**
 * Prerender Sabor 360 posts into static HTML files.
 *
 * Usage:
 *   node scripts/prerender-posts.js
 *
 * Para cada post: descarga el detalle desde la API, inyecta meta OG/Twitter,
 * JSON-LD y renderiza el body en post/<slug>.html. Regenera sitemap.xml.
 *
 * Node 18+ (usa fetch global). Cero dependencias.
 */

const fs = require('fs');
const path = require('path');

const SITE = 'https://sabor360.tv';
const API_LIST = SITE + '/api/public/posts/50';
const API_ONE = SITE + '/api/public/posts/slug/';
const CDN = SITE + '/api/global/cdn';

const ROOT = path.resolve(__dirname, '..');
const TEMPLATE = path.join(ROOT, 'post.html');
const OUT_DIR = path.join(ROOT, 'post');
const SITEMAP = path.join(ROOT, 'sitemap.xml');

const STATIC_PAGES = [
    { loc: '/', priority: '1.0', changefreq: 'daily' },
    { loc: '/quienes', priority: '0.6', changefreq: 'monthly' },
    { loc: '/podcast', priority: '0.8', changefreq: 'weekly' },
];

function escapeHtml(s) {
    return String(s == null ? '' : s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function stripHtml(html) {
    return String(html || '')
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function truncate(s, max = 160) {
    if (!s) return '';
    if (s.length <= max) return s;
    return s.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}

function buildImageUrl(post, sizeIndex = 1) {
    if (!post.image || !post.sizes) return SITE + '/img/logo.png';
    const sizes = String(post.sizes).split(';');
    const size = sizes[sizeIndex] || sizes[0];
    return CDN + post.image + '-' + size + '.webp';
}

function canonicalUrl(slug) {
    return SITE + '/post/' + encodeURIComponent(slug);
}

function isoDate(d) {
    if (!d) return '';
    try { return new Date(d).toISOString(); } catch { return ''; }
}

async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText} @ ${url}`);
    return res.json();
}

const ICON_FB = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg>';
const ICON_X  = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
const ICON_WA = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z"/></svg>';

function buildShareBar(post) {
    const url = encodeURIComponent(canonicalUrl(post.slug));
    const text = encodeURIComponent(post.title || '');
    return `<div class="post__share">
        <span class="post__share-label">Compartir</span>
        <a class="post__share-btn post__share-btn--fb" href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener" aria-label="Facebook">${ICON_FB}</a>
        <a class="post__share-btn post__share-btn--x"  href="https://twitter.com/intent/tweet?url=${url}&amp;text=${text}" target="_blank" rel="noopener" aria-label="X">${ICON_X}</a>
        <a class="post__share-btn post__share-btn--wa" href="https://wa.me/?text=${text}%20${url}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON_WA}</a>
    </div>`;
}

function buildPostBody(post) {
    const image = buildImageUrl(post, 2);
    const author = escapeHtml(post.author_name || 'Sabor 360');
    const subtitle = post.subtitle || '';
    return `
        <section class="post__hero">
            <figure class="post__hero-figure">
                <img class="post__hero-img" src="${escapeHtml(image)}" alt="${escapeHtml(post.title || '')}">
            </figure>
            <div class="post__hero-overlay"></div>
            <div class="post__hero-content">
                <span class="post__category">${escapeHtml(post.category || '')}</span>
                <h1 class="post__title">${escapeHtml(post.title || '')}</h1>
            </div>
        </section>

        <div class="post__meta">
            <div class="post__byline">
                <span>Por <strong>${author}</strong></span>
                <span aria-hidden="true">·</span>
                <time datetime="${escapeHtml(post.published_at || '')}">${escapeHtml(formatDate(post.published_at))}</time>
            </div>
            ${buildShareBar(post)}
        </div>

        <article class="post__body">
            ${subtitle ? `<p class="post__lead">${escapeHtml(subtitle)}</p>` : ''}
            ${post.body_html || ''}
        </article>
    `;
}

function formatDate(date) {
    if (!date) return '';
    try {
        return new Date(date).toLocaleDateString('es-CO', {
            year: 'numeric', month: 'long', day: 'numeric',
        });
    } catch { return ''; }
}

function buildFeaturedHtml(current, list) {
    const others = list.filter(p => String(p.id) !== String(current.id));
    const sameCat = others.filter(p => p.category_id === current.category_id);
    const rest = others.filter(p => p.category_id !== current.category_id);
    const pick = [...sameCat, ...rest].slice(0, 4);

    return pick.map(p => {
        const img = buildImageUrl(p, 0);
        const href = '/post/' + encodeURIComponent(p.slug);
        return `<a class="featured__card" href="${escapeHtml(href)}">
            <img class="featured__card-img" src="${escapeHtml(img)}" alt="${escapeHtml(p.title || '')}" loading="lazy">
            <div class="featured__card-body">
                <span class="featured__card-cat">${escapeHtml(p.category || '')}</span>
                <h3 class="featured__card-title">${escapeHtml(p.title || '')}</h3>
                <time class="featured__card-date" datetime="${escapeHtml(p.published_at || '')}">${escapeHtml(formatDate(p.published_at))}</time>
            </div>
        </a>`;
    }).join('\n');
}

function replaceMeta(template, key, attr, value) {
    const safe = escapeHtml(value);
    const re = new RegExp(
        `(<[^>]*data-meta="${key}"[^>]*\\s${attr}=")[^"]*(")`,
        'i'
    );
    return template.replace(re, `$1${safe}$2`);
}

function replaceTitle(template, value) {
    return template.replace(
        /(<title[^>]*data-meta="title"[^>]*>)[^<]*(<\/title>)/i,
        `$1${escapeHtml(value)}$2`
    );
}

function replaceJsonLd(template, jsonld) {
    return template.replace(
        /(<script[^>]*data-meta="jsonld"[^>]*>)[\s\S]*?(<\/script>)/i,
        `$1\n${JSON.stringify(jsonld, null, 2)}\n$2`
    );
}

function replaceContainer(template, id, innerHtml) {
    const re = new RegExp(
        `(<[^>]*id="${id}"[^>]*>)[\\s\\S]*?(<\\/[a-z]+>)`,
        'i'
    );
    return template.replace(re, `$1\n${innerHtml}\n$2`);
}

function renderOne(template, post, list) {
    const title = post.og_title || post.title || 'Sabor 360';
    const description = truncate(
        post.og_description || post.description || stripHtml(post.subtitle) || stripHtml(post.body_html),
        160
    );
    const image = post.og_image || buildImageUrl(post, 1);
    const url = canonicalUrl(post.slug);
    const author = post.author_name || 'Sabor 360';
    const section = post.category || '';
    const published = isoDate(post.published_at);
    const modified = isoDate(post.updated_at) || published;

    let html = template;

    html = replaceTitle(html, `${title} · Sabor 360`);
    html = replaceMeta(html, 'description', 'content', description);
    html = replaceMeta(html, 'author', 'content', author);
    html = replaceMeta(html, 'canonical', 'href', url);

    html = replaceMeta(html, 'og:type', 'content', 'article');
    html = replaceMeta(html, 'og:title', 'content', title);
    html = replaceMeta(html, 'og:description', 'content', description);
    html = replaceMeta(html, 'og:url', 'content', url);
    html = replaceMeta(html, 'og:image', 'content', image);
    html = replaceMeta(html, 'og:image:alt', 'content', title);

    html = replaceMeta(html, 'article:published_time', 'content', published);
    html = replaceMeta(html, 'article:author', 'content', author);
    html = replaceMeta(html, 'article:section', 'content', section);

    html = replaceMeta(html, 'twitter:title', 'content', title);
    html = replaceMeta(html, 'twitter:description', 'content', description);
    html = replaceMeta(html, 'twitter:image', 'content', image);

    const jsonld = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: title,
        description,
        image: [image],
        datePublished: published,
        dateModified: modified,
        author: { '@type': 'Person', name: author },
        publisher: {
            '@type': 'Organization',
            name: 'Sabor 360',
            logo: { '@type': 'ImageObject', url: SITE + '/img/logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        articleSection: section,
    };
    html = replaceJsonLd(html, jsonld);

    html = replaceContainer(html, 'postApp', buildPostBody(post));
    html = replaceContainer(html, 'postFeatured', buildFeaturedHtml(post, list));

    return html;
}

function writeSitemap(posts) {
    const now = new Date().toISOString();
    const urls = [
        ...STATIC_PAGES.map(p =>
            `  <url>\n    <loc>${SITE}${p.loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
        ),
        ...posts.map(p => {
            const lm = isoDate(p.updated_at) || isoDate(p.published_at) || now;
            return `  <url>\n    <loc>${canonicalUrl(p.slug)}</loc>\n    <lastmod>${lm}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
        }),
    ].join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
    fs.writeFileSync(SITEMAP, xml, 'utf8');
}

async function main() {
    if (typeof fetch !== 'function') {
        console.error('Este script requiere Node 18+ (fetch global).');
        process.exit(1);
    }

    if (!fs.existsSync(TEMPLATE)) {
        console.error('No se encontró post.html (template).');
        process.exit(1);
    }

    console.log('→ Descargando lista de posts…');
    const list = await fetchJson(API_LIST);
    console.log(`  ${list.length} posts`);

    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
    const template = fs.readFileSync(TEMPLATE, 'utf8');

    let ok = 0, fail = 0;
    for (const summary of list) {
        if (!summary.slug) continue;
        try {
            const full = await fetchJson(API_ONE + encodeURIComponent(summary.slug));
            const html = renderOne(template, full, list);
            const outPath = path.join(OUT_DIR, `${summary.slug}.html`);
            fs.writeFileSync(outPath, html, 'utf8');
            ok++;
            process.stdout.write(`  ✓ ${summary.slug}\n`);
        } catch (e) {
            fail++;
            console.error(`  ✗ ${summary.slug}: ${e.message}`);
        }
    }

    writeSitemap(list);
    console.log(`\n✓ ${ok} posts prerenderizados · ${fail} fallos`);
    console.log(`✓ sitemap.xml regenerado con ${list.length + STATIC_PAGES.length} URLs`);
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
