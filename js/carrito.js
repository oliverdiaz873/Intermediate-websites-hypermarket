document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'carrito';
    const contadorCarrito = document.getElementById('contador-carrito');
    const listaCarrito = document.getElementById('lista-carrito'); // solo existe en carrito.html
    const totalUnidadesEl = document.getElementById('total-unidades');
    const totalCarritoEl = document.getElementById('total-carrito');

    let carrito = cargarCarrito();

    // Delegación para agregar productos desde index.html u otras páginas
    document.addEventListener('click', e => {
        const btn = e.target.closest('.btn-agregar');
        if (!btn) return;

        const productoCard = btn.closest('.producto-card');
        if (!productoCard) return;

        const articulo = productoCard.querySelector('.producto');
        if (!articulo) return;

        const id = articulo.dataset.id;
        const nombre = articulo.dataset.nombre;
        const precio = parseFloat(articulo.dataset.precio) || 0;
        const img = articulo.dataset.img || '';

        agregarProducto({ id, nombre, precio, img });
    });

    // Delegación de eventos dentro del carrito (solo si existe)
    if (listaCarrito) {
        listaCarrito.addEventListener('click', e => {
            const target = e.target;
            const itemEl = target.closest('.item-carrito');
            if (!itemEl) return;
            const id = itemEl.dataset.id;

            if (target.classList.contains('btn-eliminar')) eliminarProducto(id);
            if (target.classList.contains('btn-increase')) cambiarCantidad(id, 1);
            if (target.classList.contains('btn-decrease')) cambiarCantidad(id, -1);
        });
    }

    // === Funciones de carrito ===
    function agregarProducto(producto) {
        const existente = carrito.find(p => p.id === producto.id);
        if (existente) existente.cantidad += 1;
        else carrito.push({ ...producto, cantidad: 1 });

        guardarCarrito();
        actualizarUI();
    }

    function eliminarProducto(id) {
        carrito = carrito.filter(p => p.id !== id);
        guardarCarrito();
        actualizarUI();
    }

    function cambiarCantidad(id, delta) {
        const item = carrito.find(p => p.id === id);
        if (!item) return;
        item.cantidad += delta;
        if (item.cantidad <= 0) eliminarProducto(id);
        else {
            guardarCarrito();
            actualizarUI();
        }
    }

    // === Cálculos ===
    function calcularTotalUnidades() {
        return carrito.reduce((sum, p) => sum + p.cantidad, 0);
    }

    function calcularTotalPrecio() {
        return carrito.reduce((sum, p) => sum + p.cantidad * p.precio, 0);
    }

    // === Render UI ===
    function actualizarUI() {
        actualizarContador();
        actualizarAside();
        if (listaCarrito) renderizarCarrito();
    }

    function actualizarContador() {
        if (contadorCarrito) contadorCarrito.textContent = calcularTotalUnidades();
    }

    function actualizarAside() {
        if (totalUnidadesEl) totalUnidadesEl.textContent = calcularTotalUnidades();
        if (totalCarritoEl) totalCarritoEl.textContent = calcularTotalPrecio().toLocaleString();
    }

    function renderizarCarrito() {
        if (!listaCarrito) return;

        if (carrito.length === 0) {
            listaCarrito.innerHTML = '<p>Tu carrito está vacío.</p>';
            return;
        }

        listaCarrito.innerHTML = carrito.map(p => {
            const subtotal = p.precio * p.cantidad;
            return `
                <div class="item-carrito" data-id="${escapeHtml(p.id)}">
                    <img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.nombre)}" class="item-img">
                    <div class="carrito-item-info">
                        <strong>${escapeHtml(p.nombre)}</strong>
                        <div>RD$ ${p.precio.toLocaleString()}</div>
                    </div>
                    <div class="carrito-item-cantidad">
                        <button class="btn-decrease" aria-label="Disminuir cantidad">−</button>
                        <span class="cantidad">${p.cantidad}</span>
                        <button class="btn-increase" aria-label="Aumentar cantidad">+</button>
                    </div>
                    <div class="carrito-item-subtotal">RD$ ${subtotal.toLocaleString()}</div>
                    <button class="btn-eliminar" aria-label="Eliminar producto">Eliminar</button>
                </div>
            `;
        }).join('');
    }

    // === LocalStorage ===
    function guardarCarrito() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
    }

    function cargarCarrito() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch {
            return [];
        }
    }

    function escapeHtml(str) {
        if (typeof str !== 'string') return str;
        return str.replace(/[&<>"']/g, m => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":"&#39;" })[m]);
    }

    // === Inicialización ===
    actualizarUI();
});
