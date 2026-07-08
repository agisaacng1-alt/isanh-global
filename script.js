// 1. Ton code existant (le formulaire de contact)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-section form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Merci ! Votre message a été pris en compte.");
        });
    }

    // 2. Ton nouveau code (pour afficher les publications)
    chargerPublications();
});

// La fonction pour afficher les publications
async function chargerPublications() {
    const conteneur = document.getElementById('zone-publications');
    if (!conteneur) return; // Sécurité : on s'arrête si la zone n'existe pas

    try {
        // Liste des fichiers à afficher
        const listeFichiers = ['ma-publication.md']; 
        conteneur.innerHTML = ""; // On vide le message de chargement

        for (const nomFichier of listeFichiers) {
           // Remplace la ligne actuelle par celle-ci :
// La fonction pour afficher les publications
async function chargerPublications() {
    const conteneur = document.getElementById('zone-publications');
    if (!conteneur) return; 

    try {
        const listeFichiers = ['ma-publication.md']; 
        conteneur.innerHTML = ""; 

        for (const nomFichier of listeFichiers) {
            // C'EST ICI QUE TU REMPLACES LA LIGNE :
            const reponse = await fetch(`https://raw.githubusercontent.com/agisaacng1-alt/isanh-global/main/content/publications/${nomFichier}`);
            
            const texte = await reponse.text();

            const article = document.createElement('div');
            article.className = "card";
            article.innerHTML = `<h3>${nomFichier.replace('.md', '')}</h3><p>${texte}</p>`;
            conteneur.appendChild(article);
        }
    } catch (erreur) {
        console.error("Erreur de chargement :", erreur);
        conteneur.innerHTML = "<p>Impossible de charger les publications.</p>";
    }
}
            const texte = await reponse.text();

            const article = document.createElement('div');
            article.className = "card";
            article.innerHTML = `<h3>${nomFichier.replace('.md', '')}</h3><p>${texte}</p>`;
            conteneur.appendChild(article);
        }
    } catch (erreur) {
        console.error("Erreur de chargement :", erreur);
        conteneur.innerHTML = "<p>Impossible de charger les publications.</p>";
    }
}
