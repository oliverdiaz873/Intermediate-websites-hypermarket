document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'carrito';

    // Cargar carrito desde localStorage o iniciar vacío
    let carrito = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // === Funciones para carrito ===
    function guardarCarrito() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
    }

    function calcularTotalUnidades() {
        return carrito.reduce((sum, p) => sum + p.cantidad, 0);
    }

    function calcularTotalPrecio() {
        return carrito.reduce((sum, p) => sum + p.cantidad * p.precio, 0);
    }

    function agregarProducto(producto) {
        const existente = carrito.find(p => p.id === producto.id);
        if (existente) {
            existente.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
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

    function escapeHtml(str) {
        if (typeof str !== 'string') return str;
        return str.replace(/[&<>"']/g, m =>
            ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":"&#39;" }[m])
        );
    }

    // === Actualizar UI del carrito y contador ===
    function actualizarUI() {
        const contadorCarrito = document.getElementById('contador-carrito');
        if (contadorCarrito) contadorCarrito.textContent = calcularTotalUnidades();

        const totalUnidadesEl = document.getElementById('total-unidades');
        if (totalUnidadesEl) totalUnidadesEl.textContent = calcularTotalUnidades();

        const totalCarritoEl = document.getElementById('total-carrito');
        if (totalCarritoEl) totalCarritoEl.textContent = calcularTotalPrecio().toLocaleString();

        const listaCarrito = document.getElementById('lista-carrito');
        if (listaCarrito) renderizarCarrito(listaCarrito);
    }

    function renderizarCarrito(listaCarrito) {
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

    // === Delegación de eventos para agregar productos ===
   document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-agregar');
    if (!btn) return;

    e.preventDefault(); // <-- evita que el <a> se siga
    e.stopPropagation(); // <-- evita que otros handlers se disparen

    const articulo = btn.closest('.producto');
    if (!articulo) return;

    const id = articulo.dataset.id;
    const nombre = articulo.dataset.nombre;
    const precio = parseFloat(articulo.dataset.precio) || 0;
    const img = articulo.dataset.img || '';
    const url = articulo.dataset.url || null;

    agregarProducto({ id, nombre, precio, img, url });
});


    // === Delegación de eventos dentro del carrito ===
    document.addEventListener('click', e => {
        const itemEl = e.target.closest('.item-carrito');
        if (!itemEl) return;

        const id = itemEl.dataset.id;

        if (e.target.closest('button')) {
            e.preventDefault();
            e.stopPropagation();

            if (e.target.classList.contains('btn-eliminar')) eliminarProducto(id);
            if (e.target.classList.contains('btn-increase')) cambiarCantidad(id, 1);
            if (e.target.classList.contains('btn-decrease')) cambiarCantidad(id, -1);
            return;
        }

        const link = itemEl.querySelector('.carrito-link');
        if (link) window.location.href = link.href;
    });

    // === Inicializar UI al cargar la página ===
    actualizarUI();
});

