/**
 * Applique le thème spécifié à la page en modifiant l'attribut `data-theme` du `body`.
 * Met également à jour le texte du bouton pour indiquer l'icône correspondant au thème actuel,
 * et sauvegarde le thème dans le `localStorage` pour persistance.
 *
 * @param {string} theme - Le thème à appliquer. Doit être soit "dark" pour le mode sombre, soit "light" pour le mode clair.
 * @param {HTMLElement} toggleButton - L'élément du bouton qui sera mis à jour pour refléter l'icône du mode actuel.
 *
 * @returns {void}
 */
function applyTheme(theme, toggleButton) {
  document.body.dataset.theme = theme; // Applique le thème en modifiant l'attribut `data-theme`
  toggleButton.textContent = theme === "dark" ? "☀️" : "🌙"; // Met à jour l'icône du bouton
  localStorage.setItem("theme", theme); // Sauvegarde le thème dans le localStorage pour persistance
}

/**
 * Bascule entre le mode sombre et le mode clair en fonction du thème actuel.
 * Appelle la fonction `applyTheme` pour appliquer le nouveau thème et met à jour l'icône du bouton.
 *
 * @param {HTMLElement} toggleButton - L'élément du bouton de bascule qui sera mis à jour pour refléter l'icône du mode actuel.
 *
 * @returns {void}
 */
function toggleTheme(toggleButton) {
  const currentTheme = document.body.dataset.theme; // Récupère le thème actuel depuis l'attribut `data-theme`
  const newTheme = currentTheme === "dark" ? "light" : "dark"; // Détermine le nouveau thème à appliquer
  applyTheme(newTheme, toggleButton); // Applique le nouveau thème
}

/**
 * Initialise la fonctionnalité de changement de thème en appliquant le thème sauvegardé dans le `localStorage`.
 * Si aucun thème n'est trouvé dans le `localStorage`, le mode clair est appliqué par défaut.
 * Ajoute également un gestionnaire d'événements sur le bouton pour changer le thème lors du clic.
 *
 * @returns {void}
 */
export function initTheme() {
  const toggleButton = document.querySelector("#theme-toggle"); // Sélectionne le bouton de bascule
  const savedTheme = localStorage.getItem("theme") || "light"; // Récupère le thème sauvegardé ou applique "light" par défaut
  applyTheme(savedTheme, toggleButton); // Applique le thème sauvegardé
  toggleButton.addEventListener("click", () => toggleTheme(toggleButton)); // Ajoute l'écouteur d'événements pour basculer de thème
}
