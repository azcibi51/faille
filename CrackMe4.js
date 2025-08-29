async function checkPassword() {
    const password = document.getElementById("password").value;
    const encrypted = "e99a18c428cb38d5f260853678922e03";
    const secretKey = "difficultKey123";
    
    function md5(text) {
        return CryptoJS.MD5(text).toString();
    }
    
    function xorDecrypt(text, key) {	//XOR
        let result = "";
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return result;
    }
    
    const decryptedPassword = xorDecrypt(md5(secretKey), "xorKey123");	//md5
    
    if (md5(password) === decryptedPassword) {
        document.getElementById("message").innerText = "Bravo ! Vous avez trouvé le mot de passe.";
    } else {
        document.getElementById("message").innerText = "Mot de passe incorrect.";
    }
}