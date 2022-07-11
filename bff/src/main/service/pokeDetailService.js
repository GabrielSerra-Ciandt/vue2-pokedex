const apiRepository = require('../gateways/http/pokeApiRepository.js');
const createPokemonDetail = require('../mapper/createPokemonDetail.js')

const maxRangePokemons = 898;

const pokeDetailService = {
    getPokemonDatail: async (req, res) => {        

        if (req.params.pokeId > maxRangePokemons || req.params.pokeId <= 0) {
            res.status(500).send(`Pokemon ID out off range (Range=${maxRangePokemons})`)

        } else {

            let result = await apiRepository.getPokeDetail(req, res);

            console.log(createPokemonDetail.getPokemonDetail(result)); //////////////////////////////////////Tirar console.log
            res.send(createPokemonDetail.getPokemonDetail(result));
            
        }
    }

}

module.exports = pokeDetailService;