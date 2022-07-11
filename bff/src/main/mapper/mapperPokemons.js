
const pokemonsList = [];
const mapperPokemons = {
    createPokemonsList: (pokemonId, pokemonName) => {

        pokemonsList.push({
            pokemonId: pokemonId,
            pokemonName: pokemonName,
            urlPokePicture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
        });
    },

    getPokemonsList: () => {
        return pokemonsList;
    }
}

module.exports = mapperPokemons;