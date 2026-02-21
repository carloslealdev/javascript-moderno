/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwait2Component = async (element) => {
  console.time("Start");

  //Este código tarda 4.5 segundo debido a que se espera el valor de cada promesa
  //para continuar con la siguiente. Lo cual en este caso no tiene sentido porque
  //son promesas independientes
  //
  // const value1 = await slowPromise();
  // const value2 = await mediumPromise();
  // const value3 = await fastPromise();

  //Este código por el contrario se ejecuta en 2 segundos porque todas las promesas se
  //disparan en paralelo, y se devuelve el resultado cuando se ejecutan todas
  const [value1, value2, value3] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ]);

  element.innerHTML = `
    value1: ${value1} <br/>
    value2: ${value2} <br/>
    value3: ${value3} <br/>
  `;

  console.timeEnd("Start");
};

const slowPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow Promise");
    }, 2000);
  });

const mediumPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Medium Promise");
    }, 1500);
  });

const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fast Promise");
    }, 1000);
  });
