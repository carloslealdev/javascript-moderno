let a = 10;

if (a >= 10) {
  console.log("A es mayor o igual a 10");
} else {
  console.log("A es menor a 10");
}

console.log("Fin del programa");

//Condiciones anidadas con else if

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes...

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else {
  console.log("No es Domingo ni lunes ni martes");
}

//EJERCICIO
//Sin usar If, else o Switch, ÚNICAMENTE objetos o arreglos, imprimir en consola el día de la semana
dia = 3; // Se puede cambiar manualmente acá para verificar el funcionamiento

const dias = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
};

console.log(dias[dia]);
