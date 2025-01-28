// Asegurarse de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", async () => {
    const spotlightContainer = document.getElementById("spotlight-container");

    // Función para obtener los miembros desde el JSON
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            if (!response.ok) throw new Error("Error al cargar los datos del JSON.");
            return await response.json();
        } catch (error) {
            console.error("Error al obtener los miembros:", error);
            return [];
        }
    }

    // Renderizar los miembros destacados (spotlights)
    function renderSpotlights(members) {
        // Filtrar solo miembros de nivel 2 (Plata) y 3 (Oro)
        const spotlightMembers = members
            .filter(member => member.membership_level >= 2)
            .sort(() => Math.random() - 0.5) // Aleatorizar orden
            .slice(0, Math.random() < 0.5 ? 2 : 3); // Seleccionar aleatoriamente 2 o 3

        // Generar HTML para cada miembro
        spotlightContainer.innerHTML = spotlightMembers
            .map(member => `
                <div class="spotlight-card">
                    <h3>${member.name}</h3>
                    <p class="tag-line">Business Tag Line</p>
                    <hr>
                    <div class="spotlight-content">
                        <img class="spotlight-image" src="${member.image}" alt="${member.name}">
                        <div class="spotlight-details">
                            <p><strong>PHONE:</strong> ${member.phone}</p>
                            <p><strong>ADDRESS:</strong> ${member.address}</p>
                            <p><strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                            <p><strong>Membership Level:</strong> ${member.membership_level === 3 ? 'Gold' : 'Silver'}</p>
                        </div>
                    </div>
                </div>
            `)
            .join("");
    }

    // Obtener datos y renderizar los spotlights
    const members = await fetchMembers();
    renderSpotlights(members);
});

