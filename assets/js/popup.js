/**
 * Affiche la boîte de dialogue popup en ajoutant la classe `visible` pour la rendre visible.
 * Cette fonction ajoute la classe `visible` à l'élément avec l'ID `#popup-box` pour le rendre visible.
 *
 * @returns {void}
 */
function showPopup() {
  document.querySelector("#popup-box").classList.add("visible");
}

/**
 * Ferme la boîte de dialogue popup en supprimant la classe `visible` pour la rendre invisible.
 * Cette fonction supprime la classe `visible` de l'élément avec l'ID `#popup-box` pour le masquer.
 *
 * @returns {void}
 */
function closePopup() {
  document.querySelector("#popup-box").classList.remove("visible");
}

/**
 * Initialise la fonctionnalité de la popup en configurant son affichage et la fermeture.
 * Cette fonction configure l'affichage de la popup après un délai de 5 secondes en appelant `showPopup()`,
 * et ajoute un gestionnaire d'événements pour fermer la popup lorsque l'utilisateur clique sur le bouton de fermeture `#close-btn`.
 *
 * @returns {void}
 */
export function initPopup() {
  // Affiche la popup après 5 secondes
  setTimeout(showPopup, 5000);

  // Ajoute un gestionnaire d'événements pour fermer la popup lors du clic sur le bouton de fermeture
  document.querySelector("#close-btn").addEventListener("click", closePopup);
}
