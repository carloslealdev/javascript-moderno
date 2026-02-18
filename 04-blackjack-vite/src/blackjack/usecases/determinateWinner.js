/**
 * Función para determinar el ganador
 * @param {Array<Number>} playersPoints Un array en el que cada posición representa la puntuación de cada jugador
 */

export const determinateWinner = (playersPoints) => {
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
