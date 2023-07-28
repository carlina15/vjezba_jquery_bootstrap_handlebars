function fetchYellowPokemonData() {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon-color/yellow';

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data.pokemon_species);
}

function filterYellowPokemon(pokemonSpecies) {
  return pokemonSpecies.filter((species) => species.name !== "");
}


function displayYellowPokemonData(pokemonData) {
  const source = document.getElementById('pokemon-template').innerHTML;
  const template = Handlebars.compile(source);
  const context = { pokemon: pokemonData };
  const html = template(context);

  const pokemonList = document.getElementById('pokemon-list');
  pokemonList.innerHTML = html;
}

fetchYellowPokemonData()
  .then((pokemonSpecies) => filterYellowPokemon(pokemonSpecies))
  .then((filteredPokemon) => displayYellowPokemonData(filteredPokemon))
  .catch((error) => console.error('Greška pri dohvaćanju podataka:', error));
