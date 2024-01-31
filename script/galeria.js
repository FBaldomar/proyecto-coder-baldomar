
// Obtener la sección de productos
const productosSection = document.getElementById('productos');

// Obtener el modal y sus elementos
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

// Obtener los productos desde un archivo JSON (puedes almacenarlo localmente o en un servidor)
fetch('./productos.json')
    .then(response => response.json())
    .then(productos => mostrarProductos(productos));

// Función para mostrar los productos en la galería
function mostrarProductos(productos) {
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;

        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio} USD`;

        productoDiv.appendChild(imagen);
        productoDiv.appendChild(nombre);
        productoDiv.appendChild(precio);

        // Agregar un evento click para mostrar detalles del producto
        productoDiv.addEventListener('click', () => mostrarDetalle(producto));

        productosSection.appendChild(productoDiv);
    });
}

// Función para mostrar detalles del producto en el modal
function mostrarDetalle(producto) {
    modalTitle.textContent = producto.nombre;
    modalDescription.textContent = `Descripción: ${producto.descripcion}`;
    modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    modal.style.display = 'none';
}

// Función para agregar productos al carrito (almacenar en localStorage)
function agregarAlCarrito() {
    const productoEnCarrito = {
        nombre: modalTitle.textContent,
        precio: parseFloat(modalTitle.textContent.split(' ')[1]), // Obtener el precio del texto
    };

    // Obtener productos del carrito del localStorage (si existen)
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agregar el producto al carrito
    carrito.push(productoEnCarrito);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Cerrar el modal
    cerrarModal();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    alert('Carrito vaciado correctamente.');
}