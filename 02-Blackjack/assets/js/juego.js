/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Heartss (Corazones)
 * 2S = Two of Swords (Espadas)
 */

import { shuffle } from "./utils.js";

let deck = []; //El mazo de cartas
const types = ["C", "D", "H", "S"]; //Tipos de cartas (Corazones, Diamantes, Tréboles, Espadas)
const specials = ["A", "J", "Q", "K"]; //Cartas especiales (As, J, Q, K)

let pointsPlayer = 0;
let pointsPC = 0;

// Referencias al DOM
const btnNewGame = document.querySelector("#btnNewGame");
const btnRequestCard = document.querySelector("#btnRequestCard");
const btnStop = document.querySelector("#btnStop");
const indicators = document.querySelectorAll("small");
const playerCards = document.querySelector("#player-cards");
const pcCards = document.querySelector("#pc-cards");

const createDeck = () => {
  // Función para crear el mazo
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

  //   console.log(deck);

  deck = shuffle(deck);
  //   console.log(deck);

  return deck;
};

createDeck();

//Función para tomar una carta
const requestCard = () => {
  if (deck.length === 0) throw "No hay mas cartas en la baraja";
  let card = deck.pop();
  //   console.log(deck);
  //   console.log(card);
  return card;
};

// requestCard();

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

//Turno de la PC
const pcShift = (minPoints) => {
  do {
    const card = requestCard();
    pointsPC += cardValue(card);

    indicators[1].innerText = pointsPC;

    const newPcCard = document.createElement("img");
    newPcCard.src = `./assets/cartas/${card}.png`;
    newPcCard.classList.add("carta");
    pcCards.append(newPcCard);

    if (minPoints > 21) {
      break;
    }
  } while (pointsPC < minPoints && minPoints <= 21);

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

const value = cardValue(requestCard());
// console.log(value);

//Eventos
btnRequestCard.addEventListener("click", () => {
  const card = requestCard();
  pointsPlayer += cardValue(card);

  indicators[0].innerText = pointsPlayer;

  const newPlayerCard = document.createElement("img");
  newPlayerCard.src = `./assets/cartas/${card}.png`;
  newPlayerCard.classList.add("carta");
  playerCards.append(newPlayerCard);

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

  pcShift(pointsPlayer);
});

btnNewGame.addEventListener("click", () => {
  console.clear();
  deck = [];
  deck = createDeck();

  pointsPlayer = 0;
  pointsPC = 0;

  indicators[0].innerText = 0;
  indicators[1].innerText = 0;

  playerCards.innerHTML = "";
  pcCards.innerHTML = "";

  btnRequestCard.disabled = false;
  btnStop.disabled = false;
});
