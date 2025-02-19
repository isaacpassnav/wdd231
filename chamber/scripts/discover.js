document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".grid-container");
    const dataUrl = "data/discover.json";
    const aside = document.querySelector(".visit-message");

    async function fetchDiscoverData() {
        try {
            const response = await fetch(dataUrl);
            if (!response.ok) throw new Error("Error al cargar los datos del JSON.");
            return await response.json();
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            return [];
        }
    }

    function createCard(data) {
        const card = document.createElement("div");
        card.className = "grid-item";
        card.innerHTML = `
            <h2>${data.title}</h2>
            <figure>
                <img src="${data.image}" alt="${data.title}" loading="lazy">
            </figure>
            <address>${data.address}</address>
            <p>${data.description}</p>
            <button class="learn-more">Learn More</button>
        `;
        return card;
    }

    async function renderDiscoverCards() {
        const data = await fetchDiscoverData();
        data.forEach(item => {
            const card = createCard(item);
            container.appendChild(card);
        });
    }

    function displayLastVisitMessage() {
        const lastVisit = localStorage.getItem("lastVisit");
        const currentDate = Date.now();

        if (!lastVisit) {
            aside.textContent = "Welcome! Let us know if you have any questions.";
        } else {
            const lastVisitDate = new Date(parseInt(lastVisit));
            const daysDifference = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));

            if (daysDifference < 1) {
                aside.textContent = "Back so soon! Awesome!";
            } else {
                aside.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
            }
        }

        localStorage.setItem("lastVisit", currentDate);
    }
    renderDiscoverCards();
    displayLastVisitMessage();
});
