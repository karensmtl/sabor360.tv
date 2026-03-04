/* ========================
   CONFIG
======================== */

const API_POSTS = 'https://sabor360.tv/api/public/posts/50';
const CDN = 'https://sabor360.tv/api/global/cdn';

/* ========================
   STATE
======================== */

const state = {
    posts: [],
    currentSlide: 0,
    slideTimer: null,
    currentFilter: 'todas'
};

/* ========================
   HELPERS
======================== */

function escapeAttr(value) {
    return String(value || '').replace(/'/g, "\\'");
}

function buildImageUrl(post, sizeIndex = 0) {

    if (!post.image || !post.sizes) return '';

    const sizes = post.sizes.split(';');
    const size = sizes[sizeIndex] || sizes[0];

    return CDN + post.image + '-' + size + '.webp';
}

function formatDate(date) {

    if (!date) return '';

    return new Date(date).toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

}

/* ========================
   GETTERS
======================== */

function getSliderPosts() {
    return state.posts;
}

function getFilteredPosts() {

    if (state.currentFilter === 'todas')
        return state.posts;

    return state.posts.filter(function(p) {

        return String(p.category_id) === String(state.currentFilter)
            || p.category === state.currentFilter;

    });

}

function findPost(id) {

    return state.posts.find(function(p) {
        return String(p.id) === String(id);
    }) || null;

}

/* ========================
   INIT
======================== */

document.addEventListener('DOMContentLoaded', init);

function init() {

    fetch(API_POSTS)
        .then(function(r) { return r.json(); })
        .then(function(data) {

            console.log('Noticias cargadas:', data);

            state.posts = data || [];

            renderAll();

        })
        .catch(function() {
            console.error('No se pudo cargar las noticias');
        });

}

function renderAll() {

    buildSlider();
    renderNews();
    renderSidebar();
    setDate();
    initTicker();

}

/* ========================
   SHARE BAR
======================== */

function buildShareBar(title, small) {

    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);

    const cls = small
        ? 'news-share-bar'
        : 'article-share-bar';

    return '<div class="' + cls + '" onclick="event.stopPropagation()">' +
        '<span>Compartir</span>' +
        '<a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" target="_blank" class="fb">FB</a>' +
        '<a href="https://wa.me/?text=' + text + '%20' + url + '" target="_blank" class="wa">WA</a>' +
    '</div>';

}

/* ========================
   SLIDER
======================== */

function buildSlider() {

    const posts = getSliderPosts();

    const track = document.getElementById('sliderTrack');
    const dots = document.getElementById('sliderDots');

    if (!track || !dots) return;

    if (!posts.length) {

        track.innerHTML = '';
        dots.innerHTML = '';

        return;
    }

    state.currentSlide = 0;

    track.innerHTML = posts.map(function(p, i) {

        const img = buildImageUrl(p, 1);

        return '<div class="slide" onclick="openArticle(\'' + escapeAttr(p.slug) + '\')">' +

            '<img src="' + img + '" alt="' + p.title + '" loading="' + (i === 0 ? 'eager' : 'lazy') + '">' +

            '<div class="slide-overlay"></div>' +

            '<div class="slide-content">' +

                '<span class="slide-category">' + p.category + '</span>' +

                '<div class="slide-title">' + p.title + '</div>' +

                '<div class="slide-desc">' + p.subtitle + '</div>' +

                '<div class="slide-date">' + formatDate(p.published_at) + '</div>' +

            '</div>' +

        '</div>';

    }).join('');

    dots.innerHTML = posts.map(function(_, i) {

        return '<div class="dot ' + (i === 0 ? 'active' : '') +
            '" onclick="goToSlide(' + i + ')"></div>';

    }).join('');

    goToSlide(0);
    startAutoSlide();

}

function goToSlide(index) {

    const posts = getSliderPosts();

    if (!posts.length) return;

    state.currentSlide = index;

    const track = document.getElementById('sliderTrack');

    if (track) {
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
    }

    document.querySelectorAll('.dot').forEach(function(d, i) {
        d.classList.toggle('active', i === index);
    });

}

