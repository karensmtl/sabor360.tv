export function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) nav.classList.toggle('open');
}

export function openArticle(slug) {
    window.location.href = '/post.html?slug=' + encodeURIComponent(slug);
}

export function initNav() {
    const btn = document.querySelector('.menu-toggle');
    if (btn) btn.addEventListener('click', toggleMenu);
}
