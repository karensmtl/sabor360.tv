/* ========================
   CARGA NOTICIAS DESDE JSON
======================== */
var noticias = [];
var currentSlide = 0;
var slideTimer = null;
var currentFilter = 'todas';
var sliderArticles = [];

document.addEventListener('DOMContentLoaded', function() {
    fetch('noticias.json')
        .then(function(r) { return r.json(); })
        .then(function(data) {
            noticias = data;
            sliderArticles = noticias.filter(function(n) { return n.destacado; });
            buildSlider();
            renderNews();
            renderSidebar();
            setDate();
            initTicker();
        })
        .catch(function() {
            console.error('No se pudo cargar noticias.json');
        });
});

/* ========================
   SHARE BAR
======================== */
function buildShareBar(titulo, small) {
    var url = encodeURIComponent(window.location.href);
    var text = encodeURIComponent(titulo);
    var cls = small ? "news-share-bar" : "article-share-bar";
    return '<div class="' + cls + '" onclick="event.stopPropagation()">' +
        '<span>Compartir</span>' +
        '<a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" target="_blank" title="Facebook" class="fb">' +
            '<svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>' +
        '</a>' +
        '<a href="https://www.instagram.com/sabor.360._" target="_blank" title="Instagram" class="ig">' +
            '<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>' +
        '</a>' +
        '<a href="https://wa.me/?text=' + text + '%20' + url + '" target="_blank" title="WhatsApp" class="wa">' +
            '<svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>' +
        '</a>' +
        '<a href="https://www.youtube.com/channel/UCkBqRKoYbaAb3osKBJeH33Q" target="_blank" title="YouTube" class="yt">' +
            '<svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>' +
        '</a>' +
    '</div>';
}

/* ========================
   PAGES
======================== */
var ALL_PAGES = ['page-home', 'page-videos', 'page-quienes', 'page-article'];

