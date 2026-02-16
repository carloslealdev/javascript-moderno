//Propiedades y métodos de los arreglos

let videojuegos = ["Mario", "Halo", "Zelda"];
console.log("Longitud:", videojuegos.length); //Imprime la longitud del arreglo

//Acceder al primer elemento del arreglo
let primero = videojuegos[0];
console.log(primero);
//Acceder al último elemento del arreglo
let ultimo = videojuegos[videojuegos.length - 1];
console.log(ultimo);

//Ejecutar una tarea por cada elemento del array
videojuegos.forEach((elemento, index, arr) => {
  console.log({ elemento, index, arr });
});

//Añadir elementos al array
videojuegos.push("Sonic"); //Modifica el array
console.log(videojuegos);

//Añádir elementos al inicio del array
videojuegos.unshift("F-Zero");
console.log(videojuegos);

//Eliminar el último elemento
let juegoBorrado = videojuegos.pop(); //Elinmina el último elemento y lo retorna
console.log({ juegoBorrado, videojuegos });

//Eliminar un elemento específico
let posicion = 2;
let juegoEspecificoBorrado = videojuegos.splice(posicion, 1); //Los parametros son la posicion y la cantidad de elementos a partir de este
console.log(juegoEspecificoBorrado);

//Buscar el índice de un elemento
let zeldaIndex = videojuegos.indexOf("Zelda");
console.log(zeldaIndex);
