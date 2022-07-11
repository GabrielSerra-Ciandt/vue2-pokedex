const apiRepository = require('../gateways/http/pokeApiRepository.js');

const pokeList = [];
const pokeListService = {
    getPokeApiList: async (req, res) => {
        if (!pokeList[0]) {

            const pokeApiList = await apiRepository.getPokeApiList(req, res);

            for (let i = 0; i < pokeApiList.results.length; i++) {
                let results = pokeApiList.results[i];
                let pokemonId = results.url.split("/")[6];
                let pokeName = results.name;

                createPokeList(pokemonId, pokeName);
            }
        }
        res.send(pokeList);
    }
}

function createPokeList(pokemonId, pokeName) {

    pokeList.push({
        pokemonId: pokemonId,
        pokeName: pokeName,
        urlPokePicture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

    });
}

module.exports = pokeListService;