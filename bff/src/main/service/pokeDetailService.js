const apiRepository = require('../gateways/http/pokeApiRepository.js');

const pokemonDetail = {};
const pokeDetailService = {
    getPokemonDatail: async (req, res) =>{  
        
        let results = await apiRepository.getPokeDetail(req, res);
        
        createPokemonDetail(results);
        console.log(pokemonDetail);//////////////////////////////////////Tirar console.log
        res.send(pokemonDetail);
    }

}

function createPokemonDetail(results){ 

    pokemonDetail.id = results.id;
    pokemonDetail.name = results.forms[0].name;
    pokemonDetail.picture = results.sprites.front_default;
    pokemonDetail.baseExperience = results.base_experience;
    pokemonDetail.height = results.height;
    pokemonDetail.weight = results.weight;
    pokemonDetail.type1 = results.types[0].type.name;
    pokemonDetail.type2 = results.types[1]?.type.name;   
    pokemonDetail.ability1 = results.abilities[0].ability.name;
    pokemonDetail.ability2 = results.abilities[1]?.ability.name;        
    
}

module.exports = pokeDetailService;