function showSection(sec) {
    ALL_PAGES.forEach(function(p) {
        var el = document.getElementById(p);
        if (el) el.style.display = 'none';
    });
    var target = document.getElementById('page-' + sec);
    if (target) target.style.display = 'block';
    document.querySelectorAll('.nav-links a').forEach(function(a) {
        if (sec === 'home') {
            a.classList.toggle('active', a.dataset.sec === 'home' && !a.dataset.cat);
        } else {
            a.classList.toggle('active', a.dataset.sec === sec);
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ========================
   SLIDER
======================== */
function buildSlider() {
    var track = document.getElementById('sliderTrack');
    var dotsContainer = document.getElementById('sliderDots');
    if (!track || !dotsContainer) return;
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
    startAutoSlide();
}

function goToSlide(index) {
    currentSlide = index;
    var track = document.getElementById('sliderTrack');
    if (track) track.style.transform = 'translateX(-' + (index * 100) + '%)';
    document.querySelectorAll('.dot').forEach(function(d, i) {
        d.classList.toggle('active', i === index);
    });
}

function slideNext() { goToSlide((currentSlide + 1) % sliderArticles.length); }
function slidePrev() { goToSlide((currentSlide - 1 + sliderArticles.length) % sliderArticles.length); }

function startAutoSlide() {
    clearInterval(slideTimer);
    slideTimer = setInterval(slideNext, 5000);
}

/* ========================
   NEWS GRID
======================== */
function renderNews(filter) {
    filter = filter || 'todas';
    currentFilter = filter;
    var filtered = filter === 'todas' ? noticias : noticias.filter(function(n){ return n.categoria === filter; });
    var labels = { todas: 'Todas', noticias: 'Noticias', negocios: 'Negocios', gestion: 'Gestion', contexto: 'Contexto', liderazgo: 'Liderazgo', eventos: 'Eventos' };
    var labelEl = document.getElementById('activeFilterLabel');
    if (labelEl) labelEl.textContent = labels[filter] || filter;
    var grid = document.getElementById('newsGrid');
    if (!grid) return;
    var gridItems = filtered.slice(0, 3);
    grid.innerHTML = gridItems.map(function(n, i) {
        if (i === 0) {
            return '<div class="news-card featured" onclick="openArticle(' + n.id + ')">' +
                '<img class="news-img" src="' + n.imagen + '" alt="' + n.titulo + '" loading="lazy">' +
                '<div class="news-card-body">' +
                    '<span class="news-cat">' + n.categoriaLabel + '</span>' +
                    '<div class="news-title">' + n.titulo + '</div>' +
                    '<div class="news-excerpt">' + n.extracto + '</div>' +
                    '<div class="news-meta">' + n.fecha + ' &nbsp;&middot;&nbsp; ' + n.autor + '</div>' +
                    buildShareBar(n.titulo, true) +
                '</div>' +
            '</div>';
        }
        return '<div class="news-card" onclick="openArticle(' + n.id + ')">' +
            '<img class="news-img" src="' + n.imagen + '" alt="' + n.titulo + '" loading="lazy">' +
            '<div class="news-card-body">' +
                '<span class="news-cat">' + n.categoriaLabel + '</span>' +
                '<div class="news-title">' + n.titulo + '</div>' +
                '<div class="news-meta">' + n.fecha + '</div>' +
                buildShareBar(n.titulo, true) +
            '</div>' +
        '</div>';
    }).join('');
    var list = document.getElementById('newsList');
    if (!list) return;
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
    var mr = document.getElementById('sidebarMostRead');
    if (mr) {
        mr.innerHTML = noticias.slice(0, 4).map(function(n) {
            return '<div class="sidebar-card" onclick="openArticle(' + n.id + ')">' +
                '<img src="' + n.imagen + '" alt="' + n.titulo + '" loading="lazy">' +
                '<div><span class="news-cat">' + n.categoriaLabel + '</span>' +
                '<div class="news-title">' + n.titulo + '</div></div>' +
            '</div>';
        }).join('');
    }
    var ev = document.getElementById('sidebarEvents');
    if (ev) {
        var events = noticias.filter(function(n){ return n.categoria === 'eventos'; });
        ev.innerHTML = events.map(function(n) {
            return '<div class="sidebar-card" onclick="openArticle(' + n.id + ')">' +
                '<img src="' + n.imagen + '" alt="' + n.titulo + '" loading="lazy">' +
                '<div><span class="news-cat">' + n.fecha + '</span>' +
                '<div class="news-title">' + n.titulo + '</div></div>' +
            '</div>';
        }).join('');
    }
}

/* ========================
   ARTICLE VIEW
======================== */
function openArticle(id) {
    var noticia = null;
    for (var i = 0; i < noticias.length; i++) {
        if (noticias[i].id === id) { noticia = noticias[i]; break; }
    }
    if (!noticia) return;
    var related = noticias.filter(function(n){ return n.id !== id; }).slice(0, 3);
    var relatedHTML = related.map(function(r) {
        return '<div class="related-card" onclick="openArticle(' + r.id + ')">' +
            '<img src="' + r.imagen + '" alt="' + r.titulo + '" loading="lazy">' +
            '<span class="news-cat">' + r.categoriaLabel + '</span>' +
            '<div class="news-title">' + r.titulo + '</div>' +
        '</div>';
    }).join('');
    var content = document.getElementById('articleContent');
    if (!content) return;
    content.innerHTML =
        '<a class="article-back" onclick="goHome()">&#8592; Volver a Noticias</a>' +
        '<span class="article-category">' + noticia.categoriaLabel + '</span>' +
        '<h1 class="article-title">' + noticia.titulo + '</h1>' +
        '<div class="article-meta">' +
            '<span><strong>' + noticia.autor + '</strong></span>' +
            '<span>&middot;</span>' +
            '<span>' + noticia.fecha + '</span>' +
        '</div>' +
        buildShareBar(noticia.titulo, false) +
        '<img class="article-hero-img" src="' + noticia.imagen + '" alt="' + noticia.titulo + '">' +
        '<div class="article-img-caption">Foto / Sabor 360</div>' +
        '<div class="article-body">' +
            '<p><strong>' + noticia.extracto + '</strong></p>' +
            noticia.cuerpo +
        '</div>' +
        '<div class="related-section">' +
            '<h3>Noticias relacionadas</h3>' +
            '<div class="related-grid">' + relatedHTML + '</div>' +
        '</div>';
    showSection('article');
}

/* ========================
   VIDEO CONTROL
======================== */
var activeVideoWrapper = null;

function playVideo(placeholder, videoId, isLarge) {
    var wrapper = placeholder.parentElement;
    if (!wrapper) return;
    document.querySelectorAll('.vid-embed, .vid-thumb-wrap').forEach(function(w) {
        if (w === wrapper) return;
        var iframe = w.querySelector('iframe');
        if (!iframe) return;
        var vid = w.getAttribute('data-videoid');
        var lg = w.classList.contains('vid-embed');
        iframe.remove();
        if (vid) {
            var ph = document.createElement('div');
            ph.className = 'vid-placeholder';
            ph.setAttribute('onclick', "playVideo(this, '" + vid + "', " + lg + ")");
            ph.innerHTML = '<img src="https://img.youtube.com/vi/' + vid + '/mqdefault.jpg" alt="" class="vid-thumb-img" style="width:100%;height:100%;object-fit:cover;display:block;">' +
                '<div class="vid-play-overlay"><div class="' + (lg ? 'vid-play-btn' : 'vid-play-btn small') + '">&#9654;</div></div>';
            w.appendChild(ph);
        }
    });
    var ph2 = wrapper.querySelector('.vid-placeholder');
    if (ph2) ph2.remove();
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
    iframe.title = 'Video Sabor 360';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;display:block;';
    wrapper.appendChild(iframe);
    activeVideoWrapper = wrapper;
}

/* ========================
   NAVIGATION
======================== */
function goHome() { showSection('home'); }

function filterCat(cat) {
    renderNews(cat);
    showSection('home');
    document.querySelectorAll('.nav-links a').forEach(function(a) {
        a.classList.toggle('active', a.dataset.cat === cat);
    });
}

/* ========================
   TABS
======================== */
function switchTab(name, btn) {
    document.querySelectorAll('.extra-tab-content').forEach(function(t){ t.classList.remove('active'); });
    document.querySelectorAll('.extra-tab-btn').forEach(function(b){ b.classList.remove('active'); });
    var tab = document.getElementById('tab-' + name);
    if (tab) tab.classList.add('active');
    btn.classList.add('active');
}

/* ========================
   MENU TOGGLE
======================== */
function toggleMenu() {
    var nav = document.getElementById('navLinks');
    if (nav) nav.classList.toggle('open');
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