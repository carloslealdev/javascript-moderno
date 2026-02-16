import { shuffle } from "./utils.js";

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
  deck = createDeck();
  playersPoints = [];

  for (let i = 0; i < numPlayers; i++) {
    playersPoints.push(0);
  }

  indicators.forEach((elem) => (elem.innerText = 0));
  divPlayerCards.forEach((elem) => (elem.innerHTML = ""));

  btnRequestCard.disabled = false;
  btnStop.disabled = false;
};

// Función para crear el mazo
const createDeck = () => {
  deck = [];

  for (let i = 2; i <= 10; i++) {
    //Ciclo para agregar todas las cartas del 2 al 10 de cada tipo
    for (let type of types) {
      deck.push(i + type);
    }
  }

  for (let type of types) {
    for (let spec of specials) {
      deck.push(spec + type);
    }
  }

  return shuffle(deck);
};

//Función para tomar una carta
const requestCard = () => {
  if (deck.length === 0) throw "No hay mas cartas en la baraja";

  return deck.pop();
};

//Función para evaluar el valor de la carta
/**
 * Numeros valen su mismo valor (2 al 10)
 * J, Q, K valen 10
 * A vale 11
 */
const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);
  //   let points = 0;
  //   if (isNaN(value)) {
  //     points = value === "A" ? 11 : 10;
  //   } else {
  //     points = value * 1; //Convertir a number
  //   }
  //   console.log(points);

  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
};

//Función para acumular los puntos de cada jugador
//turn: 0 = primero jugador....... el último turn siempre es la pc
const accumulatePoints = (card, turn) => {
  playersPoints[turn] += cardValue(card);
  indicators[turn].innerText = playersPoints[turn];

  return playersPoints[turn];
};

//Función para crear la carta
const createCard = (card, turn) => {
  const newCard = document.createElement("img");
  newCard.src = `./assets/cartas/${card}.png`;
  newCard.classList.add("carta");
  divPlayerCards[turn].append(newCard);
};

const determinateWinner = () => {
  const [minPoints, pointsPC] = playersPoints;

  setTimeout(() => {
    if (pointsPC === minPoints) {
      alert("Nadie gana");
    } else if (minPoints > 21) {
      alert("Gana la Pc");
    } else if (pointsPC > 21) {
      alert("Felicidades, Ganaste");
    } else {
      alert("Gana la Pc");
    }
  }, 100);
};

//Turno de la PC
const pcShift = (minPoints) => {
  let pointsPC = 0;

  do {
    const card = requestCard();

    pointsPC = accumulatePoints(card, playersPoints.length - 1);

    createCard(card, playersPoints.length - 1);
    // const newPcCard = document.createElement("img");
    // newPcCard.src = `./assets/cartas/${card}.png`;
    // newPcCard.classList.add("carta");
    // pcCards.append(newPcCard);
  } while (pointsPC < minPoints && minPoints <= 21);

  determinateWinner();
};

//Eventos
btnRequestCard.addEventListener("click", () => {
  const card = requestCard();

  const pointsPlayer = accumulatePoints(card, 0);

  createCard(card, 0);

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
