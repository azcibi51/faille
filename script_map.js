document.addEventListener('DOMContentLoaded', () => {
    // Initialisation (Centré par exemple sur les Alpes/73)
    const map = L.map('map').setView([47.064565, 2.268336], 7);

    // Fond de carte sombre
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    // Tes données d'exploration
    const explorations = [
        {
            name: "Spot Urbex : L'usine oubliée",
            category: "🏙 Urbex",
            coords: [47.944203, -1.656561],
            video: "https://www.youtube.com/@renardeaux"
        },
        {
            name: "Grimpe : Toit du centre-ville",
            category: "🧗 Escalade",
            coords: [45.5640, 5.9150],
            video: "https://www.youtube.com/@renardeaux"
        },
        {
            name: "Session Parkour : Quartier Gare",
            category: "🏃 Parkour",
            coords: [45.5700, 5.9100],
            video: "https://www.youtube.com/@renardeaux"
        }
    ];

    // Ajout des marqueurs
    explorations.forEach(spot => {
        const marker = L.marker(spot.coords).addTo(map);
        marker.bindPopup(`
            <div style="text-align:center">
                <strong style="color: var(--primary-orange); font-size: 1.1rem;">${spot.category}</strong><br>
                <span style="color: white; display:block; margin: 5px 0;">${spot.name}</span>
                <a href="${spot.video}" target="_blank" class="map-btn">Voir la vidéo</a>
            </div>
        `);
    });
});