document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM chargé !");

    // 1. Gestion du formulaire (avec sécurité)
    const form = document.querySelector(".contact-section form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Merci ! Votre message a été pris en compte.");
        });
    } else {
        console.warn("Le formulaire de contact n'est pas sur cette page.");
    }

    // 2. Chargement des publications
    const conteneur = document.getElementById('zone-publications');
    if (conteneur) {
        const url = 'https://raw.githubusercontent.com/agisaacng1-alt/isanh-global/refs/heads/main/content/ma-publication.md';
        
        fetch(url)
            .then(reponse => reponse.text())
            .then(texte => {
                conteneur.innerHTML = `<h3>Ma Publication</h3><p>${texte}</p>`;
            })
            .catch(err => {
                conteneur.innerHTML = "Erreur de chargement.";
                console.error(err);
            });
        // On attend que la page soit totalement prête
window.addEventListener("load", () => {
    console.log("app.js est chargé");

    const conteneur = document.getElementById('zone-publications');
    
    if (conteneur) {
        fetch('https://raw.githubusercontent.com/agisaacng1-alt/isanh-global/refs/heads/main/content/ma-publication.md')
            .then(res => res.text())
            .then(data => {
                conteneur.innerHTML = "<h3>Publication</h3><p>" + data + "</p>";
            })
            .catch(err => console.error("Erreur :", err));
    }
});
    }
});
