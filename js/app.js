// Cartas de exemplo
const cartas = [
    {
        nome: "Dragão Branco de Olhos Azuis",
        ataque: 3000,
        defesa: 2500,
        imagem: "assets/images/blue_eye_dragon.jpg"
    },
    {
        nome: "Mago Negro",
        ataque: 2500,
        defesa: 2100,
        imagem: "assets/images/dark_magician.jpg"
    },
    {
        nome: "Exodia, o Proibido",
        ataque: 5000,
        defesa: 5000,
        imagem: "assets/images/exodia.jpg"
    },
    {
        nome: "Neos, o herói elementar",
        ataque: 2400,
        defesa: 1200,
        imagem: "assets/images/hero_neos.jpg"
    }
];

// Função para embaralhar o array de cartas
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Função para desenhar cartas na tela
function drawCards() {
    const playerCardsContainer = document.getElementById('player-cards');
    const opponentCardsContainer = document.getElementById('opponent-cards');

    shuffleArray(cartas); // Embaralha as cartas

    // Limpa os containers
    playerCardsContainer.innerHTML = '';
    opponentCardsContainer.innerHTML = '';

    // Desenha 3 cartas para o jogador
    for (let i = 0; i < 3; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `<img src="${cartas[i].imagem}" alt="${cartas[i].nome}">`;
        playerCardsContainer.appendChild(cardElement);
    }

    // Desenha 3 cartas para o oponente
    for (let i = 3; i < 6; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `<img src="${cartas[i].imagem}" alt="${cartas[i].nome}">`;
        opponentCardsContainer.appendChild(cardElement);
    }
}

// Função de ataque
function attack() {
    const playerLife = document.getElementById('player-status');
    const opponentLife = document.getElementById('opponent-status');

    const playerAttack = cartas[0].ataque; // Supondo que a carta escolhida seja a primeira
    const opponentAttack = cartas[3].ataque; // Oponente ataca com a carta 4

    // Lógica de ataque
    if (playerAttack > opponentAttack) {
        const newOpponentLife = parseInt(opponentLife.textContent.split(': ')[1]) - (playerAttack - opponentAttack);
        opponentLife.textContent = `Vida do Oponente: ${newOpponentLife}`;
    } else {
        const newPlayerLife = parseInt(playerLife.textContent.split(': ')[1]) - (opponentAttack - playerAttack);
        playerLife.textContent = `Vida do Jogador: ${newPlayerLife}`;
    }
}

// Função para próximo turno
function nextTurn() {
    // Aqui, podemos adicionar a lógica para alternar os turnos entre os jogadores
    alert("Próximo turno!");
}

document.getElementById('attack-btn').addEventListener('click', attack);
document.getElementById('next-turn-btn').addEventListener('click', nextTurn);

// Inicia o jogo
drawCards();
