document.addEventListener("DOMContentLoaded", function() {
    // 1. Initialiser le formulaire de contact
    const form = document.querySelector(".contact-section form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Merci ! Votre message a été pris en compte.");
        });
    }

    // 2. Charger la publication spécifique
    chargerPublication();
});

async function chargerPublication() {
    const conteneur = document.getElementById('zone-publications');
    if (!conteneur) return;

    // Utilisation du chemin direct vers le fichier dans ton dépôt
    // Remplace la ligne urlFichier actuelle par celle-ci :
// Remplace la ligne urlFichier actuelle par celle-ci :
const urlFichier = 'https://raw.githubusercontent.com/agisaacng1-alt/isanh-global/main/content/ma-publication.md';

    try {
        const reponse = await fetch(urlFichier);
        
        if (!reponse.ok) {
            throw new Error('Fichier non trouvé');
        }

        const texte = await reponse.text();
        
        // Affichage du contenu
        conteneur.innerHTML = `
            <div class="card">
                <h3>Ma Publication</h3>
                <p>${texte}</p>
            </div>
        `;
    } catch (erreur) {
        console.error("Erreur :", erreur);
        conteneur.innerHTML = "<p>Impossible de charger le contenu.</p>";
    }
}
