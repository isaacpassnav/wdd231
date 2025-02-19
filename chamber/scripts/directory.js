document.addEventListener("DOMContentLoaded", async () => {
    const membersContainer = document.getElementById("members");
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            if (!response.ok) throw new Error("Error al cargar los datos del JSON.");
            return await response.json();
        } catch (error) {
            console.error("Error al obtener los miembros:", error);
            return [];
        }
    };
    function renderGridView(members) {
        membersContainer.classList.remove("list");
        membersContainer.classList.add("grid");
        membersContainer.innerHTML = members
            .map(
                (member) => `
                <div class="member-card">
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <p class="membership-level">Membership Level: ${member.membership_level}</p>
                </div>`
            )
            .join("");
    }
    function renderListView(members) {
        membersContainer.classList.remove("grid");
        membersContainer.classList.add("list");
        membersContainer.innerHTML = members
            .map(
                (member) => `
                <div class="member-item">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <p class="membership-level">Membership Level: ${member.membership_level}</p>
                </div>`
            )
            .join("");
    }
     const members = await fetchMembers();
     renderGridView(members);
 
     // Agregar eventos para cambiar entre vistas
     gridViewButton.addEventListener("click", () => renderGridView(members));
     listViewButton.addEventListener("click", () => renderListView(members));
});
