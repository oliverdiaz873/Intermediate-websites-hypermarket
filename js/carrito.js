// Carrito de compras: agregar, mostrar, eliminar y persistencia (localStorage)

document.addEventListener('DOMContentLoaded', () => {
	const STORAGE_KEY = 'carrito';
	// Usaremos delegación de eventos para capturar clicks en botones "Agregar al carrito"
	// de esta forma funciona aunque la estructura cambie o los botones se carguen dinámicamente.
	// const btnAgregar = document.querySelectorAll('.btn-agregar');
	const listaCarrito = document.getElementById('lista-carrito');
	const contadorCarrito = document.getElementById('contador-carrito');
	const totalCarritoEl = document.getElementById('total-carrito');

	let carrito = cargarCarrito();

	// Delegación: capturar clicks en cualquier botón con la clase .btn-agregar
	document.addEventListener('click', (e) => {
		const btn = e.target.closest('.btn-agregar');
		if (!btn) return;

		// La estructura en index.html es: <a><article class="producto" ...></article></a> <button class="btn-agregar">...
		const posibleAnchor = btn.previousElementSibling;
		let articuloEl = null;
		if (posibleAnchor && posibleAnchor.querySelector) {
			articuloEl = posibleAnchor.querySelector('.producto');
		}
		if (!articuloEl) {
			// como fallback, buscar dentro del contenedor
			articuloEl = btn.parentElement.querySelector('.producto');
		}

		if (!articuloEl) {
			console.warn('No se encontró elemento .producto para el botón', btn);
			return;
		}

		let id = articuloEl.dataset.id || articuloEl.getAttribute('data-id');
		let nombre = articuloEl.dataset.nombre || articuloEl.getAttribute('data-nombre') || articuloEl.querySelector('h3')?.textContent?.trim();
		// parseo robusto de precio: aceptar 'RD$ 4,000', '$4000', '4000' etc.
		let rawPrecio = articuloEl.dataset.precio || articuloEl.getAttribute('data-precio') || articuloEl.querySelector('p')?.textContent || '';
		let precio = 0;
		if (rawPrecio) {
			const numero = String(rawPrecio).replace(/[^0-9\.\,]/g, '').replace(/,/g, '');
			const m = numero.match(/\d+\.?\d*/);
			precio = m ? parseFloat(m[0]) : 0;
		}

		// Si no hay id, generar uno a partir del nombre
		if ((!id || id === '') && nombre) {
			id = nombre.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
		}
		if (isNaN(precio)) {
			// intentar extraer del texto <p>
			const p = articuloEl.querySelector('p');
			if (p) {
				const match = p.textContent.replace(/[,\s]/g, '').match(/(\d+\.?\d*)/);
				precio = match ? parseFloat(match[0]) : 0;
			} else {
				precio = 0;
			}
		}

		console.log('Agregar producto:', { id, nombre, precio, rawPrecio });
		agregarProducto({ id, nombre, precio });
	});

	// Render inicial
	renderizarCarrito();

	// Delegación de eventos para botones dentro del carrito (eliminar, +, -)
	listaCarrito.addEventListener('click', (e) => {
		const target = e.target;
		const itemEl = target.closest('.item-carrito');
		if (!itemEl) return;
		const id = itemEl.dataset.id;

		if (target.classList.contains('btn-eliminar')) {
			eliminarProducto(id);
			return;
		}

		if (target.classList.contains('btn-increase')) {
			cambiarCantidad(id, 1);
			return;
		}

		if (target.classList.contains('btn-decrease')) {
			cambiarCantidad(id, -1);
			return;
		}
	});

	// Funciones
	function agregarProducto(producto) {
		const existente = carrito.find(i => i.id === producto.id);
		if (existente) {
			existente.cantidad += 1;
		} else {
			carrito.push({ id: producto.id, nombre: producto.nombre, precio: Number(producto.precio) || 0, cantidad: 1 });
		}
		guardarYRenderizar();
	}

	function eliminarProducto(id) {
		carrito = carrito.filter(i => i.id !== id);
		guardarYRenderizar();
	}

	function cambiarCantidad(id, delta) {
		const item = carrito.find(i => i.id === id);
		if (!item) return;
		item.cantidad += delta;
		if (item.cantidad <= 0) {
			eliminarProducto(id);
		} else {
			guardarYRenderizar();
		}
	}

	function calcularTotal() {
		return carrito.reduce((sum, it) => sum + (Number(it.precio) || 0) * (it.cantidad || 0), 0);
	}

	function actualizarContador() {
		const totalUnidades = carrito.reduce((s, it) => s + (it.cantidad || 0), 0);
		contadorCarrito.textContent = totalUnidades;
	}

	function renderizarCarrito() {
		console.log('Renderizar carrito — items:', carrito.length, carrito);
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

		const total = calcularTotal();
		if (totalCarritoEl) totalCarritoEl.textContent = Number(total).toLocaleString();
		actualizarContador();
	}

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

	function guardarYRenderizar() {
		guardarCarrito();
		renderizarCarrito();
	}

	// función global para alternar visibilidad del carrito (index.html llama a toggleCarrito())
	window.toggleCarrito = function() {
		const carritoEl = document.getElementById('carrito');
		if (!carritoEl) return;
		// La hoja de estilos usa la clase `activo` para mostrar el carrito
		carritoEl.classList.toggle('activo');
	};

	// pequeña utilidad para escapar HTML en strings generadas
	function escapeHtml(str) {
		if (typeof str !== 'string') return str;
		return str.replace(/[&<>\"']/g, function(m) {
			return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[m];
		});
	}

});
