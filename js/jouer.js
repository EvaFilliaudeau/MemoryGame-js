const cardsArray = [
    'img/1.webp', 'img/1.webp',
    'img/6.webp', 'img/6.webp',
    'img/21.webp', 'img/21.webp',
    'img/22.webp', 'img/22.webp',
    'img/26.webp', 'img/26.webp',
    'img/27.webp', 'img/27.webp',
    'img/25.webp', 'img/25.webp',
    'img/28.webp', 'img/28.webp'
];
let gameBoard = document.getElementById('game-board');
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;
let counter = 0;

// Mélanger les cartes
function shuffle(array) {
    array.sort(() => 0.5 - Math.random());
}

// Initialisation du jeu
function initGame() {
    matchedPairs = 0;
    firstCard = null;
    secondCard = null;
    lockBoard = false;

    shuffle(cardsArray);

    cardsArray.forEach((imagePath) => {
        let cardElement = document.createElement('div');
        cardElement.classList.add('card');

        // Ajouter les faces avant et arrière des cartes
        cardElement.innerHTML = `
            <div class="front"></div>
            <div class="back"><img src="${imagePath}" alt="card image"></div>
        `;
        cardElement.dataset.symbol = imagePath;

        // Ajouter l'événement de clic pour retourner la carte
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

// Fonction pour retourner la carte
function flipCard() {
    if (lockBoard || this === firstCard) return;
    this.classList.add('flipped');
    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkMatch();
}

// Vérifier si les deux cartes correspondent
function checkMatch() {
    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        disableCards();
        matchedPairs++;


        if (matchedPairs === cardsArray.length / 2) {
            launchConfetti(); // Lancer les confettis
            // Affiche le message de victoire
            document.getElementById('bravo').style.display = 'block'; // Correction ici
        }
    } else {
        unflipCards();
                counter++;
        document.getElementById('counterCoups').textContent = `Nombre de coups : ${counter}`;
    }
    function launchConfetti() {
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

confetti({
  angle: randomInRange(55, 125),
  spread: randomInRange(50, 70),
  particleCount: randomInRange(50, 100),
  origin: { y: 0.6 },
});
}
}

// Désactiver les cartes si elles correspondent
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

// Retourner les cartes si elles ne correspondent pas
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

// Réinitialiser les variables après chaque tentative
function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}
// Démarrer le jeu
initGame();

const link = document.getElementById('replay');

document.addEventListener('keydown', function(event) {
if (event.key === ' ' || event.code === 'Space') {
        location.reload();
    }
});
