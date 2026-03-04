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

        const res = await fetch(api + slug);

        const post = await res.json();

        renderPost(post);

        updateMeta(post);

    } catch (err) {

        console.error('Error cargando post', err);

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