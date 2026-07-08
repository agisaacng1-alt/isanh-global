window.addEventListener("load", () => {
    console.log("app.js chargé avec succès.");

    // 1. FONCTION : GESTION DU FORMULAIRE DE CONTACT
    const form = document.querySelector(".contact-section form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Merci ! Votre message a été pris en compte.");
        });
        console.log("Formulaire de contact initialisé.");
    }

    // 2. FONCTION : CHARGEMENT DE LA PUBLICATION
    const conteneur = document.getElementById('zone-publications');
    if (conteneur) {
        const url = 'https://raw.githubusercontent.com/agisaacng1-alt/isanh-global/refs/heads/main/content/ma-publication.md';
        
        fetch(url)
            .then(reponse => {
                if (!reponse.ok) throw new Error('Erreur HTTP: ' + reponse.status);
                return reponse.text();
            })
            .then(texte => {
                conteneur.innerHTML = `
                    <div class="card">
                        <h3>Ma Publication</h3>
                        <p>${texte}</p>
                    </div>
                `;
                console.log("Publication chargée avec succès.");
            })
            .catch(err => {
                console.error("Erreur de chargement :", err);
                conteneur.innerHTML = "<p>Impossible de charger le contenu.</p>";
            });
    } else {
        console.warn("L'élément 'zone-publications' est absent de cette page.");
    }
});
