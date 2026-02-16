/*
En javascript este tipo de asignaciones a primitivos se pasan por valor,
es por eso que aunque reasignemos el valor de 'a', 'b' seguirá valiendo 10
*/

let a = 10;
let b = a; // Aquí b vale 10
a = 30; // Aquí reasignamos el valor de a, pero b sigue valiendo 10

console.log({ a, b }); // a:30, b:10

//
//En cambio los objetos se pasan por referencia

let juan = { nombre: "Juan" };
let ana = juan; // Aquí estamos apuntando al mismo valor en memoria que ocupa juan
ana.nombre = "Ana"; // Aquí ana.nombre = "Ana" pero juan.nombre = "Ana" también porque al pasar
// el valor por referencia estamos modificando el espacio en memoria al que están apuntando juan y ana

console.log({ juan, ana }); //juan: {nombre: "Ana"}, ana: {nombre: "Ana"}

//Otro ejemplo de asignación por referencia es el siuguiente

const cambiarNombre = (persona) => {
  //Aqué recibimos el objeto por referencia
  persona.nombre = "Tony";
  return persona; // Y aquí estamos retornando el mismo objeto
};

let peter = { nombre: "Peter" };
let tony = cambiarNombre(peter);

console.log({ peter, tony }); //Por lo cual en este punto ambos objeto.nombre = "Tony"

//
// Sin embargo esta referencia se puede romper con el operador spread de la siguiente manera
let carlos = { nombre: "Carlos" };
let yuli = { ...carlos }; //Aquí rompemos la referencia con el operador spread
yuli.nombre = "Yuli";

console.log({ carlos, yuli }); //carlos.nombre = "Carlos", yuli.nombre: "Yuli"

//Con el ejemplo de la función
const cambiarNombre2 = ({ ...persona }) => {
  //Rompemos la referencia del objeto
  persona.nombre = "David";
  return persona;
};

let doly = { nombre: "Doly" };
let david = cambiarNombre2(doly);

console.log({ doly, david }); //doly.nombre = "Doly", david.nombre = "David"

//También podemos romper referncias a arreglos con el operador spread

const frutas = ["Manzana", "Pera", "Fresa"];

//Rompiendo la referencia con el método slice()
console.time("slice");
const otrasFrutas = frutas.slice(); //Con el método slice sin argumentos se retorna un nuevo arrglo rompiendo así la referencia
console.timeEnd("slice");

//Rompiendo la referencia con spread (generalmente mas rápido y eficiente)

console.time("slice");
const otrasFrutas2 = [...frutas];
console.timeEnd("slice");

otrasFrutas.push("Mango");

console.table({ frutas, otrasFrutas });
