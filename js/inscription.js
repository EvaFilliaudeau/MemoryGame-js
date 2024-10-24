document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire immédiatement

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let error = document.getElementById("error");
    let forcePasswordFaible = document.getElementById("forcePasswordFaible");
    let forcePasswordFort = document.getElementById("forcePasswordFort");
    let forcePasswordMoyen = document.getElementById("forcePasswordMoyen");

    // Réinitialise le message avant la vérification
    error.textContent = "";
    forcePasswordFaible.textContent = "Mot de passe faible";

    // Regex pour vérifier au moins un chiffre et un symbole
    let hasNumber = /\d/;
    let hasSymbol = /[!@#$%^&*(),.?":{}|<>]/;

    // Vérifier la force du mot de passe
    if (newPassword.length < 6) {
      forcePasswordFaible.textContent = "Mot de passe faible";
      forcePasswordFort.textContent = "";
      forcePasswordMoyen.textContent = "";
    } else if (newPassword.length >= 9 && hasNumber.test(newPassword) && hasSymbol.test(newPassword)) {
      forcePasswordFort.textContent = "Mot de passe fort";
      forcePasswordFaible.textContent = "";
      forcePasswordMoyen.textContent = "";
    } else if (newPassword.length >= 6 && (hasNumber.test(newPassword) || hasSymbol.test(newPassword))) {
      forcePasswordMoyen.textContent = "Mot de passe moyen";
      forcePasswordFaible.textContent = "";
      forcePasswordFort.textContent = "";
    }

    // Vérifications des règles de validation
    if (!hasNumber.test(newPassword)) {
        error.textContent = "Le mot de passe doit contenir au moins un chiffre.";
        return;
    } else if (!hasSymbol.test(newPassword)) {
        error.textContent = "Le mot de passe doit contenir au moins un symbole.";
        return;
    } else if (newPassword !== confirmPassword) {
        error.textContent = "Les mots de passe ne sont pas identiques.";
        return;
    }

    // Récupérer les utilisateurs stockés dans le Local Storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Vérifier si l'utilisateur existe déjà (en comparant l'email)
    let userExists = users.some((user) => user.email === email);

    if (userExists) {
        // Si l'utilisateur existe, afficher un message d'erreur
        document.getElementById("message").textContent = "Cet utilisateur est déjà inscrit !";
    } else {
        // Sinon, créer un objet utilisateur et l'ajouter au tableau
        let newUser = {
            name: username,
            email: email,
            mdp: newPassword,
        };

        // Ajouter le nouvel utilisateur au tableau
        users.push(newUser);

        // Stocker le tableau mis à jour dans le Local Storage
        localStorage.setItem("users", JSON.stringify(users));

        // Stocker le dernier utilisateur inscrit pour la page compte
        localStorage.setItem('currentUser', username); 
    
        // Rediriger vers la page de compte
        window.location.href = "./compte.html";
    }
});
