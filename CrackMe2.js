function checkPassword() {
    const password = document.getElementById("password").value;
    const hash = "86804e909e48c8cf946046b9fe11bfe3884e136bb5c1e00c8a7e094317445a38"; // verifier le mdp en SHA-256

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