
// --- utilitaires URL ---
function getParam(key){
    const url = new URL(window.location.href);
    return url.searchParams.get(key) || "";
  }

  // --- VULNÉRABLE : injection directe dans innerHTML ---
  const output = document.getElementById("output");
  const name = getParam("name");

  if(name){
    output.innerHTML = "Bonjour " + name + " !"; // vulnérable à XSS
  }
  else{
    output.textContent = "Entrez un nom puis validez.";
  }

  // Lien de démo avec un payload inoffensif
  const demoLink = document.getElementById("demoLink");
  const payload = '<img src=x onerror=alert("XSS démonstration locale")>';
  demoLink.href = location.pathname + "?name=" + encodeURIComponent(payload);