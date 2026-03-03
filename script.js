/* ========================
   STATE
======================== */

var state = {
    noticias: [],
    currentSlide: 0,
    slideTimer: null,
    currentFilter: 'todas'
};

/* ========================
   GETTERS
======================== */

function getSliderArticles() {
    return state.noticias.filter(function(n) {
        return n.destacado;
    });
}

function getFilteredNews() {
    if (state.currentFilter === 'todas') return state.noticias;
    return state.noticias.filter(function(n) {
        return n.categoria === state.currentFilter;
    });
}

function findArticleById(id) {
    for (var i = 0; i < state.noticias.length; i++) {
        if (String(state.noticias[i].id) === String(id)) {
            return state.noticias[i];
        }
    }
    return null;
}

/* ========================
   INIT
======================== */

document.addEventListener('DOMContentLoaded', function() {
    fetch('noticias.json')
        .then(function(r) { return r.json(); })
        .then(function(data) {
            state.noticias = data;
            renderAll();
        })
        .catch(function() {
            console.error('No se pudo cargar noticias.json');
        });
});

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

function buildShareBar(titulo, small) {
    var url = encodeURIComponent(window.location.href);
    var text = encodeURIComponent(titulo);
    var cls = small ? "news-share-bar" : "article-share-bar";

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
    var sliderArticles = getSliderArticles();
    var track = document.getElementById('sliderTrack');
    var dotsContainer = document.getElementById('sliderDots');

    if (!track || !dotsContainer) return;

    if (!sliderArticles.length) {
        track.innerHTML = '';
        dotsContainer.innerHTML = '';
        return;
    }

    state.currentSlide = 0;

    track.innerHTML = sliderArticles.map(function(n, i) {
        return '<div class="slide" onclick="openArticle(' + n.id + ')">' +
            '<img src="' + n.imagen + '" alt="' + n.titulo + '" loading="' + (i === 0 ? 'eager' : 'lazy') + '">' +
            '<div class="slide-overlay"></div>' +
            '<div class="slide-content">' +
                '<span class="slide-category">' + n.categoriaLabel + '</span>' +
                '<div class="slide-title">' + n.titulo + '</div>' +
                '<div class="slide-desc">' + n.extracto + '</div>' +
                '<div class="slide-date">' + n.fecha + '</div>' +
            '</div>' +
        '</div>';
    }).join('');

    dotsContainer.innerHTML = sliderArticles.map(function(_, i) {
        return '<div class="dot ' + (i === 0 ? 'active' : '') + '" onclick="goToSlide(' + i + ')"></div>';
    }).join('');

    goToSlide(0);
    startAutoSlide();
}

function goToSlide(index) {
    var sliderArticles = getSliderArticles();
    if (!sliderArticles.length) return;

    state.currentSlide = index;

    var track = document.getElementById('sliderTrack');
    if (track) {
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
    }

    document.querySelectorAll('.dot').forEach(function(d, i) {
        d.classList.toggle('active', i === index);
    });
}

function slideNext() {
    var sliderArticles = getSliderArticles();
    if (!sliderArticles.length) return;
    goToSlide((state.currentSlide + 1) % sliderArticles.length);
}

function startAutoSlide() {
    clearInterval(state.slideTimer);
    state.slideTimer = setInterval(slideNext, 5000);
}

/* ========================
   NEWS GRID
======================== */

function renderNews(filter) {
    if (filter) state.currentFilter = filter;

    var filtered = getFilteredNews();
    var grid = document.getElementById('newsGrid');
    var list = document.getElementById('newsList');

    if (!grid || !list) return;

    grid.innerHTML = filtered.slice(0, 3).map(function(n, i) {
        return '<div class="news-card" onclick="openArticle(' + n.id + ')">' +
            '<img src="' + n.imagen + '" alt="' + n.titulo + '" loading="lazy">' +
            '<div class="news-card-body">' +
                '<span class="news-cat">' + n.categoriaLabel + '</span>' +
                '<div class="news-title">' + n.titulo + '</div>' +
                '<div class="news-meta">' + n.fecha + '</div>' +
                buildShareBar(n.titulo, true) +
            '</div>' +
        '</div>';
    }).join('');

    list.innerHTML = filtered.slice(3).map(function(n) {
        return '<div class="news-list-item" onclick="openArticle(' + n.id + ')">' +
            '<img src="' + n.imagen + '" alt="' + n.titulo + '" loading="lazy">' +
            '<div>' +
                '<span class="news-cat">' + n.categoriaLabel + '</span>' +
                '<div class="news-title">' + n.titulo + '</div>' +
                '<div class="news-meta">' + n.fecha + '</div>' +
                buildShareBar(n.titulo, true) +
            '</div>' +
        '</div>';
    }).join('');
}

/* ========================
   SIDEBAR
======================== */

function renderSidebar() {
    var container = document.getElementById('sidebarMostRead');
    if (!container) return;

    container.innerHTML = state.noticias.slice(0, 4).map(function(n) {
        return '<div class="sidebar-card" onclick="openArticle(' + n.id + ')">' +
            '<img src="' + n.imagen + '" alt="' + n.titulo + '">' +
            '<div>' +
                '<span class="news-cat">' + n.categoriaLabel + '</span>' +
                '<div class="news-title">' + n.titulo + '</div>' +
            '</div>' +
        '</div>';
    }).join('');
}

/* ========================
   ARTICLE VIEW
======================== */

function openArticle(id) {
    var noticia = findArticleById(id);
    if (!noticia) return;

    var related = state.noticias.filter(function(n) {
        return String(n.id) !== String(id);
    }).slice(0, 3);

    var content = document.getElementById('articleContent');
    if (!content) return;

    content.innerHTML =
        '<a class="article-back" onclick="goHome()">Volver</a>' +
        '<span class="article-category">' + noticia.categoriaLabel + '</span>' +
        '<h1 class="article-title">' + noticia.titulo + '</h1>' +
        '<div class="article-meta">' +
            '<strong>' + noticia.autor + '</strong> · ' + noticia.fecha +
        '</div>' +
        buildShareBar(noticia.titulo, false) +
        '<img class="article-hero-img" src="' + noticia.imagen + '">' +
        '<div class="article-body">' +
            '<p><strong>' + noticia.extracto + '</strong></p>' +
            noticia.cuerpo +
        '</div>';

    showSection('article');
}

/* ========================
   NAVIGATION
======================== */

function goHome() {
    showSection('home');
}

function filterCat(cat) {
    renderNews(cat);
    showSection('home');
}

/* ========================
   DATE
======================== */

function setDate() {
    var el = document.getElementById('currentDate');
    if (!el) return;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    el.textContent = new Date().toLocaleDateString('es-CO', options);
}

/* ========================
   TICKER
======================== */

function initTicker() {
    var ticker = document.querySelector('.ticker-content');
    if (!ticker) return;

    ticker.style.display = 'inline-block';
    var pos = window.innerWidth;

    function move() {
        pos -= 1.5;
        if (pos < -ticker.offsetWidth) pos = window.innerWidth;
        ticker.style.position = 'relative';
        ticker.style.left = pos + 'px';
        requestAnimationFrame(move);
    }

    move();
}
