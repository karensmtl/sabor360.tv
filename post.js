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
    const url = encodeURIComponent(buildShareUrl(post));
    const text = encodeURIComponent(buildShareText(post));

    return (
        '<div class="post-share">' +
            '<span class="post-share-label">Compartir:</span>' +

            '<a class="post-share-btn facebook" ' +
                'href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" ' +
                'target="_blank" rel="noopener noreferrer" ' +
                'aria-label="Compartir en Facebook">' +
                'Facebook' +
            '</a>' +

            '<a class="post-share-btn x" ' +
                'href="https://twitter.com/intent/tweet?url=' + url + '&text=' + text + '" ' +
                'target="_blank" rel="noopener noreferrer" ' +
                'aria-label="Compartir en X">' +
                'X' +
            '</a>' +

            '<a class="post-share-btn whatsapp" ' +
                'href="https://wa.me/?text=' + text + '%20' + url + '" ' +
                'target="_blank" rel="noopener noreferrer" ' +
                'aria-label="Compartir en WhatsApp">' +
                'WhatsApp' +
            '</a>' +

            '<button class="post-share-btn copy" type="button" onclick="copyPostLink()">' +
                'Copiar enlace' +
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

document.addEventListener('DOMContentLoaded', loadPost);