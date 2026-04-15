function stopAllVideos() {
    document.querySelectorAll('iframe[src*="youtube.com"]').forEach(iframe => {
        iframe.src = '';
    });
}

function playVideo(el, videoId) {
    stopAllVideos();
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'width:100%;height:100%;position:absolute;top:0;left:0;border:0;';
    const wrap = el.parentElement;
    wrap.style.position = 'relative';
    wrap.innerHTML = '';
    wrap.appendChild(iframe);
}

function switchTab(tab, btn) {
    document.querySelectorAll('.extra-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.extra-tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const content = document.getElementById('tab-' + tab);
    if (content) content.classList.add('active');
}

export function initPodcast() {
    document.querySelectorAll('.extra-tab-btn[data-tab]').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab, btn));
    });

    document.querySelectorAll('.vid-placeholder[data-videoid]').forEach(el => {
        el.addEventListener('click', () => playVideo(el, el.dataset.videoid));
    });
}
