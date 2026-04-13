export function initTicker() {
    const ticker = document.querySelector('.ticker-content');
    if (!ticker) return;

    ticker.style.display = 'inline-block';
    ticker.style.position = 'relative';

    let pos = window.innerWidth;

    function move() {
        pos -= 1.5;
        if (pos < -ticker.offsetWidth) pos = window.innerWidth;
        ticker.style.left = pos + 'px';
        requestAnimationFrame(move);
    }
    move();
}
