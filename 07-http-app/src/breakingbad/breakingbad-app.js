/**
 * @returns {Promise<Object>} Pokemon info
 */
const fetchPokemon = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const data = await res.json();
  console.log(data);
  return data;
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
  element.innerHTML = "Loading...";
  //   const pokemon = await fetchPokemon();
  //   element.innerHTML = pokemon.name;

  const nameLabel = document.createElement("h2");
  const idLabel = document.createElement("blockquote");
  const nextPokemonButton = document.createElement("button");
  nextPokemonButton.innerText = "Next Pokemon";

  const renderPokemon = (data) => {
    nameLabel.innerHTML = data.name;
    idLabel.innerHTML = data.id;
    element.replaceChildren(nameLabel, idLabel, nextPokemonButton);
  };

  fetchPokemon().then(renderPokemon);
};
