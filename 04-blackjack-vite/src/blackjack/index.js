import {
  cardValue,
  createDeck,
  requestCard,
  accumulatePoints,
  createCard,
  determinateWinner,
} from "./usecases";

let deck = []; //El mazo de cartas
const types = ["C", "D", "H", "S"]; //Tipos de cartas (Corazones, Diamantes, Tréboles, Espadas)
const specials = ["A", "J", "Q", "K"]; //Cartas especiales (As, J, Q, K)

let playersPoints = [];

// REFERENCIAS AL DOM
//Buttons
const btnNewGame = document.querySelector("#btnNewGame");
const btnRequestCard = document.querySelector("#btnRequestCard");
const btnStop = document.querySelector("#btnStop");

//Points indicators
const indicators = document.querySelectorAll("small");

//Containes players cards
const divPlayerCards = document.querySelectorAll(".divCards");

//Función para inicializar el juego
export const initGame = (numPlayers = 2) => {
  deck = createDeck(types, specials);
  playersPoints = [];

  for (let i = 0; i < numPlayers; i++) {
    playersPoints.push(0);
  }

  indicators.forEach((elem) => (elem.innerText = 0));
  divPlayerCards.forEach((elem) => (elem.innerHTML = ""));

  btnRequestCard.disabled = false;
  btnStop.disabled = false;
};

//Turno de la PC
const pcShift = (minPoints) => {
  let pointsPC = 0;

  do {
    const card = requestCard(deck);

    pointsPC = accumulatePoints(
      card,
      playersPoints,
      playersPoints.length - 1,
      indicators[playersPoints.length - 1],
    );

    createCard(card, playersPoints.length - 1, divPlayerCards);
  } while (pointsPC < minPoints && minPoints <= 21);

  determinateWinner(playersPoints);
};

//Eventos
btnRequestCard.addEventListener("click", () => {
  const card = requestCard(deck);

  const pointsPlayer = accumulatePoints(card, playersPoints, 0, indicators[0]);

  createCard(card, 0, divPlayerCards);

  if (pointsPlayer > 21) {
    console.warn("Lo siento, perdiste");
    btnRequestCard.disabled = true;
    btnStop.disabled = true;

    pcShift(pointsPlayer);
  } else if (pointsPlayer === 21) {
    console.warn("21, genial");
    btnRequestCard.disabled = true;
    btnStop.disabled = true;

    pcShift(pointsPlayer);
  }
});

btnStop.addEventListener("click", () => {
  btnRequestCard.disabled = true;
  btnStop.disabled = true;

  pcShift(playersPoints[0]);
});

btnNewGame.addEventListener("click", () => {
  initGame();
});
