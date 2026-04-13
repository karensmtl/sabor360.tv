import { loadLayout } from './modules/partials.js';
import { initNav } from './modules/nav.js';

async function boot() {
    await loadLayout();
    initNav();

    const page = document.body.dataset.page;

    if (page === 'home') {
        const { initHome } = await import('./pages/home.js');
        await initHome();
    } else if (page === 'podcast') {
        const { initPodcast } = await import('./pages/podcast.js');
        initPodcast();
    }
}

document.addEventListener('DOMContentLoaded', boot);
