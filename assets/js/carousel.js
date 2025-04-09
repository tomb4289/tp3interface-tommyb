let index = 0;
let autoScrollInterval;

/**
 * Met à jour la position du carrousel en fonction de l'index actuel.
 * Cette fonction ajuste la propriété `transform` pour déplacer le carrousel à la position correcte.
 * @param {HTMLElement} track - L'élément conteneur contenant toutes les images du carrousel.
 * @param {number} totalImages - Le nombre total d'images dans le carrousel.
 */
function updateCarousel(track, totalImages) {
  track.style.transform = `translateX(-${index * 100}%)`; // Déplace le carrousel vers la gauche en fonction de l'index
}

/**
 * Affiche l'image suivante dans le carrousel en incrémentant l'index.
 * Une fois la dernière image atteinte, le carrousel revient à la première image.
 * @param {HTMLElement} track - L'élément conteneur contenant toutes les images du carrousel.
 * @param {number} totalImages - Le nombre total d'images dans le carrousel.
 */
function nextImage(track, totalImages) {
  index = (index + 1) % totalImages; // Incrémente l'index et revient à la première image si nécessaire
  updateCarousel(track, totalImages); // Met à jour la position du carrousel en fonction du nouvel index
}

/**
 * Affiche l'image précédente dans le carrousel en décrémentant l'index.
 * Une fois la première image atteinte, le carrousel revient à la dernière image.
 * @param {HTMLElement} track - L'élément conteneur contenant toutes les images du carrousel.
 * @param {number} totalImages - Le nombre total d'images dans le carrousel.
 */
function prevImage(track, totalImages) {
  index = (index - 1 + totalImages) % totalImages; // Décrémente l'index et revient à la dernière image si nécessaire
  updateCarousel(track, totalImages); // Met à jour la position du carrousel en fonction du nouvel index
}

/**
 * Démarre la fonction de défilement automatique du carrousel.
 * Le carrousel défile automatiquement vers la prochaine image toutes les 3 secondes.
 * @param {HTMLElement} track - L'élément conteneur contenant toutes les images du carrousel.
 * @param {number} totalImages - Le nombre total d'images dans le carrousel.
 */
function startAutoScroll(track, totalImages) {
  autoScrollInterval = setInterval(() => nextImage(track, totalImages), 4000); // Change d'image toutes les 4 secondes
}

/**
 * Arrête la fonction de défilement automatique du carrousel.
 * Efface l'intervalle qui a été défini pour le défilement automatique.
 */
function stopAutoScroll() {
  clearInterval(autoScrollInterval); // Arrête le défilement automatique en effaçant l'intervalle
}

/**
 * Initialise la fonctionnalité du carrousel.
 * Cette fonction ajoute des écouteurs d'événements pour les boutons "suivant" et "précédent",
 * et démarre le défilement automatique lorsque la page est chargée.
 */
export function initCarousel() {
  const track = document.querySelector(".carousel-track"); // L'élément conteneur pour toutes les images
  const images = document.querySelectorAll(".carousel-img"); // Toutes les images du carrousel
  const totalImages = images.length; // Le nombre total d'images dans le carrousel

  // Ajoute un écouteur d'événements pour le bouton "suivant"
  document.querySelector(".next").addEventListener("click", () => {
    stopAutoScroll(); // Arrête le défilement automatique lorsque l'utilisateur interagit manuellement avec le carrousel
    nextImage(track, totalImages); // Affiche l'image suivante
    startAutoScroll(track, totalImages); // Redémarre le défilement automatique après l'interaction
  });

  // Ajoute un écouteur d'événements pour le bouton "précédent"
  document.querySelector(".prev").addEventListener("click", () => {
    stopAutoScroll(); // Arrête le défilement automatique lorsque l'utilisateur interagit manuellement avec le carrousel
    prevImage(track, totalImages); // Affiche l'image précédente
    startAutoScroll(track, totalImages); // Redémarre le défilement automatique après l'interaction
  });

  // Démarre le défilement automatique lorsque la page est chargée
  startAutoScroll(track, totalImages);
}
