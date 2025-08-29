function checkPassword() {
    const password = document.getElementById("").value;
    const hash = "89d564cbbf0e746adae0de0f29d53f96e6a1dc97560135996a847134cc4d9455"; // verifier le mdp en SHA-256

    async function sha256(message) {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
    
    sha256(password).then(hashedPassword => {
        if (hashedPassword === hash) {
            document.getElementById("message").innerText = "Bravo ! Vous avez trouvé le mot de passe.";
            document.getElementById("message").style.color = "green";
            document.getElementById("nextBtn").style.display = "inline-block"; // Afficher le bouton "Suivant"
        } else {
            document.getElementById("message").innerText = "Mot de passe incorrect.";
        }
    });

}
