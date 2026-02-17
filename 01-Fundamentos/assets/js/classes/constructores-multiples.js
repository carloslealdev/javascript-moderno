//Javascript no soporta múltiples constructores pero se puede implementar
// de ser necesario, algo de esta manera:

class Persona {
  //Implementación para poder construir instancias recibiendo objetos en el constructor
  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

const nombre1 = "Carlos",
  apellido1 = "Leal",
  pais1 = "Venezuela";

const yuli = {
  nombre: "Yulieth",
  apellido: "Herrera",
  pais: "Colombia",
};

const persona1 = new Persona(nombre1, apellido1, pais1);
persona1.getInfo();

//Sin el new porque no es un constructor sino un método estático
const persona2 = Persona.porObjeto(yuli);
persona2.getInfo();
