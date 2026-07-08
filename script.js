// Attendre que toute la page soit chargée avant de démarrer
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Récupérer le formulaire dans le code HTML
    const form = document.querySelector(".contact-section form");
    const selectObjet = document.getElementById("objet");

    // 2. Écouter le changement d'option dans le filtre intelligent (menu déroulant)
    selectObjet.addEventListener("change", function() {
        const optionChoisie = selectObjet.value;
        console.log("L'utilisateur s'intéresse au pôle : " + optionChoisie);
        // Ici, on pourra ajouter des questions spécifiques selon le pôle à l'avenir !
    });

    // 3. Intercepter l'envoi du formulaire quand l'utilisateur clique sur le bouton
    form.addEventListener("submit", function(event) {
        // Empêcher la page de se recharger brusquement
        event.preventDefault();

        // Récupérer les valeurs entrées par l'utilisateur
        const nomClient = document.getElementById("nom").value;
        const pôleSelectionne = selectObjet.options[selectObjet.selectedIndex].text;

        // Afficher une alerte professionnelle de succès
        alert("Merci " + nomClient + " !\n\nVotre demande concernant '" + pôleSelectionne + "' a bien été simulée.\n\nL'équipe d'ISANH GLOBAL vous recontactera sous 24h sur votre adresse e-mail ou par téléphone !");
        
        // Vider automatiquement les cases du formulaire après l'envoi
        form.reset();
    });
});// Fonction pour charger et afficher les publications
async function afficherPublications() {
    const conteneur = document.getElementById('conteneur-publications');
    // Remplace par le chemin réel de ton dossier de publications
    const path = 'Contenu/Publications/'; 
    
    // Note : Pour un site statique hébergé sur GitHub, 
    // tu devras peut-être lister tes fichiers ici si l'API GitHub est bloquée
    // Exemple simple d'affichage :
    conteneur.innerHTML = "<h3>Test d'affichage : Le script est actif !</h3>";
}

// Lancer la fonction au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    afficherPublications();
});
