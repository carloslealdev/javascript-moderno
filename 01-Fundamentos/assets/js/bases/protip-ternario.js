const elMayor = (a, b) => {
  return a > b ? a : b;
};

const tieneMembresia = (miembro) => {
  return miembro ? "2$" : "10$";
};

console.log(elMayor(5, 5));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArray = ["Peter", "Tony", "Dr. Strange", amigo ? "Thor" : "Loki"];

console.log(amigosArray);

const nota = 60; //A+, A, B+, B...
const grado =
  nota >= 95
    ? "A+"
    : nota >= 90
      ? "A"
      : nota >= 85
        ? "B+"
        : nota >= 80
          ? "B"
          : nota >= 75
            ? "C+"
            : nota >= 70
              ? "C"
              : "F";

console.log({ nota, grado });
