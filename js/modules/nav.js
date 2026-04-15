export function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) nav.classList.toggle('open');
}

const IS_LOCAL = ['localhost', '127.0.0.1', ''].includes(window.location.hostname);

export function openArticle(slug) {
    const encoded = encodeURIComponent(slug);
    window.location.href = IS_LOCAL
        ? '/post.html?slug=' + encoded
        : '/post/' + encoded;
}

export function initNav() {
    const btn = document.querySelector('.menu-toggle');
    if (btn) btn.addEventListener('click', toggleMenu);
}
