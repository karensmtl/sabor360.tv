import { CDN } from './config.js';

export function escapeAttr(value) {
    return String(value || '').replace(/'/g, "\\'");
}

export function buildImageUrl(post, sizeIndex = 0) {
    if (!post.image || !post.sizes) return '';
    const sizes = post.sizes.split(';');
    const size = sizes[sizeIndex] || sizes[0];
    return CDN + post.image + '-' + size + '.webp';
}

export function formatDate(date) {
    if (!date) return '';
    return new Date(date).toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
