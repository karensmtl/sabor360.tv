import { state } from '../core/state.js';
import { buildImageUrl, escapeAttr } from '../core/helpers.js';
import { openArticle } from './nav.js';

export function renderSidebar() {
    const container = document.getElementById('sidebarMostRead');
    if (!container) return;

    container.innerHTML = state.posts.slice(0, 4).map(p => {
        const img = buildImageUrl(p);
        return `<div class="sidebar-card" data-slug="${escapeAttr(p.slug)}">
            <img src="${img}" alt="${p.title}">
            <div>
                <span class="news-cat">${p.category}</span>
                <div class="news-title">${p.title}</div>
            </div>
        </div>`;
    }).join('');

    container.querySelectorAll('[data-slug]').forEach(el => {
        el.addEventListener('click', () => openArticle(el.dataset.slug));
    });
}
