const api = 'https://sabor360.tv/api/public/posts/slug/';
const cdn = 'https://sabor360.tv/api/global/cdn';

function getSlug() {
    const params = new URLSearchParams(window.location.search);

    return params.get('slug');
}

function buildImageUrl(post, sizeIndex = 2) {

    if (!post.image || !post.sizes) return '';

    const sizes = post.sizes.split(';');

    const size = sizes[sizeIndex] || sizes[0];

    return cdn + post.image + '-' + size + '.webp';

}

function formatDate(date) {

    return new Date(date).toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

}

async function loadPost() {
    const slug = getSlug();

    if (!slug) return;

    try {
        const res = await fetch(api + slug); // !? IMPORTANTE FETCH

        const post = await res.json();

        renderPost(post);
        console.log('Post cargado:', post);

        updateMeta(post);

    } catch (err) {

        console.error('Error cargando post', err);

    }

}

function buildShareUrl(post) {
    return window.location.href;
}

function buildShareText(post) {
    return post.title || 'Mira esta noticia';
}

function renderShareBar(post) {

    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);

    return (
        '<div class="post-share">' +

            '<span class="post-share-label">Compartir</span>' +

            '<a class="post-share-btn" href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" target="_blank">' +
                facebookIcon() +
            '</a>' +

            '<a class="post-share-btn" href="https://twitter.com/intent/tweet?url=' + url + '&text=' + text + '" target="_blank">' +
                xIcon() +
            '</a>' +

            '<a class="post-share-btn" href="https://wa.me/?text=' + text + '%20' + url + '" target="_blank">' +
                whatsappIcon() +
            '</a>' +

            '<button class="post-share-btn" onclick="copyPostLink()">' +
                linkIcon() +
            '</button>' +

        '</div>'
    );
}

async function copyPostLink() {
    try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Enlace copiado');
    } catch (error) {
        console.error('No se pudo copiar el enlace:', error);
        alert('No se pudo copiar el enlace');
    }
}

function renderPost(post) {
    const container = document.getElementById('postApp');

    if (!container) return;

    const image = buildImageUrl(post);

    container.innerHTML =
        '<div class="post-heading">' +
            '<img class="post-image" src="' + image + '" alt="' + post.title + '">' +
        '</div>' +

        '<div class="post-content">' +
            '<span class="post-category">' + post.category + '</span>' +

            '<h1 class="post-title">' + post.title + '</h1>' +

            '<div class="post-subtitle">' + post.subtitle + '</div>' +

            renderShareBar(post) +

            '<div class="post-meta">' +
                post.author_name + ' · ' + formatDate(post.published_at) +
            '</div>' +

            '<div class="post-html-content">' +
                post.body_html +
            '</div>' +
        '</div>';
}

function updateMeta(post) {

    document.title = post.og_title || post.title;

}

function facebookIcon() {
return `
<svg viewBox="0 0 24 24" width="20" height="20">
<path fill="currentColor" d="M22 12a10 10 0 10-11.5 9.9v-7h-2.9V12h2.9V9.8c0-2.9 1.7-4.5 4.3-4.5 1.2 0 2.5.2 2.5.2v2.7H16c-1.4 0-1.9.9-1.9 1.8V12h3.2l-.5 2.9H14v7A10 10 0 0022 12z"/>
</svg>
`;
}

function xIcon() {
return `
<svg viewBox="0 0 24 24" width="20" height="20">
<path fill="currentColor" d="M18.9 2H22l-7.2 8.2L23 22h-6.4l-5-6.5L5.8 22H2.7l7.7-8.8L1 2h6.6l4.6 6.1L18.9 2z"/>
</svg>
`;
}

function whatsappIcon() {
return `
<svg viewBox="0 0 24 24" width="20" height="20">
<path fill="currentColor" d="M20.5 3.5A11.9 11.9 0 0012 .5C5.7.5.5 5.7.5 12c0 2.1.6 4.1 1.7 5.9L.5 23.5l5.8-1.6A11.8 11.8 0 0012 23.5c6.3 0 11.5-5.2 11.5-11.5 0-3.1-1.2-6-3.5-8.5zM12 21.4c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.4.9.9-3.3-.3-.4A9.4 9.4 0 012.6 12c0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8a9.3 9.3 0 012.8 6.6c0 5.2-4.3 9.4-9.5 9.4z"/>
</svg>
`;
}

function linkIcon() {
return `
<svg viewBox="0 0 24 24" width="20" height="20">
<path fill="currentColor" d="M3.9 12a5 5 0 015-5h3v2h-3a3 3 0 000 6h3v2h-3a5 5 0 01-5-5zm7-1h2v2h-2v-2zm4.2-4h-3v2h3a3 3 0 010 6h-3v2h3a5 5 0 000-10z"/>
</svg>
`;
}

document.addEventListener('DOMContentLoaded', loadPost);