const heroes = ["Batman", "Superman", "Aquaman", "Mujer Maravilla"];

console.warn("For tradicional");
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn("For in");
for (const i in heroes) {
  console.log(heroes[i]);
}

console.warn("For of");

for (const heroe of heroes) {
  //Extrae el varlor de cada elemento del arreglo en cada iteración y lo asigna a la variable de scope (heroe)
  console.log(heroe);
}
