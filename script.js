/* ========================
   DATA: NOTICIAS
======================== */
const noticias = [
    {
        id: 1,
        categoria: "gestion",
        categoriaLabel: "Gestión",
        fecha: "20 de febrero de 2026",
        titulo: "El invierno en Córdoba, puede generar el aumento de los precios de la carne",
        extracto: "Las fuertes lluvias que han azotado al departamento de Córdoba y a otras regiones del Caribe colombiano no solo ha generado una gran crisis humanitaria y económica, sino que  también se ve en amenaza el aumento a los precios de la carne en el país durante lo que resta de 2026.",
        imagen: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&h=500&fit=crop",
        autor: "Redacción Sabor 360",
        destacado: true,
        cuerpo: `
            <p>Según los datos más recientes de la Federación Colombiana de Ganaderos (Fedegán), las inundaciones han dejado más de 3.100 reses muertas y aproximadamente 546.000 animales afectados en el sector pecuario nacional, con un impacto especialmente grave en Córdoba, donde miles de predios y hectáreas de pasturas están bajo el agua.</p>
            <p>Córdoba es una de las regiones más importantes de Colombia para la producción de ganado, dando un aporte  considerable al inventario nacional. La combinación de animales muertos, ganado debilitado por el estrés hídrico y la destrucción de pasturas pone en riesgo la oferta de carne disponible para sacrificio y procesamiento. </p>
            <blockquote>"Además de las pérdidas directas, expertos advierten que, incluso cuando el agua se retire, la recuperación de pastos y la reincorporación de los animales afectados al ciclo productivo se van a tomar meses de trabajo, lo que podría traducirse en una disminución sostenida en la oferta de carne.</blockquote>
            <img src="img/carne.jpg" alt="Ganado en Córdoba" style="width: 100%; border-radius: 8px; margin: 20px 0;">
            
            <p>Antes de la emergencia, el precio de la carne de res ya venía presentando subidas sustanciales dentro de la canasta familiar colombiana. En enero de 2026, por ejemplo, la carne registró una variación anual de casi 11,7%, muy por encima de la inflación general de alimentos.
            Con la oferta más limitada y los costos de producción aumentando —por pérdidas de ganado, pasto y logística— analistas del sector ganadero advierten  que es probable que estos factores se reflejen en nuevos ajustes al alza en los precios que pagan los colombianos  en supermercados y carnicerías durante los próximos meses. </p>
        `
    },
    {
        id: 2,
        categoria: "negocios",
        categoriaLabel: "Negocios",
        fecha: "20 de febrero de 2026",
        titulo: "McDonald's de Chile, le apuesta al medio ambiente",
        extracto: "Desde la “cajita feliz” hasta la construcción de restaurantes con madera sostenible",
        imagen: "img/mac.jpg",
        autor: "Redacción Sabor 360",
        destacado: true,
        cuerpo: `
            <p><strong>La franquicia</strong> de comida más grande a nivel mundial McDonalds Chile da otro gran paso al cuidado del medio ambiente implementando un robot de reciclaje, un restaurante 100% de madera sostenible y la eliminación de los sachets de las salsas. 
</p>
            <p>Su robot sostenible busca que los niños y niñas junto con sus familias hagan parte del reciclaje de cajitas felices de forma entretenida y educativa, esta acción la están realizando en alianza con ReSimple. Funciona de manera que las niñas y niños depositan sus cajitas vacías en el contenedor con forma de robot, y este luego es retirado por ReSimple para llevar los materiales a plantas recicladoras, donde se convierten en nueva materia prima, promoviendo así la economía circular.</p>
            <p>A su vez cuentan con un restaurante en la ciudad de Temuco que fue construido 100% con madera sostenible. Este proyecto pionero en la industria de la comida rápida demuestra su conexión con la región y sus valiosos recursos renovables. Fue una construcción responsable y eficiente a cargo de los arquitectos de Vial Ag, que demoró 10 días, y permitió completar la construcción total en solo 120 días, con madera certificada FSC y PEFC; siendo una alternativa sostenible frente al uso de materiales tradicionales.</p>

            <img src="img/mac1.jpg" alt="Ganado en Córdoba" style="width: 100%; border-radius: 8px; margin: 20px 0;">

            <blockquote>"El restaurante implementa 23 medidas sustentables, como el uso de energía solar, reciclaje de materiales y la instalación de cargadores de autos eléctricos. Estas medidas son parte de nuestra estrategia “Receta del Futuro”, que busca minimizar el impacto ambiental.</blockquote>
            <p>Como parte también de su estrategia para cuidar el medio ambiente decidieron eliminar los sachets de las salsas de sus locales, la persona que quiera acompañar sus papas o hamburguesas con salsa deben acercarse a los dispensadores que han situado al lado del sector de retiro de pedidos. 
Con estas y más estrategias que ha utilizado Mcdonalds Chile busca posicionarse como una que cuida y protege el medio ambiente.
</p>
        `
    },
    {
        id: 3,
        categoria: "contexto",
        categoriaLabel: "Contexto",
        fecha: "20 de febrero de 2026",
        titulo: "En 2026 Qbano, le apuesta al sándwich engallado.",
        extracto: "El objetivo de la marca caleña es crecer un 15%",
        imagen: "img/qb.jpg",
        autor: "Redacción Sabor 360",
        destacado: false,
        cuerpo: `
            <p>La marca colombiana de <strong>sándwich Qbano</strong> inició este año con toda al lanzar su campaña “Engallado”, una edición especial del sándwich ropa vieja con 60% más de proteína lograron vender mas de 50.000 unidades a nivel nacional en 10 días, obteniendo y cumpliendo al 200% las expectativas presupuestadas para este 2026, las cuales constaban de un incremento de ventas de doble digito, proyección a un 15% superior al 2025.</p>
            <p>Esta campaña ha impulsado a que la empresa colombiana empezara a trazar objetivos mas ambiciosos en todos sus puntos de venta a nivel nacional. La meta es de elevar las ventas en más de un 10% en los puntos físicos, la mejora continua del consumidor y la expansión sostenida de la presencia de la marca en el mercado.</p>
            <blockquote>"Según Pilar Amorocho, gerente general de FSQ Group, operador de Qbano, dice que la estrategia para este año combinará la esencia tradicional de sus productos con la innovación necesaria para llamar la atención de nuevos segmentos. Su famosa salsa seguirá siendo un elemento distintivo de la marca.</blockquote>
            <p>Además, se buscará equilibrar el ticket promedio y el incremento constante de transacciones, cuidando la competitividad frente a los hábitos de consumo actuales, también se buscará la fidelización de las audiencias jóvenes. </p>
            
Fotos: www.sandwichqbano.com 

        `
    },
    {
        id: 4,
        categoria: "negocios",
        categoriaLabel: "Negocios",
        fecha: "17 de febrero de 2026",
        titulo: "Qbano proyecta para 2026 un crecimiento de doble dígito con meta de ventas superior al 15%",
        extracto: "La cadena de comida rápida colombiana apuesta por la expansión con nuevas aperturas y renovación de imagen en sus más de 200 puntos de venta en el país.",
        imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=500&fit=crop",
        autor: "Redacción Sabor 360",
        destacado: false,
        cuerpo: `
            <p><strong>Qbano</strong>, la reconocida cadena colombiana de sándwiches y comida rápida, presentó sus metas de crecimiento para 2026 con un ambicioso objetivo de superar el <strong>15% en ventas</strong> respecto al año anterior.</p>
            <p>La compañía, que cuenta con más de 200 puntos de venta en todo el país, planea abrir entre 15 y 20 nuevas unidades durante el año, priorizando ciudades intermedias y centros comerciales de segunda generación.</p>
            <h2>Estrategia de renovación</h2>
            <p>Además de la expansión, Qbano está invirtiendo en la renovación de imagen de sus locales más antiguos, apostando por un concepto más moderno que resuene con las nuevas generaciones de consumidores.</p>
            <blockquote>"Colombia tiene un consumidor que valora lo nuestro. Qbano es una marca con historia y queremos que las nuevas generaciones también nos elijan", afirmó su director comercial.</blockquote>
            <p>El portafolio de productos también tendrá novedades: la cadena planea lanzar nuevas líneas de productos saludables y opciones para dietas especiales, respondiendo a las tendencias del mercado.</p>
        `
    },
    {
        id: 5,
        categoria: "eventos",
        categoriaLabel: "Eventos",
        fecha: "15 de febrero de 2026",
        titulo: "S. Pellegrino Young Chef Academy Competition abre convocatoria para su séptima edición",
        extracto: "La reconocida marca de agua italiana vuelve a abrir la convocatoria para chefs menores de 30 años, dividida en 15 regiones globales con mentorías de figuras del mundo culinario.",
        imagen: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
        autor: "Redacción Sabor 360",
        destacado: true,
        cuerpo: `
            <p>La reconocida marca de agua italiana <strong>S. Pellegrino</strong> vuelve a abrir la convocatoria para su séptima edición del <em>S. Pellegrino Young Chef Academy Competition</em>, un concurso que busca reconocer y proyectar la nueva generación de chefs a nivel mundial.</p>
            <p>Esta convocatoria está dirigida para los cocineros <strong>menores de 30 años</strong>, donde podrán desarrollar e impulsar su talento por medio de las mentorías de grandes figuras del mundo culinario.</p>
            <p>Las inscripciones están abiertas por cuatro meses a participantes de todo el mundo, divididas en <strong>15 regiones globales</strong>. Los preseleccionados serán evaluados por la escuela internacional de artes culinarias en Italia, <strong>ALMA</strong>.</p>
            <h2>Etapas del concurso</h2>
            <p>Los seleccionados participan en finales regionales y los ganadores pasarán a competir en la gran final. Se evaluarán tres elementos claves: <strong>creatividad, habilidad técnica y creencia personal.</strong></p>
            <blockquote>Con la séptima edición, S. Pellegrino reafirma su compromiso con la nueva generación de la alta cocina internacional.</blockquote>
        `
    },
    {
        id: 6,
        categoria: "liderazgo",
        categoriaLabel: "Liderazgo",
        fecha: "14 de febrero de 2026",
        titulo: "Gastronomía Regenerativa: el nuevo paradigma que está cambiando la cocina colombiana",
        extracto: "Chef Carlos Yanguas y la nutricionista Camila Duque explican cómo la trazabilidad del productor al plato está transformando la narrativa gastronómica en el Valle del Cauca.",
        imagen: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=500&fit=crop",
        autor: "Equipo Sabor 360",
        destacado: false,
        cuerpo: `
            <p>La <strong>Gastronomía Regenerativa</strong> está tomando fuerza en Colombia como un movimiento que va más allá de lo orgánico o sostenible.</p>
            <p>En el Valle del Cauca, chefs como <strong>Carlos Yanguas</strong> están liderando esta transformación, estableciendo relaciones directas con agricultores locales y visibilizando ingredientes nativos.</p>
            <blockquote>"Cuando sabemos de dónde viene cada ingrediente, la historia que tiene y las manos que lo cultivaron, cocinamos diferente. Y eso se siente en el plato", explica Yanguas.</blockquote>
            <h2>El papel de la nutrición</h2>
            <p>La nutricionista <strong>Camila Duque</strong> complementa esta visión desde la ciencia: "Un suelo saludable produce alimentos más nutritivos, y eso tiene un impacto directo en la salud de quienes los consumen."</p>
        `
    }
];

