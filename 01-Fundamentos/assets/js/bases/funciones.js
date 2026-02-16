//Definicion Tradicional de funcion
function saludar() {
  console.log("Hola Mundo");
}
// saludar();

//Funcion anónima
const saludar2 = function () {
  console.log("Hola Mundo 2");
};
// saludar2();

//Funcion con argumentos
function saludarPersonalizado(nombre) {
  console.log("Hola " + nombre);
}
// saludarPersonalizado("Carlos");

//Argumentos explícitos DISPONIBLE SOLO EN FUNCIONES TRADICIONALES
function saludarVariosArgumentos(nombre) {
  console.log(arguments); //objeto propio de la función
  console.log(nombre);
}
// saludarVariosArgumentos("Carlos", 31, true, "Venezuela");

//Arrow functions o lambda functions
const saludarFlecha = (nombre) => {
  console.log("Hola " + nombre);
};
// saludarFlecha("Carlos");

//SI LAS FUNCIONES NO USAN LA PALABRA RESERVADA RETURN ENTONCES ESTÁN RETORNANDO UNDEFINED

//Funciones con retorno
const funcionConRetorno = () => {
  console.log("Funcion con retorno");
  return 10; //Sin este return entonces sería undefined

  console.log("Soy una línea posterior al return"); //Esta línea no se ejecuta porque está después del return
};

// const retornoDeFuncion = funcionConRetorno();
// console.log({ retornoDeFuncion });

//EJERCICIOS
const sumar = (a, b) => {
  return a + b;
};

// console.log(sumar(2, 3));

//Dato de sintaxis
//Cuando la funcion solo contiene el return en su cuerpo, la función se puede simplificar de la
//siguiente manera
const sumar2 = (a, b) => a + b;
// console.log(sumar2(2, 5));

const getAleatorio = () => Math.random();
console.log(getAleatorio());