function slideNext() {

    const posts = getSliderPosts();

    if (!posts.length) return;

    goToSlide(
        (state.currentSlide + 1) % posts.length
    );

}

function startAutoSlide() {

    clearInterval(state.slideTimer);

    state.slideTimer = setInterval(
        slideNext,
        5000
    );

}

/* ========================
   NEWS GRID
======================== */

function renderNews(filter) {

    if (filter) state.currentFilter = filter;

    const posts = getFilteredPosts();

    const grid = document.getElementById('newsGrid');
    const list = document.getElementById('newsList');

    if (!grid || !list) return;

    const gridItems = posts.slice(0, 3);

    grid.innerHTML = gridItems.map(function(p, i) {

        const img = buildImageUrl(p);

        if (i === 0) {

            return '<div class="news-card featured" onclick="openArticle(\'' + escapeAttr(p.slug) + '\')">' +

                '<img class="news-img" src="' + img + '" alt="' + p.title + '" loading="lazy">' +

                '<div class="news-card-body">' +

                    '<span class="news-cat">' + p.category + '</span>' +

                    '<div class="news-title">' + p.title + '</div>' +

                    '<div class="news-excerpt">' + p.subtitle + '</div>' +

                    '<div class="news-meta">' + formatDate(p.published_at) + '</div>' +

                    buildShareBar(p.title, true) +

                '</div>' +

            '</div>';

        }

        return '<div class="news-card" onclick="openArticle(\'' + escapeAttr(p.slug) + '\')">' +

            '<img class="news-img" src="' + img + '" alt="' + p.title + '" loading="lazy">' +

            '<div class="news-card-body">' +

                '<span class="news-cat">' + p.category + '</span>' +

                '<div class="news-title">' + p.title + '</div>' +

                '<div class="news-meta">' + formatDate(p.published_at) + '</div>' +

                buildShareBar(p.title, true) +

            '</div>' +

        '</div>';

    }).join('');

    list.innerHTML = posts.slice(3).map(function(p) {

        const img = buildImageUrl(p);

        return '<div class="news-list-item" onclick="openArticle(\'' + escapeAttr(p.slug) + '\')">' +

            '<img src="' + img + '" alt="' + p.title + '" loading="lazy">' +

            '<div>' +

                '<span class="news-cat">' + p.category + '</span>' +

                '<div class="news-title">' + p.title + '</div>' +

                '<div class="news-meta">' + formatDate(p.published_at) + '</div>' +

                buildShareBar(p.title, true) +

            '</div>' +

        '</div>';

    }).join('');

}

/* ========================
   SIDEBAR
======================== */

function renderSidebar() {

    const container = document.getElementById('sidebarMostRead');

    if (!container) return;

    container.innerHTML = state.posts.slice(0, 4).map(function(p) {

        const img = buildImageUrl(p);

        return '<div class="sidebar-card" onclick="openArticle(\'' + escapeAttr(p.slug) + '\')">' +

            '<img src="' + img + '" alt="' + p.title + '">' +

            '<div>' +

                '<span class="news-cat">' + p.category + '</span>' +

                '<div class="news-title">' + p.title + '</div>' +

            '</div>' +

        '</div>';

    }).join('');

}

/* ========================
   NAVIGATION
======================== */

function openArticle(slug) {

    window.location.href =
        '/post.html?slug=' + encodeURIComponent(slug);

}

/* ========================
   DATE
======================== */

function setDate() {

    const el = document.getElementById('currentDate');

    if (!el) return;

    el.textContent = new Date().toLocaleDateString('es-CO', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

}

/* ========================
   TICKER
======================== */

function initTicker() {

    const ticker = document.querySelector('.ticker-content');

    if (!ticker) return;

    ticker.style.display = 'inline-block';

    let pos = window.innerWidth;

    function move() {

        pos -= 1.5;

        if (pos < -ticker.offsetWidth)
            pos = window.innerWidth;

        ticker.style.position = 'relative';
        ticker.style.left = pos + 'px';

        requestAnimationFrame(move);

    }

    move();

}