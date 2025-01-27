document.addEventListener("DOMContentLoaded", () => {
    const carouselImages = document.querySelector(".carousel-images");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const images = document.querySelectorAll(".carousel-images img");
    const totalImages = images.length;

    let currentIndex = 0; 
    let intervalId; 

    // Actualizar el carrusel
    function updateCarousel() {
        const offset = -currentIndex * 100; 
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    // Mover al siguiente slide
    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages; // Incrementar índice y reiniciar si llega al final
        updateCarousel();
    }
    // Mover al slide anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
        updateCarousel();
    }

    // Iniciar el deslizamiento automático
    function startAutoSlide() {
        intervalId = setInterval(nextImage, 5000); 
    }
    // Detener el deslizamiento automático
    function stopAutoSlide() {
        clearInterval(intervalId);
    }
    // Eventos para los botones de navegación
    nextButton.addEventListener("click", () => {
        stopAutoSlide(); 
        nextImage();
        startAutoSlide(); 
    });
    prevButton.addEventListener("click", () => {
        stopAutoSlide();
        prevImage();
        startAutoSlide();
    });
    startAutoSlide();
});
