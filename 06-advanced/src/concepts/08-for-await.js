import { heroes } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async (element) => {
  const heroIds = heroes.map((hero) => hero.id);
  // console.log(heroIds);
  const heroPromises = getHeroesAsync(heroIds);

  //En este momento heroPromises es un arreglo de promesas
  //el cual puedo barrer con un 'for await'

  for await (const hero of heroPromises) {
    element.innerHTML += `
      ${hero.name} <br/>
    `;
  }
};

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {
  const heroPromises = [];

  heroIds.forEach((id) => {
    heroPromises.push(getHeroAsync(id));
  });

  return heroPromises;
};

const getHeroAsync = async (id) => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });

  return heroes.find((hero) => hero.id === id);
};
