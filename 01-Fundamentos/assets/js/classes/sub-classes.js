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

/**
 * Para extender una clase usamos la palabra reservada extends
 * De esta manera la nueva clase hereda todas las propiedades y métodos
 * de la clase padre
 */
class Heroe extends Persona {
  clan = "Sin clan"; // Podemos definir sus propias propiedades

  constructor(nombre, apellido, edad, profesion) {
    //Llamamos primero al constructor del padre con la palabra super
    super(nombre, apellido, edad, profesion);

    //Y luego podemos inicializar las propiedades propias
    this.clan = "Los Vengadores";
  }

  //Podemos definir métodos propios (aunque tengan el mismo nombre que los métodos del padre)
  quienSoy() {
    console.log(`Soy ${this.nombre} de ${this.clan}`);
    //Y podemos llamar a los métodos del padre con la palabra super
    super.quienSoy();
  }
}

const carlos = new Heroe("Carlos", "Leal", 31, "Programador");
console.log(carlos);
