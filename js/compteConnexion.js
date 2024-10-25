// connexion depuis page monCompte --------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Empêche la soumission du formulaire

      // Récupérer les valeurs des champs de formulaire
      let usernameInput = document.getElementById("username").value;
      let passwordInput = document.getElementById("password").value;
      let errorMessage = document.getElementById("loginError");

      // Réinitialise le message d'erreur
      errorMessage.textContent = "";

      // Vérifier que les champs ne sont pas vides
      if (!usernameInput || !passwordInput) {
        errorMessage.textContent =
          "Veuillez entrer un nom d'utilisateur et un mot de passe.";
        return;
      }

      // Récupérer les utilisateurs stockés dans le Local Storage
      let users = JSON.parse(localStorage.getItem("users")) || [];

      // Vérifier si un utilisateur avec le même username et mot de passe existe
      let validUser = users.find(
        (user) => user.name === usernameInput && user.mdp === passwordInput
      );

      if (validUser) {
        localStorage.setItem("currentUser", JSON.stringify(validUser));
        // Si l'utilisateur existe, rediriger vers la page "compte.html"
        window.location.href = "./profil.html";
      } else {
        // Si les informations sont incorrectes, afficher un message d'erreur
        errorMessage.textContent ="Nom d'utilisateur ou mot de passe incorrect.";
      }
    });
});
document.addEventListener("DOMContentLoaded", () => {
  // Récupérer l'utilisateur connecté depuis le localStorage
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    // Afficher le nom de l'utilisateur
    document.getElementById(
      "welcomeMessage"
    ).textContent = `Bienvenue ${currentUser.name} !`;
  } else {
    // Si aucun utilisateur n'est connecté, rediriger vers la page de connexion
    window.location.href = "./monCompte.html";
  }
});
