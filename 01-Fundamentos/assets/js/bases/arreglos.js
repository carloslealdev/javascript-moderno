// const arr = new Array(10); //Crea un arreglo de 10 posiciones vacías
// console.log(arr);

// const arr2 = []; //Crea un arreglo vacío
// console.log(arr2);

let videojuegos = ["Mario 3", "Megaman", "Chrono Trigger"];
console.log({ videojuegos });

console.log(videojuegos[0]); //Accede al primer elemento del arreglo

let arregloDeCosas = [
  1,
  2,
  "Hola",
  true,
  false,
  null,
  undefined,
  function () {},
  {}, //Objeto
  [], //Arreglo
  ["Spiderman", "Batman", "Superman"],
]; //Los arreglos en JavaScript pueden tener cualquier tipo de dato

console.log(arregloDeCosas);

//Para imprimir Superman
console.log(arregloDeCosas[10][2]);
