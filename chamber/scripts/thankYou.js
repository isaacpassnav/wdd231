
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const applicationDetails = document.getElementById('applicationDetails');

    const fields = ['firstName', 'lastName', 'email', 'phone', 'businessName', 'timestamp'];
    fields.forEach(field => {
        const value = urlParams.get(field);
        if (value) {
            const detailItem = document.createElement('p');
            detailItem.textContent = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${value}`;
            applicationDetails.appendChild(detailItem);
        }
    });
});