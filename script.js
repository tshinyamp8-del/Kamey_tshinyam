// Gestion du menu overlay coulissant
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const navOverlay = document.getElementById('navOverlay');
const navLinks = document.querySelectorAll('.nav-overlay a');

menuToggle.addEventListener('click', () => {
    navOverlay.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navOverlay.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navOverlay.classList.remove('active');
    });
});

// Gestion des onglets de la section "À propos"
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons et contenus
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');

        // Afficher le contenu correspondant
        const targetId = button.getAttribute('data-tab');
        document.getElementById(targetId).classList.add('active');
    });
});

// Animation dynamique des mots-clés de la citation Hero (comme dans la vidéo)
const quotes = ["Unhinged", "Infuckwithable", "Goated", "Sans gêne", "Inégalé"];
let quoteIndex = 0;
const quoteTextElement = document.getElementById('quoteText');

setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteTextElement.style.opacity = 0;
    setTimeout(() => {
        quoteTextElement.textContent = quotes[quoteIndex];
        quoteTextElement.style.opacity = 1;
    }, 300);
}, 3500);

// Transition de l'opacité pour le texte changeant
quoteTextElement.style.transition = "opacity 0.3s ease";

// Liste de mots en français personnalisables (adaptée à votre identité)
const words = ["Inarrêtable", "Infuckwithable", "Créatif", "Déterminé", "Innovant"];
let currentIndex = 0;
const quoteElement = document.getElementById("quoteText");

function changeQuoteWord() {
    if (!quoteElement) return;

    // 1. Déclenche l'effet de disparition vers le haut
    quoteElement.classList.add("fade-out");

    setTimeout(() => {
        // 2. Change le texte au milieu de l'animation
        currentIndex = (currentIndex + 1) % words.length;
        quoteElement.textContent = words[currentIndex];

        // Remet le texte en bas de manière invisible pour le faire remonter
        quoteElement.style.transform = "translateY(8px)";
        
        // Force un reflow du navigateur pour appliquer la position initiale
        void quoteElement.offsetWidth;

        // 3. Fait réapparaître le mot à sa position normale
        quoteElement.classList.remove("fade-out");
        quoteElement.style.transform = "translateY(0)";
    }, 400); // Correspond à la durée de la transition CSS
}

// Change le mot toutes les 3,5 secondes
setInterval(changeQuoteWord, 3500);