document.addEventListener("DOMContentLoaded", function() {
    chargerPublication();
});

async function chargerPublication() {
    const conteneur = document.getElementById('zone-publications');
    if (!conteneur) return;

    // Utilisation du lien exact que tu m'as donné
    const urlFichier = 'https://raw.githubusercontent.com/agisaacng1-alt/isanh-global/refs/heads/main/content/ma-publication.md';

    try {
        const reponse = await fetch(urlFichier);
        
        if (!reponse.ok) {
            throw new Error('Erreur HTTP: ' + reponse.status);
        }

        const texte = await reponse.text();
        
        // Affichage direct du contenu
        conteneur.innerHTML = `
            <div class="card">
                <h3>Publication</h3>
                <p>${texte}</p>
            </div>
        `;
    } catch (erreur) {
        console.error("Erreur détectée :", erreur);
        conteneur.innerHTML = "<p>Impossible de charger le contenu. Erreur : " + erreur.message + "</p>";
    }
}
