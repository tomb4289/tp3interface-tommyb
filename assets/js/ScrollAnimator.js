/**
 * Cette classe permet d'afficher des éléments au défilement de la page
 * Vous devez l'importer dans le fichier de votre choix et l'instancier avec new.
 * Passez les bons paramètres
 */
class ScrollAnimator {
  /**
   * Crée une instance de ScrollAnimator
   * @param {HTMLElement|null} zoneVisibilite - La zone d'intersection (null pour utiliser la fenêtre du navigateur)
   * @param {NodeListOf<Element>} targets - Les éléments à observer
   */
  constructor(zoneVisibilite, targets) {
    this.zoneVisibilite = zoneVisibilite; // La zone d'intersection, null pour utiliser la fenêtre du navigateur comme zone d'intersection
    this.targets = targets; // Les éléments cibles à observer

    // Les options de l'intersection observer
    this.options = {
      root: this.zoneVisibilite, // Utilise la fenêtre du navigateur si zoneVisibilite est null
      rootMargin: "0px",
      threshold: 0.5, // L'élément doit être à 50% visible pour être observé
    };

    // Création de l'instance de l'intersection observer
    this.observer = new IntersectionObserver(
      this.onIntersection.bind(this),
      this.options
    );

    // On observe les éléments cibles un par un
    this.targets.forEach(
      function (target) {
        this.observer.observe(target); // On observe chaque élément
      }.bind(this)
    );
  }

  /**
   * Fonction de rappel appelée lorsqu'un élément cible entre ou sort de la zone d'intersection
   * @param {*} entries - Liste des entrées d'observation
   */
  /**
   * Fonction de rappel appelée lors d'une intersection
   * @param {IntersectionObserverEntry[]} entries - Les entrées d'intersection
   */
  onIntersection(entries) {
    // On parcourt toutes les entrées (éléments observés)
    entries.forEach(
      function (entry) {
        let element = entry.target; // L'élément observé
        let intersecte = entry.isIntersecting; // Si l'élément est dans la zone d'intersection

        // Action à effectuer lorsque l'élément entre ou sort de la zone d'intersection
        if (intersecte) {
          element.classList.remove("hidden"); // Affiche l'élément
        } else {
          element.classList.add("hidden"); // Cache l'élément
        }
      }.bind(this)
    );
  }
}

export default ScrollAnimator;
