/* ========================
   DATA: NOTICIAS
   Para agregar/editar noticias, modifica este array.
   Cada noticia tiene:
     - id, categoria, fecha, titulo, extracto, cuerpo (HTML), imagen, autor
======================== */
const noticias = [
    {
        id: 1,
        categoria: "gestion",
        categoriaLabel: "Gestión",
        fecha: "18 de febrero de 2026",
        titulo: "Inundaciones en Córdoba amenazan con disparar aún más el precio de la carne en Colombia",
        extracto: "Las recientes inundaciones en el departamento de Córdoba, uno de los principales productores ganaderos del país, generan alertas sobre posibles aumentos en el precio de la carne para los próximos meses.",
        imagen: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&h=500&fit=crop",
        autor: "Redacción Sabor 360",
        destacado: true,
        cuerpo: `
            <p>Las fuertes lluvias que golpean al departamento de <strong>Córdoba</strong> desde las últimas semanas están generando una alarma en el sector ganadero colombiano. Según reportes de la Federación Colombiana de Ganaderos (Fedegán), miles de hectáreas de praderas han quedado bajo el agua, afectando directamente a los inventarios de ganado bovino.</p>
            <p>El panorama es preocupante para los comercializadores de carne en todo el país. Córdoba representa aproximadamente el <strong>12% del inventario ganadero nacional</strong>, y cualquier afectación en su productividad se traduce directamente en presión sobre los precios al consumidor final.</p>
            <blockquote>"Si no hay una respuesta rápida de las autoridades y del sector asegurador, vamos a ver un incremento de entre el 15% y el 25% en el precio de la carne en canal durante los próximos dos meses", advirtió un representante gremial.</blockquote>
            <h2>Impacto en restaurantes y sector HORECA</h2>
            <p>Para el sector de restaurantes y servicios de alimentación, esta situación representa un desafío adicional en un contexto donde los márgenes ya son ajustados. Chefs y administradores de restaurantes en ciudades como Bogotá, Medellín y Cali están explorando alternativas proteicas y ajustando sus menús de temporada.</p>
            <p>Expertos recomiendan diversificar los proveedores, explorar cortes alternativos de menor costo y ajustar las cartas sin sacrificar la calidad de la propuesta gastronómica.</p>
        `
    },
    {
        id: 2,
        categoria: "negocios",
        categoriaLabel: "Negocios",
        fecha: "18 de febrero de 2026",
        titulo: "McDonald's elimina los sachets de salsa en sus restaurantes de Chile",
        extracto: "La multinacional de comida rápida da un paso hacia la sostenibilidad eliminando los sobres individuales de salsas en sus más de 100 locales en Chile, reemplazándolos por dispensadores reutilizables.",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=500&fit=crop",
        autor: "Redacción Sabor 360",
        destacado: true,
        cuerpo: `
            <p><strong>McDonald's Chile</strong> anunció la eliminación progresiva de los tradicionales sachets de salsa en todos sus restaurantes del país, en un movimiento que la compañía califica como parte de su estrategia global de sostenibilidad y reducción de residuos plásticos.</p>
            <p>La medida, que comenzó a implementarse de forma piloto en algunos locales de Santiago, consiste en reemplazar los sobres individuales de salsas como ketchup, mostaza y mayonesa por dispensadores reutilizables ubicados en las mesas y zonas de autoservicio.</p>
            <h2>Tendencia regional</h2>
            <p>Esta decisión se alinea con una tendencia que ya han adoptado cadenas de restaurantes en Europa y algunos mercados de Latinoamérica. En Colombia, varias cadenas de comida rápida están evaluando medidas similares ante las nuevas regulaciones sobre plásticos de un solo uso.</p>
            <blockquote>"Cada año generamos toneladas de residuos solo en sachets. Este cambio es pequeño pero su impacto acumulado es enorme", señaló la directiva de sustentabilidad de la compañía.</blockquote>
            <p>La decisión también tiene implicaciones económicas: los dispensadores representan una inversión inicial mayor, pero reducen significativamente el costo por porción a mediano plazo.</p>
        `
    },
    {
        id: 3,
        categoria: "contexto",
        categoriaLabel: "Contexto",
        fecha: "17 de febrero de 2026",
        titulo: "Nuevo decreto Salario Mínimo: ¿Puede el Gobierno fijar un aumento por encima del porcentaje suspendido?",
        extracto: "La controversia jurídica alrededor del salario mínimo 2026 abre un debate sobre los límites del poder ejecutivo y su impacto en el sector de restaurantes y servicios.",
        imagen: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop",
        autor: "Redacción Sabor 360",
        destacado: false,
        cuerpo: `
            <p>La suspensión provisional del decreto que fijó el salario mínimo para 2026 por parte del Consejo de Estado ha generado un escenario de incertidumbre jurídica y económica que afecta directamente a los empresarios del sector HORECA en Colombia.</p>
            <p>El debate central gira en torno a si el Gobierno Nacional tiene facultades para expedir un nuevo decreto que mantenga o incluso supere el porcentaje de aumento inicialmente fijado, mientras el proceso judicial continúa su curso.</p>
            <h2>Impacto en el sector gastronómico</h2>
            <p>Para los restaurantes, que en su mayoría emplean trabajadores con el salario mínimo como base, la incertidumbre complica la planeación financiera del año. Muchos establecimientos ya hicieron ajustes en sus estructuras de costos asumiendo el incremento inicial.</p>
            <blockquote>"No podemos planear con incertidumbre. Necesitamos claridad jurídica para tomar decisiones de contratación y de precios", expresó un empresario del sector en Bogotá.</blockquote>
            <p>Los expertos laboralistas consultados por Sabor 360 coinciden en que el Gobierno tiene opciones legales para actuar, pero advierten que cualquier nuevo decreto podría enfrentar impugnaciones similares.</p>
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
            <p>Las inscripciones están abiertas por cuatro meses a participantes de todo el mundo, divididas en <strong>15 regiones globales</strong>, lo que logra una representación variada del talento culinario. Los preseleccionados serán evaluados por la escuela internacional de artes culinarias en Italia, <strong>ALMA</strong>.</p>
            <h2>Etapas del concurso</h2>
            <p>Posteriormente, los seleccionados participan en finales regionales y los ganadores pasarán a competir en la gran final, donde se elige al ganador global. En el transcurso de la competencia se estarán evaluando tres elementos claves: <strong>creatividad, habilidad técnica y creencia personal.</strong></p>
            <h2>Premios adicionales</h2>
            <p>Los participantes no solo tienen la oportunidad de participar por el premio principal, sino también por tres premios adicionales:</p>
            <p><strong>Premio a la responsabilidad social S. Pellegrino:</strong> lo otorga la asociación de restaurantes sostenibles que gestiona el programa Food Made Good, entregado a quien represente que la comida es mejor cuando es resultado de prácticas socialmente responsables.</p>
            <p><strong>Premio Acqua Panna Connection in Gastronomy:</strong> otorgado por votación de los mentores a quien logre representar su cultura tradicional de la región con visión moderna, creando un enlace entre pasado y futuro.</p>
            <p><strong>Premio Fine Dining Lovers:</strong> otorgado por Fine Dining Lovers Insider, un grupo de periodistas y expertos que identifican cualidades en los platos y escogen el que logre inspirar a un público más amplio.</p>
            <blockquote>Con la séptima edición, S. Pellegrino reafirma su compromiso con la nueva generación de la alta cocina internacional y consolida su papel como impulsor de talento joven en la industria gastronómica.</blockquote>
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
            <p>La <strong>Gastronomía Regenerativa</strong> está tomando fuerza en Colombia como un movimiento que va más allá de lo orgánico o sostenible. Se trata de un enfoque integral que considera el impacto de cada ingrediente desde la semilla hasta el plato, pasando por el bienestar del productor y la salud del suelo.</p>
            <p>En el Valle del Cauca, chefs como <strong>Carlos Yanguas</strong> están liderando esta transformación, estableciendo relaciones directas con agricultores locales y visibilizando ingredientes nativos que habían quedado al margen de la gastronomía comercial.</p>
            <blockquote>"Cuando sabemos de dónde viene cada ingrediente, la historia que tiene y las manos que lo cultivaron, cocinamos diferente. Y eso se siente en el plato", explica Yanguas.</blockquote>
            <h2>El papel de la nutrición</h2>
            <p>La nutricionista <strong>Camila Duque</strong> complementa esta visión desde la ciencia: "No podemos hablar de gastronomía regenerativa sin hablar de nutrición. Un suelo saludable produce alimentos más nutritivos, y eso tiene un impacto directo en la salud de quienes los consumen."</p>
            <p>Este enfoque está comenzando a permear los menús de restaurantes en Cali, Bogotá y Medellín, donde cada vez más chefs incluyen en sus cartas la procedencia de los ingredientes como parte de la experiencia gastronómica.</p>
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

    // Label
    const labels = { todas: 'Todas', noticias: 'Noticias', negocios: 'Negocios', gestion: 'Gestión', contexto: 'Contexto', liderazgo: 'Liderazgo', eventos: 'Eventos' };
    document.getElementById('activeFilterLabel').textContent = labels[filter] || filter;

    // Grid: first = featured, next 2 = standard
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

    // List: remaining
    const list = document.getElementById('newsList');
    const listItems = filtered.slice(3);
    list.innerHTML = listItems.map(n => `
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
    // Most read = first 4
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

    // Events
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
        <div class="article-img-caption">Foto ilustrativa / Sabor 360</div>
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

    document.getElementById('page-home').style.display = 'none';
    document.getElementById('page-article').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    document.getElementById('page-home').style.display = 'block';
    document.getElementById('page-article').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ========================
   FILTER
======================== */
function filterCat(cat) {
    currentFilter = cat;
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.dataset.cat === cat);
    });
    renderNews(cat);
    goHome();
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
   INIT
======================== */
document.addEventListener('DOMContentLoaded', () => {
    buildSlider();
    renderNews();
    renderSidebar();
    setDate();
});