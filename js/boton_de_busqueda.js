/**********************
 * DATOS DE PRODUCTOS
 **********************/
const productos = [

    //--Alimentos--//

    // Bebidas
    {
        id: "coca_cola",
        nombre: "Coca Cola",
        url: "productos/Alimentos/bebidas/coca_cola.html",
        categoria: "Bebidas",
        precio: 80, // número para carrito
        precioTexto: "Precio: $80 / 2 Litros", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/refresco/coca_cola.avif"
    },
    {
        id: "country_club_frambuesa",
        nombre: "Country Club Frambuesa",
        url: "productos/Alimentos/bebidas/country_club_frambuesa.html",
        categoria: "Bebidas",
        precio: 70, // número para carrito
        precioTexto: "Precio: $70 / 2 Litros", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/refresco/country_club_frambuesa.avif"
    },
      {
        id: "country_club_uva",
        nombre: "Country Club Uva",
        url: "productos/Alimentos/bebidas/country_club_uva.html",
        categoria: "Bebidas",
        precio: 70, // número para carrito
        precioTexto: "Precio: $70 / 2 Litros", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/refresco/country_club_uva.avif"
    },
     {
        id: "gatorade_uva",
        nombre: "Gatorade Uva",
        url: "productos/Alimentos/bebidas/gatorade_uva.html",
        categoria: "Bebidas",
        precio: 75, // número para carrito
        precioTexto: "Precio: $75", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/energizantes/gatorade_uva.avif"
    },
     {
        id: "jugo_de_naranja_rica",
        nombre: "Jugo de Naranja Rica",
        url: "productos/Alimentos/bebidas/jugo_naranja_rica.html",
        categoria: "Bebidas",
        precio: 55, // número para carrito
        precioTexto: "Precio: $55", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/jugo/jugo_naranja_rica.avif"
    },
      {
        id: "jugo_de_pera_santal",
        nombre: "Jugo de Pera Santal",
        url: "productos/Alimentos/bebidas/jugo_pera_santal.html",
        categoria: "Bebidas",
        precio: 30, // número para carrito
        precioTexto: "Precio: $30", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/jugo/jugo_pera_santal.avif"
    },
    {
        id: "red_bull",
        nombre: "Red Bull",
        url: "productos/Alimentos/bebidas/red_bull.html",
        categoria: "Bebidas",
        precio: 90, // número para carrito
        precioTexto: "Precio: $90", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/Bebidas/energizantes/red_bull.avif"
    },

    //Carnes, pescados y mariscos
    {
        id: "camarones_crudos",
        nombre: "Camarones Crudos",
        url: "productos/Alimentos/carnes_pescados_y_mariscos/camarones_crudos.html",
        categoria: "carnes_pescados_y_mariscos",
        precio: 350, // número para carrito
        precioTexto: "$350.00 / 1 LB", // texto para mostrar en resultados
        imagen: "imagenes/productos/Alimentos/carnes_pescados_mariscos/mariscos/camarones_crudos.avif"
    },
    





    {
        id: "nevera-lg",
        nombre: "Nevera LG",
        url: "productos/electrodomesticos/cocina/nevera_lg.html",
        categoria: "Electrodomésticos",
        precio: 45000,
        imagen: "imagenes/productos/electrodomesticos/nevera_lg.jpg"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const btnBuscar = document.getElementById("btn-buscar");
    const inputBuscar = document.getElementById("input-buscar");
    const resultados = document.getElementById("resultados-busqueda");
    const body = document.body;
    const contenedorResultados = document.getElementById("lista-resultados");
    const tituloResultados = document.getElementById("titulo-resultados");
    const sinResultados = document.getElementById("sin-resultados");

    /**********************
     * CARRO DE COMPRAS
     **********************/
    const STORAGE_KEY = 'carrito';
    const listaCarrito = document.getElementById('lista-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const totalCarritoEl = document.getElementById('total-carrito');
    let carrito = cargarCarrito();

    function guardarCarrito() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
    }

    function cargarCarrito() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    }

    function renderizarCarrito() {
        if (!listaCarrito) return;
        if (carrito.length === 0) {
            listaCarrito.innerHTML = '<p>Tu carrito está vacío.</p>';
        } else {
            listaCarrito.innerHTML = carrito.map(item => {
                const subtotal = (Number(item.precio) || 0) * (item.cantidad || 0);
                return `
                    <div class="item-carrito" data-id="${escapeHtml(item.id)}">
                        <div class="carrito-item-info">
                            <strong>${escapeHtml(item.nombre)}</strong>
                            <div>RD$ ${Number(item.precio).toLocaleString()}</div>
                        </div>
                        <div class="carrito-item-cantidad">
                            <button class="btn-decrease" aria-label="Disminuir cantidad">−</button>
                            <span class="cantidad">${item.cantidad}</span>
                            <button class="btn-increase" aria-label="Aumentar cantidad">+</button>
                        </div>
                        <div class="carrito-item-subtotal">RD$ ${Number(subtotal).toLocaleString()}</div>
                        <button class="btn-eliminar" aria-label="Eliminar producto">Eliminar</button>
                    </div>
                `;
            }).join('');
        }

        const total = carrito.reduce((sum, it) => sum + (Number(it.precio) || 0) * (it.cantidad || 0), 0);
        if (totalCarritoEl) totalCarritoEl.textContent = Number(total).toLocaleString();
        if (contadorCarrito) {
            const totalUnidades = carrito.reduce((s, it) => s + (it.cantidad || 0), 0);
            contadorCarrito.textContent = totalUnidades;
        }
    }

    function agregarProducto(producto) {
        const existente = carrito.find(i => i.id === producto.id);
        if (existente) {
            existente.cantidad += 1;
        } else {
            carrito.push({ id: producto.id, nombre: producto.nombre, precio: Number(producto.precio) || 0, cantidad: 1 });
        }
        guardarCarrito();
        renderizarCarrito();
    }

    function eliminarProducto(id) {
        carrito = carrito.filter(i => i.id !== id);
        guardarCarrito();
        renderizarCarrito();
    }

    function cambiarCantidad(id, delta) {
        const item = carrito.find(i => i.id === id);
        if (!item) return;
        item.cantidad += delta;
        if (item.cantidad <= 0) {
            eliminarProducto(id);
        } else {
            guardarCarrito();
            renderizarCarrito();
        }
    }

    window.toggleCarrito = function () {
        const carritoEl = document.getElementById('carrito');
        if (!carritoEl) return;
        carritoEl.classList.toggle('activo');
    };

    function escapeHtml(str) {
        if (typeof str !== 'string') return str;
        return str.replace(/[&<>\"']/g, function (m) {
            return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": "&#39;" })[m];
        });
    }

    renderizarCarrito();

    // Delegación global para botones de carrito
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-agregar');
        if (btn) {
            const card = btn.closest('.resultado-card');
            if (!card) return;
            const id = btn.dataset.id;
            const nombre = btn.dataset.nombre;
            const precio = Number(btn.dataset.precio) || 0;
            agregarProducto({ id, nombre, precio });
        }

        const itemEl = e.target.closest('.item-carrito');
        if (itemEl) {
            const id = itemEl.dataset.id;
            if (e.target.classList.contains('btn-eliminar')) eliminarProducto(id);
            if (e.target.classList.contains('btn-increase')) cambiarCantidad(id, 1);
            if (e.target.classList.contains('btn-decrease')) cambiarCantidad(id, -1);
        }
    });

    /**********************
     * BUSCADOR / AUTOCOMPLETADO
     **********************/
    if (btnBuscar && inputBuscar) {
        btnBuscar.addEventListener("click", function () {
            body.classList.toggle("menu-busqueda-activa");
            inputBuscar.focus();
        });
    }

    if (inputBuscar && resultados) {
        inputBuscar.addEventListener("input", function () {
            const valor = normalizarTexto(inputBuscar.value);
            resultados.innerHTML = "";

            if (!valor) {
                resultados.style.display = "none";
                return;
            }

            const coincidencias = productos.filter(p =>
                normalizarTexto(p.nombre).includes(valor)
            );

            if (coincidencias.length === 0) {
                resultados.style.display = "none";
                return;
            }

            coincidencias.forEach(p => {
                const li = document.createElement("li");
                li.textContent = p.nombre;
                li.addEventListener("click", () => irAResultados(p.nombre));
                resultados.appendChild(li);
            });

            resultados.style.display = "block";
        });

        inputBuscar.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const texto = inputBuscar.value.trim();
                if (texto !== "") irAResultados(texto);
            }
        });
    }

    /**********************
     * RESULTADOS DE BÚSQUEDA
     **********************/
    if (contenedorResultados && tituloResultados && sinResultados) {
        const params = new URLSearchParams(window.location.search);
        const query = params.get("q") || "";

        tituloResultados.textContent = `Resultados para: "${query}"`;

        const coincidencias = productos.filter(p =>
            normalizarTexto(p.nombre).includes(normalizarTexto(query))
        );

        if (coincidencias.length === 0) {
            sinResultados.style.display = "block";
            return;
        }

        sinResultados.style.display = "none";

        coincidencias.forEach(p => {
            const card = document.createElement("div");
            card.className = "resultado-card";

            card.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <div class="resultado-info">
        <h3>${p.nombre}</h3>
        <div class="resultado-precio">
            ${p.precioTexto ? p.precioTexto : "RD$ " + Number(p.precio).toLocaleString()}
        </div>
        <div class="resultado-botones">
            <button class="btn-agregar"
                data-id="${p.id}"
                data-nombre="${p.nombre}"
                data-precio="${p.precio}">
                Agregar
            </button>
        </div>
    </div>
`;


      card.addEventListener("click", (e) => {
    // Si el click fue en el botón Agregar, NO navegar
    if (e.target.closest(".btn-agregar")) return;

    window.location.href = p.url;
});


            contenedorResultados.appendChild(card);
        });
    }
});

// Normalización de texto (para buscar)
function normalizarTexto(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Redirige a la página de resultados
function irAResultados(texto) {
    const query = encodeURIComponent(texto.trim());
    window.location.href = `resultados_busqueda.html?q=${query}`;
}


 
