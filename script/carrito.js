

document.addEventListener('DOMContentLoaded', function () {
    // Variables
    const productosContainer = document.getElementById('productos');
    const totalAmountElement = document.getElementById('totalAmount');
    const vaciarCarritoButton = document.getElementById('vaciarCarrito');

    // Obtener productos del localStorage
    const productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Función para mostrar los productos en el carrito
    function mostrarProductosEnCarrito() {
        productosContainer.innerHTML = '';

        productosEnCarrito.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto-en-carrito');
            productoElement.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="info">
                    <h4>${producto.nombre}</h4>
                    <p>Precio: $${producto.precio.toFixed(2)}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                </div>
            `;
            productosContainer.appendChild(productoElement);
        });

        actualizarTotal();
    }

    // Función para actualizar el total
    function actualizarTotal() {
        const total = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
        totalAmountElement.textContent = total.toFixed(2);
    }

    // Función para vaciar el carrito
    function vaciarCarrito() {
        productosEnCarrito.length = 0;
        localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
        mostrarProductosEnCarrito();
    }

    // Mostrar productos al cargar la página
    mostrarProductosEnCarrito();

    // Evento para vaciar el carrito
    vaciarCarritoButton.addEventListener('click', vaciarCarrito);
});
 // Función para agregar un producto al carrito
 function agregarAlCarrito(producto) {
    const productoExistente = productosEnCarrito.find(p => p.id === producto.id);

    if (productoExistente) {
        // Si el producto ya está en el carrito, aumentar la cantidad
        productoExistente.cantidad += producto.cantidad;
    } else {
        // Si el producto no está en el carrito, agregarlo
        productosEnCarrito.push(producto);
    }

    // Guardar en localStorage
    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));

    // Actualizar la visualización del carrito
    mostrarProductosEnCarrito();
}

// Obtener el formulario de agregar producto
const agregarProductoForm = document.getElementById('agregarProductoForm');

// Evento para agregar un producto al carrito
agregarProductoForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const id = agregarProductoForm.querySelector('#productId').value;
    const nombre = agregarProductoForm.querySelector('#productName').value;
    const precio = parseFloat(agregarProductoForm.querySelector('#productPrice').value);
    const cantidad = parseInt(agregarProductoForm.querySelector('#productQuantity').value);

    if (id && nombre && !isNaN(precio) && !isNaN(cantidad) && precio > 0 && cantidad > 0) {
        const nuevoProducto = {
            id,
            nombre,
            precio,
            cantidad,
            // Agrega la imagen del producto y otros detalles según tus necesidades
            imagen: 'ruta_de_la_imagen.jpg',
            descripcion: 'Descripción del producto',
        };

        agregarAlCarrito(nuevoProducto);

        // Limpiar el formulario después de agregar un producto
        agregarProductoForm.reset();
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
});
