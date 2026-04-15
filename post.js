(function () {
    const SITE = 'https://sabor360.tv';
    const API_ONE = SITE + '/api/public/posts/slug/';
    const API_LIST = SITE + '/api/public/posts/50';
    const CDN = SITE + '/api/global/cdn';

    function getSlug() {
        return new URLSearchParams(window.location.search).get('slug');
    }

    function buildImageUrl(post, sizeIndex = 2) {
        if (!post.image || !post.sizes) return '';
        const sizes = post.sizes.split(';');
        const size = sizes[sizeIndex] || sizes[0];
        return CDN + post.image + '-' + size + '.webp';
    }

    function formatDate(date) {
        if (!date) return '';
        return new Date(date).toLocaleDateString('es-CO', {
            year: 'numeric', month: 'long', day: 'numeric',
        });
    }

    function canonicalUrl(slug) {
        return SITE + '/post.html?slug=' + encodeURIComponent(slug);
    }

    function postHref(slug) {
        return '/post.html?slug=' + encodeURIComponent(slug);
    }

    function stripHtml(html) {
        if (!html) return '';
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
    }

    function truncate(str, max = 160) {
        if (!str) return '';
        if (str.length <= max) return str;
        return str.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
    }

    function setMeta(key, value) {
        if (value == null) return;
        document.querySelectorAll(`[data-meta="${key}"]`).forEach(el => {
            const tag = el.tagName;
            if (tag === 'TITLE') el.textContent = value;
            else if (tag === 'LINK') el.setAttribute('href', value);
            else if (tag === 'META') el.setAttribute('content', value);
        });
    }

    function updateSEO(post) {
        const title = post.og_title || post.title || 'Sabor 360';
        const rawDesc = post.og_description || post.description || stripHtml(post.subtitle) || stripHtml(post.body_html);
        const description = truncate(rawDesc, 160);
        const image = post.og_image || buildImageUrl(post, 1) || SITE + '/img/logo.png';
        const url = canonicalUrl(post.slug);
        const author = post.author_name || 'Sabor 360';
        const section = post.category || '';
        const published = post.published_at ? new Date(post.published_at).toISOString() : '';

        setMeta('title', title + ' · Sabor 360');
        setMeta('description', description);
        setMeta('author', author);
        setMeta('canonical', url);

        setMeta('og:type', 'article');
        setMeta('og:title', title);
        setMeta('og:description', description);
        setMeta('og:url', url);
        setMeta('og:image', image);
        setMeta('og:image:alt', title);

        setMeta('article:published_time', published);
        setMeta('article:author', author);
        setMeta('article:section', section);

        setMeta('twitter:title', title);
        setMeta('twitter:description', description);
        setMeta('twitter:image', image);

        const jsonld = {
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: title,
            description,
            image: [image],
            datePublished: published,
            dateModified: post.updated_at ? new Date(post.updated_at).toISOString() : published,
            author: { '@type': 'Person', name: author },
            publisher: {
                '@type': 'Organization',
                name: 'Sabor 360',
                logo: { '@type': 'ImageObject', url: SITE + '/img/logo.png' },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            articleSection: section,
        };
        const ldEl = document.querySelector('[data-meta="jsonld"]');
        if (ldEl) ldEl.textContent = JSON.stringify(jsonld, null, 2);
    }

    const ICONS = {
        fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg>',
        x:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
        wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z"/></svg>',
    };

    function renderShareBar(post) {
        const url = encodeURIComponent(canonicalUrl(post.slug));
        const text = encodeURIComponent(post.title || '');
        return `<div class="post__share">
            <span class="post__share-label">Compartir</span>
            <a class="post__share-btn post__share-btn--fb" href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.fb}</a>
            <a class="post__share-btn post__share-btn--x"  href="https://twitter.com/intent/tweet?url=${url}&text=${text}" target="_blank" rel="noopener" aria-label="X">${ICONS.x}</a>
            <a class="post__share-btn post__share-btn--wa" href="https://wa.me/?text=${text}%20${url}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.wa}</a>
        </div>`;
    }

    function renderPost(post) {
        const container = document.getElementById('postApp');
        if (!container) return;
        const image = buildImageUrl(post, 2);
        const author = post.author_name || 'Sabor 360';
        const subtitle = post.subtitle || '';

        container.innerHTML = `
            <section class="post__hero">
                <figure class="post__hero-figure">
                    <img class="post__hero-img" src="${image}" alt="${post.title || ''}">
                </figure>
                <div class="post__hero-overlay"></div>
                <div class="post__hero-content">
                    <span class="post__category">${post.category || ''}</span>
                    <h1 class="post__title">${post.title || ''}</h1>
                </div>
            </section>

            <div class="post__meta">
                <div class="post__byline">
                    <span>Por <strong>${author}</strong></span>
                    <span aria-hidden="true">·</span>
                    <time datetime="${post.published_at || ''}">${formatDate(post.published_at)}</time>
                </div>
                ${renderShareBar(post)}
            </div>

            <article class="post__body">
                ${subtitle ? `<p class="post__lead">${subtitle}</p>` : ''}
                ${post.body_html || ''}
            </article>
        `;
    }

    function renderFeatured(current, posts) {
        const container = document.getElementById('postFeatured');
        if (!container || !Array.isArray(posts)) return;

        const others = posts.filter(p => String(p.id) !== String(current.id));
        const sameCat = others.filter(p => p.category_id === current.category_id);
        const rest = others.filter(p => p.category_id !== current.category_id);
        const pick = [...sameCat, ...rest].slice(0, 4);

        container.innerHTML = pick.map(p => {
            const img = buildImageUrl(p, 0);
            const href = postHref(p.slug);
            return `<a class="featured__card" href="${href}">
                <img class="featured__card-img" src="${img}" alt="${p.title || ''}" loading="lazy">
                <div class="featured__card-body">
                    <span class="featured__card-cat">${p.category || ''}</span>
                    <h3 class="featured__card-title">${p.title || ''}</h3>
                    <time class="featured__card-date" datetime="${p.published_at || ''}">${formatDate(p.published_at)}</time>
                </div>
            </a>`;
        }).join('');
    }

    async function loadPost() {
        const slug = getSlug();
        if (!slug) return;

        try {
            const [postRes, listRes] = await Promise.all([
                fetch(API_ONE + slug),
                fetch(API_LIST).catch(() => null),
            ]);
            const post = await postRes.json();
            renderPost(post);
            updateSEO(post);

            if (listRes && listRes.ok) {
                const list = await listRes.json();
                renderFeatured(post, list || []);
            }
        } catch (err) {
            console.error('Error cargando post', err);
        }
    }

    document.addEventListener('DOMContentLoaded', loadPost);
})();
