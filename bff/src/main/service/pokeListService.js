const apiRepository = require('../gateways/http/pokeApiRepository.js');
const mapperPokemons = require('../mapper/mapperPokemons.js')

const pokeListService = {
    getPokeApiList: async (req, res) => {
        if (!mapperPokemons.getPokemonsList()[0]) {

            const pokeApiList = await apiRepository.getPokeApiList(req, res);

            for (let i = 0; i < pokeApiList.results.length; i++) {
                const result = pokeApiList.results[i];
                const pokemonId = result.url.split("/")[6];
                const pokemonName = result.name;

                mapperPokemons.createPokemonsList(pokemonId, pokemonName);

            }
        }
        res.send(mapperPokemons.getPokemonsList());
    }
}

module.exports = pokeListService;