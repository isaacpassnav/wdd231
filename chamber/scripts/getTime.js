const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu");
    const nav = document.querySelector(".nav");
  
    // Listener para el botón hamburguesa
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("show"); // Alterna la clase 'show' en el menú
      menuButton.classList.toggle("show"); // Cambia el icono del botón
    });
  });
