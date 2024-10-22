function usernameValidator(username) {
    const usernamePattern = /^[^\s]{3,}$/;
    return usernamePattern.test(username);
}
 function emailValidator(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function passwordValidator(password) {
    const passwordPattern =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
    return passwordPattern.test(password);
}
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche la soumission du formulaire
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errorMessage = document.getElementById('error');

    // Vérifie si les deux mots de passe sont identiques
    if (password !== confirmPassword) {
        errorMessage.textContent = "Les mots de passe ne sont pas identiques.";
    } else {
        errorMessage.textContent = "";  // Efface le message d'erreur si les mots de passe sont identiques
    }
});
