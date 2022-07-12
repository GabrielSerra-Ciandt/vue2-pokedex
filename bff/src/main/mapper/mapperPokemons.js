
const mapperPokemons = {
    createPokemonsList: (pokeApiList) => {
        const pokemonsList = [];

        for (const pokemon of pokeApiList.results) {

            const pokemonId = pokemon.url.split("/")[6];
            const pokemonName = pokemon.name;

            pokemonsList.push({
                pokemonId: pokemonId,
                pokemonName: pokemonName,
                urlPokePicture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
            });
        }
        return pokemonsList;
    }
}

module.exports = mapperPokemons;