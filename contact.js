document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const btn = document.getElementById('submitBtn');
    const webhookURL = "https://discord.com/api/webhooks/1478451395433599148/ry8FBYxuitMrKkgGEL4msz5HV2c3zDT1QjTfwaQ_3V6ohzGr0YKxOjuZiFysJbxYU69X";

    // Récupération des données
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Changement d'état du bouton
    btn.innerText = "Envoi en cours...";
    btn.disabled = true;

    // Préparation du message Discord
    const payload = {
        username: "Robot Renardeaux",
        embeds: [{
            title: "📩 Nouveau message de contact",
            color: 15433219, // Orange
            fields: [
                { name: "👤 Nom", value: name, inline: true },
                { name: "📧 Email", value: email, inline: true },
                { name: "💬 Message", value: message }
            ],
            timestamp: new Date()
        }]
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert('✅ Super ! Ton message a été envoyé.');
            document.getElementById('contactForm').reset();
        } else {
            alert('❌ Erreur Discord : ' + response.status);
        }
    } catch (error) {
        alert('❌ Erreur de connexion au serveur.');
    } finally {
        btn.innerText = "Envoyer le message";
        btn.disabled = false;
    }
});