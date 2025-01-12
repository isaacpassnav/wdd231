const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;

// Selecciona los elementos del DOM
const mainNav = document.querySelector(".nav");
const hamButton = document.querySelector("#menu");

// Verifica si los elementos existen antes de agregar el evento
if (mainNav && hamButton) {
    hamButton.addEventListener("click", () => {
        // Alternar la clase 'show' para mostrar u ocultar el menú
        mainNav.classList.toggle("show");
        hamButton.classList.toggle("show"); // Cambia el ícono entre ≡ y X
    });
}



