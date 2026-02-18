//Función para tomar una carta

/**
 * Función para tomar una carta
 * @param {Array<String>} deck Es un arreglo de string
 * @returns {String} retorna último elemento del deck. Ejemplo '10C'
 */

export const requestCard = (deck) => {
  if (!deck || deck.length === 0) throw "No hay mas cartas en la baraja";

  return deck.pop();
};
