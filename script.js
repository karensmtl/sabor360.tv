// Datos de recetas
const recetas = [
    {
        id: 1,
        nombre: "Arepas Rellenas",
        categoria: "desayuno",
        tiempo: "30 min",
        porciones: 4,
        descripcion: "Deliciosas arepas colombianas rellenas de queso y carne desmechada",
        imagen: "img/arepa.jpg",
        likes: 0,
        ingredientes: [
            "500g de harina de maíz precocida",
            "500g de carne de cerdo en trozos",
            "500g de pollo en presas pequeñas",
            "200g de tocineta",
            "1 cebolla grande",
            "3 tomates",
            "1 pimentón rojo",
            "Cilantro y cebolla larga",
            "Comino, sal y pimienta",
            "Color o achiote"
        ],
        pasos: [
            "Cocina el arroz con el doble de agua hasta que esté medio cocido.",
            "En una olla grande, sofríe la cebolla, tomate y pimentón picados.",
            "Agrega las carnes y la tocineta, cocina hasta dorar.",
            "Añade el arroz medio cocido y mezcla bien.",
            "Incorpora el cilantro, cebolla larga y especias al gusto.",
            "Cocina a fuego medio hasta que el arroz esté completamente cocido.",
            "Sirve caliente acompañado de aguacate."
        ]
    },
    {
        id: 2,
        nombre: "Sancocho Valluno",
        categoria: "almuerzo",
        tiempo: "90 min",
        porciones: 6,
        descripcion: "El sancocho tradicional del Valle del Cauca, lleno de sabor",
        imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        likes: 0,
        ingredientes: [
            "1 kg de carne de res",
            "500g de yuca",
            "3 plátanos verdes",
            "3 mazorcas",
            "1 libra de papa criolla",
            "Cilantro cimarrón",
            "Cebolla, ajo, comino",
            "Sal al gusto"
        ],
        pasos: [
            "En una olla grande, hierve la carne con agua suficiente y sal.",
            "Cuando la carne esté medio cocida, agrega la yuca cortada.",
            "Añade los plátanos pelados y cortados en trozos.",
            "Incorpora las mazorcas cortadas en ruedas.",
            "Agrega las papas criollas enteras.",
            "Prepara un hogao con cebolla, ajo y cilantro, añádelo al sancocho.",
            "Cocina hasta que todos los ingredientes estén tiernos.",
            "Rectifica la sal y sirve bien caliente con arroz y aguacate."
        ]
    },
    {
        id: 3,
        nombre: "Empanadas Vallecaucanas",
        categoria: "cena",
        tiempo: "45 min",
        porciones: 8,
        descripcion: "Crujientes empanadas rellenas de papa y carne",
        imagen: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
        likes: 0,
        ingredientes: [
            "500g de harina de maíz",
            "300g de carne molida",
            "3 papas grandes",
            "1 cebolla",
            "2 tomates",
            "Comino y sal",
            "Aceite para freír"
        ],
        pasos: [
            "Cocina y machaca las papas.",
            "Prepara un guiso con la carne, cebolla y tomate.",
            "Mezcla las papas con el guiso de carne.",
            "Prepara la masa con harina de maíz y agua tibia.",
            "Forma círculos con la masa y coloca el relleno.",
            "Dobla y sella bien los bordes.",
            "Fríe en aceite caliente hasta dorar.",
            "Escurre y sirve calientes con ají."
        ]
    },
    {
        id: 4,
        nombre: "Manjar Blanco",
        categoria: "postres",
        tiempo: "60 min",
        porciones: 10,
        descripcion: "El postre tradicional del Valle del Cauca",
        imagen: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
        likes: 0,
        ingredientes: [
            "2 litros de leche",
            "500g de azúcar",
            "1 astilla de canela",
            "Ralladura de limón",
            "2 cucharadas de maicena"
        ],
        pasos: [
            "Hierve la leche con la canela y ralladura de limón.",
            "Agrega el azúcar y revuelve hasta disolver.",
            "Disuelve la maicena en un poco de leche fría.",
            "Añade la maicena a la mezcla hirviendo.",
            "Cocina a fuego medio, revolviendo constantemente.",
            "Continúa cocinando hasta que espese y se desprenda del fondo.",
            "Vierte en un molde y deja enfriar.",
            "Refrigera hasta que cuaje completamente."
        ]
    },
    {
        id: 5,
        nombre: "Arroz Atollado",
        categoria: "almuerzo",
        tiempo: "70 min",
        porciones: 6,
        descripcion: "Plato típico vallecaucano con arroz, carnes y especias",
        imagen: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=400&h=300&fit=crop",
        likes: 0,
        ingredientes: [
            "500g de arroz",
            "500g de carne de cerdo",
            "500g de pollo",
            "200g de tocineta",
            "Hogao (cebolla, tomate, ajo)",
            "Cilantro, comino",
            "Sal y achiote"
        ],
        pasos: [
            "Cocina las carnes por separado hasta que estén tiernas.",
            "Prepara un hogao con cebolla, tomate y ajo.",
            "Agrega el arroz al hogao y sofríe ligeramente.",
            "Añade las carnes cortadas en trozos.",
            "Vierte caldo caliente (doble cantidad que el arroz).",
            "Cocina a fuego medio-bajo revolviendo ocasionalmente.",
            "Cuando el arroz esté cremoso, agrega cilantro picado.",
            "Sirve caliente acompañado de plátano maduro frito."
        ]
    },
    {
        id: 6,
        nombre: "Pandebono",
        categoria: "desayuno",
        tiempo: "35 min",
        porciones: 12,
        descripcion: "Pan de queso tradicional colombiano",
        imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
        likes: 0,
        ingredientes: [
            "250g de almidón de yuca",
            "250g de harina de maíz",
            "300g de queso rallado",
            "2 huevos",
            "50ml de leche",
            "1 cucharadita de polvo de hornear"
        ],
        pasos: [
            "Precalienta el horno a 200°C.",
            "Mezcla el almidón, harina de maíz y polvo de hornear.",
            "Agrega el queso rallado y mezcla bien.",
            "Incorpora los huevos batidos y la leche.",
            "Amasa hasta obtener una masa homogénea.",
            "Forma bolitas del tamaño de una pelota de golf.",
            "Coloca en bandeja engrasada.",
            "Hornea por 25 minutos hasta dorar."
        ]
    }
];

