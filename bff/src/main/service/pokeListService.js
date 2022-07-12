const apiRepository = require('../gateways/http/pokeApiRepository.js');
const mapperPokemons = require('../mapper/mapperPokemons.js')

const pokeListService = {
    getPokeApiList: async (req, res) => {

        const pokeApiList = await apiRepository.getPokeApiList(req, res);
        const pokemons = mapperPokemons.createPokemonsList(pokeApiList);

        res.send(pokemons);
    }
}

module.exports = pokeListService;