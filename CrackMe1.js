function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === atob("QkBzZV82NA==")) { // Vérifier le mdp en base64
        document.getElementById("message").innerText = "Bravo ! Vous avez trouvé le mot de passe.";
        document.getElementById("message").style.color = "green";
        document.getElementById("nextBtn").style.display = "inline-block"; // Afficher le bouton "Suivant"
    } else {
        document.getElementById("message").innerText = "Mot de passe incorrect.";
    }
}
