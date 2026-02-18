//Función para crear la carta

/**
 * Función para crear la carta en el DOM
 * @param {String} card La carta del jugador. Ejemplo: '10C'
 * @param {Number} turn El turno del jugador. Ejemplo: 0 -> Primer jugador
 * @param {HTMLElement} divPlayerCards El elemento HTML en donde se mostrarán las cartas
 */
export const createCard = (card, turn, divPlayerCards) => {
  const newCard = document.createElement("img");
  newCard.src = `./assets/cartas/${card}.png`;
  newCard.classList.add("carta");
  divPlayerCards[turn].append(newCard);
};
