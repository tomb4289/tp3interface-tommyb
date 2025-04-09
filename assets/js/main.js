// Importation des modules
import { initPopup } from "./popup.js";
import { initCarousel } from "./carousel.js";
import { initTheme } from "./darkmode.js";
import ScrollAnimator from "./ScrollAnimator.js";

(function () {
  /**
   * Initialise les fonctionnalités de la popup.
   * Affiche la popup après 5 secondes et permet de la fermer en cliquant sur le bouton.
   */
  initPopup();

  /**
   * Initialise le carrousel d'images.
   * Permet la navigation entre les images du carrousel à l'aide des boutons de navigation.
   */
  initCarousel();

  /**
   * Initialise le mode sombre et clair du site.
   * Applique le thème en fonction de la préférence sauvegardée dans le stockage local.
   */
  initTheme();

  /**
   * Sélectionne tous les éléments de la page ayant la classe "animate-on-scroll"
   * et crée une instance de ScrollAnimator pour animer ces éléments lors du défilement.
   */
  const targets = document.querySelectorAll(".animate-on-scroll");

  /**
   * Crée une instance de ScrollAnimator pour animer les éléments lorsqu'ils entrent dans la zone de vue.
   * @param {null} zoneVisibilite - Utilise la fenêtre du navigateur comme zone d'intersection.
   * @param {NodeList} targets - Liste des éléments à observer pour l'animation au défilement.
   */
  const scrollAnimator = new ScrollAnimator(null, targets);
})();
