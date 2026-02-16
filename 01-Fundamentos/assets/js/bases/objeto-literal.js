let personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coord: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
};

console.log(personaje);

//Accediendo a propiedades del objeto
console.log("Nombre: ", personaje["nombre"]);
console.log("Nombre: ", personaje.nombre);
console.log("Edad: ", personaje.edad);
console.log("Latitud: ", personaje.coord.lat);
console.log("Cantidad de trajes: ", personaje.trajes.length);
console.log("Último traje: ", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
console.log("Vivo: ", personaje[x]);

//Borrar propiedades
delete personaje.edad;
console.log(personaje); //Imprime el objeto pero ahora sin la edad

//Crear una nueva propiedad
personaje.casado = true;

//Convirtiendo los clave-valor en arrays
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Hacer el objeto inmutable
Object.freeze(personaje);

personaje.dinero = 100000000; //Esta propiedad no se añade y no se pueden modificar las existentes pero las propiedades internas que sean
//objetos literales si se podrán modificar
console.log(personaje);

//Obteniendo las prpiedades del objeto como un array
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

//Obteniendo los valores de las propiedades del objeto
const values = Object.values(personaje);
console.log(values);
