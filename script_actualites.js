// Configuration
const CHANNEL_ID = "UCbVatiEbZUImJYnDAYSeXaw"; // <--- REMPLACE PAR TON ID DE CHAÎNE (ex: UC-lHJZR3Gqxm24_Vd_AJ5Yw)
const VIDEO_CONTAINER_ID = 'youtube-feed';
const MAX_VIDEOS = 6;

/**
 * Fonction pour charger les vidéos YouTube via le flux RSS
 */
async function loadYouTubeVideos() {
    const container = document.getElementById(VIDEO_CONTAINER_ID);
    
    // Si on n'est pas sur la page Actualités, on arrête le script
    if (!container) return;

    // URL du flux RSS YouTube converti en JSON pour être lisible par JS
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok') {
            container.innerHTML = ''; // Vide le message de chargement

            data.items.slice(0, MAX_VIDEOS).forEach(video => {
                // Extraction de l'ID de la vidéo depuis l'URL
                const videoId = video.link.split('v=')[1];
                
                // Création de la carte vidéo
                const videoCard = document.createElement('div');
                videoCard.className = 'video-card';
                videoCard.innerHTML = `
                    <div class="video-wrapper">
                        <iframe 
                            src="https://www.youtube.com/embed/${videoId}" 
                            title="${video.title}"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <h3>${video.title}</h3>
                    <a href="${video.link}" target="_blank" class="btn-watch">Regarder sur YT</a>
                `;
                container.appendChild(videoCard);
            });
        } else {
            container.innerHTML = "<p>Impossible de charger les vidéos pour le moment.</p>";
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des vidéos:", error);
        container.innerHTML = "<p>Erreur de connexion au flux YouTube.</p>";
    }
}

// Lancer le chargement quand la page est prête
document.addEventListener('DOMContentLoaded', loadYouTubeVideos);