/* ========================
   STATE
======================== */
let currentSlide = 0;
let slideTimer = null;
let currentFilter = 'todas';
const sliderArticles = noticias.filter(n => n.destacado);

/* ========================
   PAGES
======================== */
const ALL_PAGES = ['page-home', 'page-videos', 'page-quienes', 'page-article'];

function showSection(sec) {
    ALL_PAGES.forEach(p => {
        const el = document.getElementById(p);
        if (el) el.style.display = 'none';
    });
    const target = document.getElementById('page-' + sec);
    if (target) target.style.display = 'block';

    // Solo marcar active el link que coincida exactamente
    document.querySelectorAll('.nav-links a').forEach(a => {
        if (sec === 'home') {
            a.classList.toggle('active', a.dataset.sec === 'home' && !a.dataset.cat);
        } else {
            a.classList.toggle('active', a.dataset.sec === sec);
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
/* ========================
   SLIDER
======================== */
function buildSlider() {
    const track = document.getElementById('sliderTrack');
    const dotsContainer = document.getElementById('sliderDots');

    track.innerHTML = sliderArticles.map((n, i) => `
        <div class="slide" onclick="openArticle(${n.id})">
            <img src="${n.imagen}" alt="${n.titulo}" loading="${i === 0 ? 'eager' : 'lazy'}">
            <div class="slide-overlay"></div>
            <div class="slide-content">
                <span class="slide-category">${n.categoriaLabel}</span>
                <div class="slide-title">${n.titulo}</div>
                <div class="slide-desc">${n.extracto}</div>
                <div class="slide-date">${n.fecha}</div>
            </div>
        </div>
    `).join('');

    dotsContainer.innerHTML = sliderArticles.map((_, i) => `
        <div class="dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>
    `).join('');

    startAutoSlide();
}

function goToSlide(index) {
    currentSlide = index;
    document.getElementById('sliderTrack').style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

function slideNext() {
    goToSlide((currentSlide + 1) % sliderArticles.length);
}

function slidePrev() {
    goToSlide((currentSlide - 1 + sliderArticles.length) % sliderArticles.length);
}

function startAutoSlide() {
    clearInterval(slideTimer);
    slideTimer = setInterval(slideNext, 5000);
}

/* ========================
   NEWS GRID
======================== */
function renderNews(filter = 'todas') {
    currentFilter = filter;
    const filtered = filter === 'todas' ? noticias : noticias.filter(n => n.categoria === filter);

    const labels = { todas: 'Todas', noticias: 'Noticias', negocios: 'Negocios', gestion: 'Gestión', contexto: 'Contexto', liderazgo: 'Liderazgo', eventos: 'Eventos' };
    document.getElementById('activeFilterLabel').textContent = labels[filter] || filter;

    const grid = document.getElementById('newsGrid');
    const gridItems = filtered.slice(0, 3);
    grid.innerHTML = gridItems.map((n, i) => {
        if (i === 0) {
            return `
                <div class="news-card featured" onclick="openArticle(${n.id})">
                    <img class="news-img" src="${n.imagen}" alt="${n.titulo}" loading="lazy">
                    <div class="news-card-body">
                        <span class="news-cat">${n.categoriaLabel}</span>
                        <div class="news-title">${n.titulo}</div>
                        <div class="news-excerpt">${n.extracto}</div>
                        <div class="news-meta">${n.fecha} &nbsp;·&nbsp; ${n.autor}</div>
                    </div>
                </div>`;
        }
        return `
            <div class="news-card" onclick="openArticle(${n.id})">
                <img class="news-img" src="${n.imagen}" alt="${n.titulo}" loading="lazy">
                <div class="news-card-body">
                    <span class="news-cat">${n.categoriaLabel}</span>
                    <div class="news-title">${n.titulo}</div>
                    <div class="news-meta">${n.fecha}</div>
                </div>
            </div>`;
    }).join('');

    const list = document.getElementById('newsList');
    list.innerHTML = filtered.slice(3).map(n => `
        <div class="news-list-item" onclick="openArticle(${n.id})">
            <img src="${n.imagen}" alt="${n.titulo}" loading="lazy">
            <div>
                <span class="news-cat">${n.categoriaLabel}</span>
                <div class="news-title">${n.titulo}</div>
                <div class="news-meta">${n.fecha}</div>
            </div>
        </div>
    `).join('');
}

/* ========================
   SIDEBAR
======================== */
function renderSidebar() {
    const mr = document.getElementById('sidebarMostRead');
    mr.innerHTML = noticias.slice(0, 4).map(n => `
        <div class="sidebar-card" onclick="openArticle(${n.id})">
            <img src="${n.imagen}" alt="${n.titulo}" loading="lazy">
            <div>
                <span class="news-cat">${n.categoriaLabel}</span>
                <div class="news-title">${n.titulo}</div>
            </div>
        </div>
    `).join('');

    const ev = document.getElementById('sidebarEvents');
    const events = noticias.filter(n => n.categoria === 'eventos');
    ev.innerHTML = events.map(n => `
        <div class="sidebar-card" onclick="openArticle(${n.id})">
            <img src="${n.imagen}" alt="${n.titulo}" loading="lazy">
            <div>
                <span class="news-cat">${n.fecha}</span>
                <div class="news-title">${n.titulo}</div>
            </div>
        </div>
    `).join('');
}

/* ========================
   ARTICLE VIEW
======================== */
function openArticle(id) {
    const noticia = noticias.find(n => n.id === id);
    if (!noticia) return;

    const related = noticias.filter(n => n.id !== id).slice(0, 3);

    document.getElementById('articleContent').innerHTML = `
        <a class="article-back" onclick="goHome()">&#8592; Volver a Noticias</a>
        <span class="article-category">${noticia.categoriaLabel}</span>
        <h1 class="article-title">${noticia.titulo}</h1>
        <div class="article-meta">
            <span><strong>${noticia.autor}</strong></span>
            <span>·</span>
            <span>${noticia.fecha}</span>
        </div>
        <img class="article-hero-img" src="${noticia.imagen}" alt="${noticia.titulo}">
        <div class="article-img-caption">Foto iA / Sabor 360</div>
        <div class="article-body">
            <p><strong>${noticia.extracto}</strong></p>
            ${noticia.cuerpo}
        </div>
        <div class="related-section">
            <h3>Noticias relacionadas</h3>
            <div class="related-grid">
                ${related.map(r => `
                    <div class="related-card" onclick="openArticle(${r.id})">
                        <img src="${r.imagen}" alt="${r.titulo}" loading="lazy">
                        <span class="news-cat">${r.categoriaLabel}</span>
                        <div class="news-title">${r.titulo}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    showSection('article');
}

/* ========================
   NAVIGATION
======================== */
function goHome() {
    showSection('home');
}

function filterCat(cat) {
    renderNews(cat);
    showSection('home');
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.dataset.cat === cat);
    });
}

/* ========================
   TABS (Videos/Podcast)
======================== */
function switchTab(name, btn) {
    document.querySelectorAll('.extra-tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.extra-tab-btn').forEach(b => b.classList.remove('active'));
    const tab = document.getElementById('tab-' + name);
    if (tab) tab.classList.add('active');
    btn.classList.add('active');
}

/* ========================
   MENU TOGGLE
======================== */
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}

/* ========================
   DATE
======================== */
function setDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('es-CO', options);
}

/* ========================
   TICKER JS
======================== */
function initTicker() {
    const ticker = document.querySelector('.ticker-content');
    if (!ticker) return;
    ticker.style.display = 'inline-block';
    let pos = window.innerWidth;
    
    function move() {
        pos -= 1.5;
        if (pos < -ticker.offsetWidth) pos = window.innerWidth;
        ticker.style.position = 'relative';
        ticker.style.left = pos + 'px';
        requestAnimationFrame(move);
    }
    move();
}

/* ========================
   INIT
======================== */
document.addEventListener('DOMContentLoaded', () => {
    buildSlider();
    renderNews();
    renderSidebar();
    setDate();
    initTicker();
});