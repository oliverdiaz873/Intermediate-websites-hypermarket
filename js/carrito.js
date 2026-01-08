document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'carrito';
    const contadorCarrito = document.getElementById('contador-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalUnidadesEl = document.getElementById('total-unidades');
    const totalCarritoEl = document.getElementById('total-carrito');

    let carrito = cargarCarrito();

    // === Agregar productos ===
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
        const url = articulo.dataset.url || null;

        agregarProducto({ id, nombre, precio, img, url });
    });

    // === Eventos dentro del carrito ===
    if (listaCarrito) {
    listaCarrito.addEventListener('click', e => {
        const itemEl = e.target.closest('.item-carrito');
        if (!itemEl) return;

        const id = itemEl.dataset.id;

        // ⛔ Si el clic fue en un botón, NO navegar
        if (e.target.closest('button')) {
            e.preventDefault();
            e.stopPropagation();

            if (e.target.classList.contains('btn-eliminar')) eliminarProducto(id);
            if (e.target.classList.contains('btn-increase')) cambiarCantidad(id, 1);
            if (e.target.classList.contains('btn-decrease')) cambiarCantidad(id, -1);
            return;
        }

        // ✅ Si el clic fue en el link o imagen → navegar
        const link = itemEl.querySelector('.carrito-link');
        if (link) {
            window.location.href = link.href;
        }
    });
}


    // === Lógica de carrito ===
    function agregarProducto(producto) {
        const existente = carrito.find(p => p.id === producto.id);
        if (existente) existente.cantidad++;
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

    // === Totales ===
    const calcularTotalUnidades = () =>
        carrito.reduce((sum, p) => sum + p.cantidad, 0);

    const calcularTotalPrecio = () =>
        carrito.reduce((sum, p) => sum + p.cantidad * p.precio, 0);

    // === UI ===
    function actualizarUI() {
        if (contadorCarrito) contadorCarrito.textContent = calcularTotalUnidades();
        if (totalUnidadesEl) totalUnidadesEl.textContent = calcularTotalUnidades();
        if (totalCarritoEl) totalCarritoEl.textContent = calcularTotalPrecio().toLocaleString();
        if (listaCarrito) renderizarCarrito();
    }

    function renderizarCarrito() {
        if (carrito.length === 0) {
            listaCarrito.innerHTML = '<p>Tu carrito está vacío.</p>';
            return;
        }

        listaCarrito.innerHTML = carrito.map(p => {
            const subtotal = p.precio * p.cantidad;

            const contenido = `
                <img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.nombre)}" class="item-img">
                <strong>${escapeHtml(p.nombre)}</strong>
            `;

            return `
                <div class="item-carrito" data-id="${escapeHtml(p.id)}">
                    <div class="carrito-item-info">
                        ${p.url
                            ? `<a href="${escapeHtml(p.url)}" class="carrito-link">${contenido}</a>`
                            : contenido}
                        <div>RD$ ${p.precio.toLocaleString()}</div>
                    </div>

                    <div class="carrito-item-cantidad">
                        <button class="btn-decrease">−</button>
                        <span>${p.cantidad}</span>
                        <button class="btn-increase">+</button>
                    </div>

                    <div>RD$ ${subtotal.toLocaleString()}</div>
                    <button class="btn-eliminar">Eliminar</button>
                </div>
            `;
        }).join('');
    }

    // === LocalStorage ===
    function guardarCarrito() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
    }

    function cargarCarrito() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    }

    function escapeHtml(str) {
        if (typeof str !== 'string') return str;
        return str.replace(/[&<>"']/g, m =>
            ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":"&#39;" }[m])
        );
    }

    actualizarUI();
});
