export function setDate() {
    const el = document.getElementById('currentDate');
    if (!el) return;
    el.textContent = new Date().toLocaleDateString('es-CO', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
