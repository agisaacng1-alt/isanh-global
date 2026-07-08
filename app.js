console.log("Le script app.js est bien chargé !");

document.addEventListener("DOMContentLoaded", () => {
    const conteneur = document.getElementById('zone-publications');
    
    if (!conteneur) {
        console.error("L'élément 'zone-publications' est introuvable dans votre HTML !");
        return;
    }

    const url = 'https://raw.githubusercontent.com/agisaacng1-alt/isanh-global/refs/heads/main/content/ma-publication.md?nocache=' + new Date().getTime();

    fetch(url)
        .then(reponse => {
            if (!reponse.ok) throw new Error('Erreur ' + reponse.status);
            return reponse.text();
        })
        .then(texte => {
            conteneur.innerHTML = `<h3>Publication</h3><p>${texte}</p>`;
        })
        .catch(err => {
            conteneur.innerHTML = "Erreur : " + err.message;
        });
});
