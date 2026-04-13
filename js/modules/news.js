import { state, getFilteredPosts } from '../core/state.js';
import { buildImageUrl, escapeAttr, formatDate } from '../core/helpers.js';
import { buildShareBar } from './share.js';
import { openArticle } from './nav.js';

function cardHTML(p, { featured = false, listing = false } = {}) {
    const img = buildImageUrl(p);
    const extra = featured ? ` featured` : '';

    if (listing) {
        return `<div class="news-list-item" data-slug="${escapeAttr(p.slug)}">
            <img src="${img}" alt="${p.title}" loading="lazy">
            <div>
                <span class="news-cat">${p.category}</span>
                <div class="news-title">${p.title}</div>
                <div class="news-meta">${formatDate(p.published_at)}</div>
                ${buildShareBar(p.title, true)}
            </div>
        </div>`;
    }

    return `<div class="news-card${extra}" data-slug="${escapeAttr(p.slug)}">
        <img class="news-img" src="${img}" alt="${p.title}" loading="lazy">
        <div class="news-card-body">
            <span class="news-cat">${p.category}</span>
            <div class="news-title">${p.title}</div>
            ${featured ? `<div class="news-excerpt">${p.subtitle}</div>` : ''}
            <div class="news-meta">${formatDate(p.published_at)}</div>
            ${buildShareBar(p.title, true)}
        </div>
    </div>`;
}

function wireClicks(container) {
    if (!container) return;
    container.querySelectorAll('[data-slug]').forEach(el => {
        el.addEventListener('click', () => openArticle(el.dataset.slug));
    });
}

export function renderNews(filter) {
    if (filter) state.currentFilter = filter;

    const posts = getFilteredPosts();
    const grid = document.getElementById('newsGrid');
    const list = document.getElementById('newsList');
    if (!grid || !list) return;

    grid.innerHTML = posts.slice(0, 3)
        .map((p, i) => cardHTML(p, { featured: i === 0 }))
        .join('');

    list.innerHTML = posts.slice(3)
        .map(p => cardHTML(p, { listing: true }))
        .join('');

    wireClicks(grid);
    wireClicks(list);

    const label = document.getElementById('activeFilterLabel');
    if (label) label.textContent = state.currentFilter === 'todas' ? 'Todas' : state.currentFilter;
}

export function filterCat(cat) {
    renderNews(cat);
}
