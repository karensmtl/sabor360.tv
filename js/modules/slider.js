import { state } from '../core/state.js';
import { buildImageUrl, escapeAttr, formatDate } from '../core/helpers.js';
import { openArticle } from './nav.js';

export function buildSlider() {
    const posts = state.posts;
    const track = document.getElementById('sliderTrack');
    const dots = document.getElementById('sliderDots');
    if (!track || !dots) return;

    if (!posts.length) {
        track.innerHTML = '';
        dots.innerHTML = '';
        return;
    }

    state.currentSlide = 0;

    track.innerHTML = posts.map((p, i) => {
        const img = buildImageUrl(p, 1);
        return `<div class="slide" data-slug="${escapeAttr(p.slug)}">
            <img src="${img}" alt="${p.title}" loading="${i === 0 ? 'eager' : 'lazy'}">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <span class="slide-category">${p.category}</span>
                <div class="slide-title">${p.title}</div>
                <div class="slide-desc">${p.subtitle}</div>
                <div class="slide-date">${formatDate(p.published_at)}</div>
            </div>
        </div>`;
    }).join('');

    dots.innerHTML = posts.map((_, i) =>
        `<div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
    ).join('');

    track.querySelectorAll('.slide').forEach(el => {
        el.addEventListener('click', () => openArticle(el.dataset.slug));
    });
    dots.querySelectorAll('.dot').forEach(el => {
        el.addEventListener('click', () => goToSlide(Number(el.dataset.index)));
    });

    goToSlide(0);
    startAutoSlide();
}

export function goToSlide(index) {
    const posts = state.posts;
    if (!posts.length) return;
    state.currentSlide = index;

    const track = document.getElementById('sliderTrack');
    if (track) track.style.transform = `translateX(-${index * 100}%)`;

    document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === index);
    });
}

export function slideNext() {
    const n = state.posts.length;
    if (!n) return;
    goToSlide((state.currentSlide + 1) % n);
}

export function slidePrev() {
    const n = state.posts.length;
    if (!n) return;
    goToSlide((state.currentSlide - 1 + n) % n);
}

export function startAutoSlide() {
    clearInterval(state.slideTimer);
    state.slideTimer = setInterval(slideNext, 5000);
}

export function initSliderControls() {
    const prev = document.querySelector('.slider-btn.prev');
    const next = document.querySelector('.slider-btn.next');
    if (prev) prev.addEventListener('click', slidePrev);
    if (next) next.addEventListener('click', slideNext);
}