// Función para renderizar recetas
function renderRecipes(filter = 'todas') {
    const grid = document.getElementById('recipesGrid');
    const filteredRecetas = filter === 'todas' 
        ? recetas 
        : recetas.filter(r => r.categoria === filter);

    grid.innerHTML = filteredRecetas.map(receta => `
        <div class="recipe-card" data-id="${receta.id}">
            <div class="recipe-image">
                <img src="${receta.imagen}" alt="${receta.nombre}">
                <span class="recipe-badge">${receta.categoria}</span>
            </div>
            <div class="recipe-content">
                <h3>${receta.nombre}</h3>
                <div class="recipe-meta">
                    <span>⏱ ${receta.tiempo}</span>
                    <span>👥 ${receta.porciones} porciones</span>
                </div>
                <p class="recipe-description">${receta.descripcion}</p>
                <div class="like-section">
                    <button class="like-btn" onclick="toggleLike(event, ${receta.id})">
                        <span class="heart">♡</span>
                        <span class="like-count">${receta.likes}</span>
                    </button>
                    <button class="ver-receta-btn" onclick="openRecipe(${receta.id})">Ver Receta</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Event listeners para filtros
document.addEventListener('DOMContentLoaded', function() {
    // Filtros de recetas
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderRecipes(this.dataset.filter);
        });
    });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Cerrar modal al hacer clic fuera
    document.getElementById('recipeModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Cerrar menú al hacer clic en un enlace (móvil)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('active');
        });
    });

    // Inicializar recetas
    renderRecipes();
});

// Función para dar like
function toggleLike(event, id) {
    event.stopPropagation();
    const receta = recetas.find(r => r.id === id);
    const btn = event.currentTarget;
    
    if (btn.classList.contains('liked')) {
        receta.likes--;
        btn.classList.remove('liked');
        btn.querySelector('.heart').textContent = '♡';
    } else {
        receta.likes++;
        btn.classList.add('liked');
        btn.querySelector('.heart').textContent = '♥';
    }
    
    btn.querySelector('.like-count').textContent = receta.likes;
}

// Función para abrir modal de receta
function openRecipe(id) {
    const receta = recetas.find(r => r.id === id);
    const modal = document.getElementById('recipeModal');
    
    document.getElementById('modalTitle').textContent = receta.nombre;
    document.getElementById('modalMeta').innerHTML = `
        <span>⏱ ${receta.tiempo}</span>
        <span>👥 ${receta.porciones} porciones</span>
    `;
    document.getElementById('modalImage').src = receta.imagen;
    
    document.getElementById('modalIngredientes').innerHTML = 
        receta.ingredientes.map(ing => `<li>${ing}</li>`).join('');
    
    document.getElementById('modalPreparacion').innerHTML = 
        receta.pasos.map(paso => `<li>${paso}</li>`).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal
function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Toggle menu móvil
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}