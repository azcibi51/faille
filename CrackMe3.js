async function checkPassword() {
    const password = document.getElementById("password").value;
    const encrypted = "U2FsdGVkX19JkGphHkqz8plAWhcDkJm+P7gItG+ZGoU=";
    
    function decrypt(text, key) {
        return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
    }
    
    await import("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js").then(() => {});

    const decryptedPassword = decrypt(encrypted, "supersecretkey");
        if (password === decryptedPassword) {   // verifier le mdp en AES
            document.getElementById("message").innerText = "Bravo ! Vous avez trouvé le mot de passe.";
            document.getElementById("message").style.color = "green";
            document.getElementById("nextBtn").style.display = "inline-block"; // Afficher le bouton "Suivant"
        }

        else {
            document.getElementById("message").innerText = "Mot de passe incorrect.";
        }
}