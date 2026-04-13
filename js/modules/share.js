export function buildShareBar(title, small) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    const cls = small ? 'news-share-bar' : 'article-share-bar';

    return `<div class="${cls}" onclick="event.stopPropagation()">
        <span>Compartir</span>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" class="fb">FB</a>
        <a href="https://wa.me/?text=${text}%20${url}" target="_blank" class="wa">WA</a>
    </div>`;
}
