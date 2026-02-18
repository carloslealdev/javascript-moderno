//Función para acumular los puntos de cada jugador
//turn: 0 = primero jugador....... el último turn siempre es la pc
import { cardValue } from "./";
/**
 * Función para acumular los puntos de cada jugador
 * @param {String} card La carta que saca el jugador en su turno
 * @param {Array<Number>} playersPoints Un array que almacena los puntos de los jugadores
 * @param {Number} turn El turno del jugador
 * @param {HTMLElement} indicator Elemento HTML que muestra los puntos acumulados del juagdor
 * @returns {Number} retorna le puntuación del jugador. Ejemplo: 12
 */

export const accumulatePoints = (card, playersPoints, turn, indicator) => {
  playersPoints[turn] += cardValue(card);
  indicator.innerText = playersPoints[turn];
  //   console.log({ points: playersPoints[turn] });

  return playersPoints[turn];
};
