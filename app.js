window.addEventListener("load", function() {
    console.log("Page chargée, lancement du script...");
    const conteneur = document.getElementById('zone-publications');
    
    if (conteneur) {
        fetch('https://raw.githubusercontent.com/agisaacng1-alt/isanh-global/refs/heads/main/content/ma-publication.md')
            .then(reponse => reponse.text())
            .then(texte => {
                conteneur.innerHTML = `<div class="card"><h3>Publication</h3><p>${texte}</p></div>`;
            })
            .catch(err => console.error("Erreur chargement :", err));
    }
});
