//Singleton es una instancia única de una clase

//El nombre de la clase no debe ser estrictamente 'Singleton'
class Singleton {
  static instancia; //undefined
  nombre = "";

  constructor(nombre = "") {
    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    Singleton.instancia = this;
    this.nombre = nombre;
  }
}

const instancia1 = new Singleton("Carlos");

//Aunque esto es una nueva instancia, Siempre va a devolver el mismo nombre
// y esa es la idea del Singleton
const instancia2 = new Singleton("Yuli");

console.log(instancia1.nombre);
console.log(instancia2.nombre);
