import { shuffle } from "../utils/shuffle.js";

// Función para crear el mazo
/** Función para crear el deck
 * @param {Array<String>} types Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} specials Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const createDeck = (types, specials) => {
  if (!types || types.length === 0)
    throw new Error("types es obligatorio como un arreglo de strings");

  if (!specials || specials.length === 0)
    throw new Error("specials es obligatorio como un arreglo de strings");

  let deck = [];

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
