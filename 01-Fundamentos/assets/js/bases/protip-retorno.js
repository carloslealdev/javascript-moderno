//Definición de función tradicional retornando un objeto
function crearPesona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  };
}

const persona = crearPesona("Carlos", "Leal");
console.log(persona);

//Se puede simplificar de la siguiente manera
const crearPesona2 = (nombre, apellido) => ({ nombre, apellido });

const persona2 = crearPesona2("Yulieth", "Herrera");
console.log(persona2);

//
//
//
//
//Objeto arguments en funciones tradicionales y funciones de flecha
//Con función tradicional
function imprimeArgumentos() {
  console.log(arguments);
}
imprimeArgumentos(10, true, "Carlos", "hola");

//Con arrow function utilizamos el operadore rest
const imprimeArgumentos2 = (...args) => {
  console.log(args);
};
imprimeArgumentos2(23, false, "Yuli", "chao");

//Función retornando argumentos
const retornarArgumentos = (...args) => {
  return args;
};
const retornoDeArgumentos = retornarArgumentos(12, false, "Rafael", "Hello");
console.log(retornoDeArgumentos);

//
//
//
//
//Desestructuración de arrays y objetos
//Arrays
const [edad, casado, nombre, saludo] = retornoDeArgumentos;
console.log({ edad, casado, nombre, saludo });

//Objetos
const { apellido } = crearPesona("Carlos", "Leal");
console.log({ apellido });

//
//
//
//
//Desestrucuturación de argumentos
let tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  //   edad: 40,
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

const imprimePropuedades = ({ nombre, codeName, vivo, edad = 0, trajes }) => {
  console.log({
    nombre,
    codeName,
    vivo,
    edad,
    trajes,
  });
};

imprimePropuedades(tony);
