// Carrito de compras básico
let cartCount = 0;

document.querySelector('.cart').addEventListener('click', function() {
    alert('Carrito de compras');
});

function updateCartCount() {
    document.querySelector('.cart-count').textContent = cartCount;
}

// Búsqueda básica
document.querySelector('.search-bar button').addEventListener('click', function() {
    const query = document.querySelector('.search-bar input').value;
    alert(`Buscando: ${query}`);
});

// Carrusel de imagenes para inicio
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Calcular la nueva posición del carrusel
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Aplicar la transformación para mostrar la imagen correcta
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}
