const regresaTrue = () => {
  console.log("Regresa True");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa False");
  return false;
};

console.warn("Not o la negación");
console.log(true); //true
console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse());

console.warn("And &&"); //Regresa true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); //true

console.warn("Or ||"); //Regresa true si una de las condiciones es verdadera
console.log(true || false); // true
console.log(false || false); // false

//
//
//
//
//
// Asignaciones
console.warn("Asignaciones");
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && "Hola Mundo" && 150; // Esta lógica asigna a a1 el último valor verdadero
const a2 = "Hola" && "Mundo" && soyFalse; // Asigna false
const a3 = soyFalse || "Ya no soy false";
const a4 = soyFalse || soyNull || soyUndefined || "Ya no soy false de nuevo";

console.log({ a1, a2, a3, a4 });
