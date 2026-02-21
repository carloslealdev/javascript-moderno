import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  const id1 = "5d86371f233c9f2425f16916";
  const id2 = "5d86371f2343e37870b91ef1";

  findHero(id1, (error, someHero1) => {
    if (error) {
      element.innerHTML = error;
      return;
    }

    findHero(id2, (error, someHero2) => {
      if (error) {
        element.innerHTML = error;
        return;
      }
      element.innerHTML = `${someHero1.name} / ${someHero2.name}`;
    });
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
