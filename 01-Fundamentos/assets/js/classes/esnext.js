//Propiedades provadas

class Rectangulo {
  #area = 0; //Declaaracion de Propiedad privada

  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.#area = base * altura;
  }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.area = 230223; //Esto no se debe poder hacer

console.log({ rectangulo });
