import { API_POSTS } from '../core/config.js';
import { state } from '../core/state.js';
import { buildSlider, initSliderControls } from '../modules/slider.js';
import { renderNews, filterCat } from '../modules/news.js';
import { renderSidebar } from '../modules/sidebar.js';
import { setDate } from '../modules/date.js';
import { initTicker } from '../modules/ticker.js';

function applyUrlFilter() {
    const cat = new URLSearchParams(window.location.search).get('cat');
    if (!cat) return;
    filterCat(cat);
    document.querySelectorAll('.nav-links a[data-cat]').forEach(a => {
        if (a.dataset.cat === cat) a.classList.add('active');
    });
}

export async function initHome() {
    setDate();
    initTicker();
    initSliderControls();

    try {
        const res = await fetch(API_POSTS);
        state.posts = (await res.json()) || [];
    } catch {
        console.error('No se pudo cargar las noticias');
        state.posts = [];
    }

    buildSlider();
    renderNews();
    renderSidebar();
    applyUrlFilter();
}
