// connexion depuis page inscription  ------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Récupérer le nom de l'utilisateur depuis le localStorage
  let currentUser = localStorage.getItem("currentUser");

  // Afficher le nom
  document.getElementById(
    "welcomeMessage"
  ).textContent = `Bienvenue ${currentUser} !`;
});
