import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
  // console.log(findHero(id));
  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `
    <h2>${hero1.name}</h2>
    <h2>${hero2.name}</h2>
    `;
  };

  const renderError = (error) => {
    element.innerHTML = `
      <h3>${error}</h3>
    `;
  };

  const id1 = "5d86371f9f80b591f499df32";
  const id2 = "5d86371f97c29d020f1e1f6d";

  //!Ejeplo de Promise Hell
  // findHero(id1)
  //   .then((hero1) => {
  //     findHero(id2)
  //       .then((hero2) => {
  //         renderTwoHeroes(hero1, hero2);
  //       })
  //       .catch(renderError);
  //   })
  //   .catch(renderError);

  //!Solucion 1 al Promise Hell - Encadenar retornos de promesas
  // let hero1;

  // findHero(id1)
  //   .then((hero) => {
  //     hero1 = hero;
  //     return findHero(id2);
  //   })
  //   .then((hero2) => {
  //     renderTwoHeroes(hero1, hero2);
  //   })
  //   .catch(renderError);

  //!Solucion 2 al Promise Hell - Promise.All([])
  //NOTA: si una de las promesas da error, entonces se ejecuta el catch. Tomar en consideración
  Promise.all([findHero(id1), findHero(id2)])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError);
};

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (hero) {
      resolve(hero);
      return;
    }

    reject(`Hero with id ${id} not found`);
  });
};
