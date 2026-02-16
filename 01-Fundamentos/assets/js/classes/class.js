//Declaración de clases con UpperCammelCase
class Persona {
  //Propiedades estáticas
  static _conteo = 0;

  //Gets estáticos
  static get conteo() {
    return Persona._conteo;
  }

  //Métodos estáticos
  static mensaje() {
    console.log("Soy un método estático");
  }

  //Propiedades
  nombre = "";
  apellido = "";
  edad = "";
  profesion = "";
  comida = "";

  //El constructor es un método que se ejecuta en el momento en el que se
  //crea una nueva instancia de la clase
  constructor(nombre, apellido, edad, profesion) {
    /**
     * La palabra reservada this nos permite hacer referencia a las
     * propiedades definidas dentro de la clase
     */
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.profesion = profesion;

    //Esta línea se ejecuta con cada instancia de la clase
    Persona._conteo++;
  }

  //Setters -  Para establecer valores
  // (No pueden tener el mismo nombre de la propiedad )
  set setComidaFavorita(comida) {
    //Los sets solo reciben un argumento
    this.comida = comida.toUpperCase();
  }

  //Getter - Para recuperar valores
  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  //Métodos
  quienSoy() {
    console.log(
      `Soy ${this.nombre} ${this.apellido} y tengo ${this.edad} anios`,
    );
  }

  //Podemos llamar métodos dentro de la misma clase
  miProfesion() {
    this.quienSoy();
    console.log(`Y soy ${this.profesion}`);
  }
}

const carlos = new Persona("Carlos", "Leal", 31, "Programador");
// console.log({ carlos });

const yuli = new Persona("Yulieth", "Herrera", 29, "Psicologa");
// console.log({ yuli });

// carlos.quienSoy();
// yuli.quienSoy();

carlos.miProfesion();

//Utilización de setters
carlos.setComidaFavorita = "Cachapa con queso";
console.log(carlos);

//Utilización de getters
console.log(carlos.getComidaFavorita);

//Las propiedades estáticas solamente son accesibles desde la clase y no
//desde sus instancias
console.log("Accediendo a la propiedad estática", Persona._conteo);
console.log("Accediendo al get estático", Persona.conteo);

//Accediendo al método estático
console.log(Persona.mensaje());

//En JS se pueden establecer propiedades estáticas fuera de la clase
Persona.propiedadExterna = "Hola Mundo";
console.log(Persona.propiedadExterna);

console.log(Persona);
