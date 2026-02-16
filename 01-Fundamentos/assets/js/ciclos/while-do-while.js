const carros = ["Ford", "Mazda", "Toyota"];
let i = 0;

//Ciclo while
console.warn("while");
while (i < carros.length) {
  console.log(carros[i]);
  i++; //Se va incrementando i en cada iteración del ciclo para evitar el ciclo infinito
}

//Ciclo Do While
/**
 * La difrencia con respecto al ciclo while
 * es que en el ciclo do while, el código siempre se va a ejecutar al menos una vez
 */
console.warn("Do while");
let j = 0;
do {
  console.log(carros[j]);
  j++;
} while (carros[j]); //Esta es otra manera de condición válida
