export async function loadPartial(selector, url) {
    const host = document.querySelector(selector);
    if (!host) return;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        host.innerHTML = await res.text();
    } catch (e) {
        console.error('No se pudo cargar partial:', url, e);
    }
}

export async function loadLayout() {
    await Promise.all([
        loadPartial('[data-partial="header"]', '/partials/header.html'),
        loadPartial('[data-partial="footer"]', '/partials/footer.html'),
    ]);
}
