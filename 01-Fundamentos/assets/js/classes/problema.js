/**
 * En versiones anteriores de JS es estandar cuando se necesitaba crear
 * múltiples instancias de algo era mas o menos el siguiente (antes de la
 * implementación de las clases)
 */

//Se utilizada uppercammelcase en una funcion tradicional
function Persona(nombre, edad) {
  console.log("Se ejecutó esta línea");

  //El uso de la palabra reservada this
  this.nombre = nombre;
  this.edad = edad;

  //Métodos
  this.imprimir = function () {
    console.log(`Nombre: ${nombre} - Edad: ${edad}`);
  };
}

//Esto nos permitía crear multiples instancias y acceder a sus métodos y propiedadaes
const carlos = new Persona("Carlos", 31);
carlos.imprimir();

//Pero aún existian muchos problemas como la inpracticidad a la hora de declarar
// propiedades privadas y muchas otras cosas que llegaron posteriormente con la
// implementación de las clases
