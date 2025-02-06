document.addEventListener('DOMContentLoaded', () => {
    // Abrir modales
    const modalLinks = document.querySelectorAll('.card a');
    modalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = link.getAttribute('href');
            const modal = document.querySelector(modalId);
            modal.style.display = 'flex';
        });
    });

    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Cerrar modal al hacer clic fuera del contenido
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    const timestampField = document.getElementById('timestamp');
    const now = new Date();
    timestampField.value = now.toISOString();
});