import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  const id = "5d86371f233c9f2425f16916";
  findHero(id, (error, someHero) => {
    if (error) {
      element.innerHTML = error;
      return;
    }
    element.innerHTML = someHero.name;
  });
};

/**
 *
 * @param {String} id
 * @param {(error: String|null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  //Si no existe el heroe se llama el callback con el error
  if (!hero) {
    callback(`Hero with ${id} not found`);
    return; //undefined
  }
  callback(null, hero);
};
