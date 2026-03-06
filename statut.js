document.addEventListener('DOMContentLoaded', () => {
    const statusText = document.getElementById('status-text');

    const statuts = [
        "En exploration sur les Toits de Paris ",
        "Montage d'une prochaine vidéo ",
        "Session Parkour",
        "À la recherche de nouveaux spots ",
        "Actuellement en ligne sur Discord ",
        "En train de filmer une vidéo ",
        "au travail sur un projet secret "
    ];

    const DELAI_CHANGEMENT = 3000000; // 50 minutes en millisecondes

    function mettreAJourStatut() {
        const maintenant = new Date().getTime();
        const dernierChangement = localStorage.getItem('statut_date');
        const statutSauvegarde = localStorage.getItem('statut_texte');

        // On change le statut seulement si :
        // 1. Il n'y a pas de statut sauvegardé (premier lancement)
        // 2. Le délai de 50 minutes est dépassé
        if (!dernierChangement || !statutSauvegarde || (maintenant - dernierChangement) > DELAI_CHANGEMENT) {
            // Choix aléatoire
            const nouveauStatut = statuts[Math.floor(Math.random() * statuts.length)];

            // On sauvegarde dans le localStorage pour se souvenir au prochain rechargement
            localStorage.setItem('statut_texte', nouveauStatut);
            localStorage.setItem('statut_date', maintenant);

            statusText.innerText = nouveauStatut;
            console.log("Nouveau statut choisi et sauvegardé : " + nouveauStatut);
        } else {
            // On affiche le statut qui était déjà sauvegardé
            statusText.innerText = statutSauvegarde;
            console.log("Statut récupéré de la mémoire locale : " + statutSauvegarde);
        }
    }

    // Premier lancement au chargement de la page
    mettreAJourStatut();

    // Répétition toutes les minutes pour vérifier si on a dépassé les 50 minutes d'attente
    setInterval(mettreAJourStatut, 60000); 
});