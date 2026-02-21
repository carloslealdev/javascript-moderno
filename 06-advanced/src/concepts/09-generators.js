/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorsComponent = (element) => {
  //Las funciones generadoras devuelven cada uno de sus posibles valores
  //en cada invocación

  // const myGenerator = myFirstGeneratorFunction();
  //
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  //
  //
  //
  const genId = idGenerator();

  // console.log(genId.next());
  // console.log(genId.next());

  const button = document.createElement("button");
  button.innerText = "Click me";
  element.append(button);

  button.addEventListener("click", () => {
    const id = genId.next();

    button.innerHTML = `Click me: ${id.value}`;
  });
};

function* myFirstGeneratorFunction() {
  yield "Primer valor";
  yield "Segundo valor";
  yield "Tercer valor";
  yield "Cuarto valor";
  yield "Quinto valor";

  return "Ya no hay mas valores";
}

//Una función para generar ids únicos
function* idGenerator() {
  let currentId = 0;

  while (true) {
    yield ++currentId;
  }
}
