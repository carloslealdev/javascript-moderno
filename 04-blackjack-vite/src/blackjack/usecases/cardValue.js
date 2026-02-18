//Función para evaluar el valor de la carta
/**
 * Numeros valen su mismo valor (2 al 10)
 * J, Q, K valen 10
 * A vale 11
 */

/**
 * Función para obtener el valor de la carta
 * @param {String} card Ejemplo: '10C'
 * @returns {Number} retorna el valo numérico de la card. Ejemplo: 10
 */
export const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
};
