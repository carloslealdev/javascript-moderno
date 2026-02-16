// Función para mezclar la baraja
export const shuffle = (array) => {
  if (!Array.isArray(array)) return [];

  // Creamos una copia para mantener la pureza de la función
  const shuffled = [...array];
  let length = shuffled.length;

  for (let i = length - 1; i > 0; i--) {
    // Elegir un índice aleatorio entre 0 e i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Intercambiar elementos (Destructuring assignment)
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
};
