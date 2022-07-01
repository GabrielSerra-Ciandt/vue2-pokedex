const apiRepository = require('../gateways/http/pokeApiRepository.js');

const pokeList = [];
const pokeListService = {
    getPokeApiList: async (req, res) => {
        const pokeApiList = await apiRepository.getPokeApiList(req, res);
        for (let i = 0; i < pokeApiList.results.length; i++) {
            let results = pokeApiList.results[i];
            let pokeId = results.url.split("/")[6];
            let pokeName = results.name;
            createPokeList(pokeId, pokeName);
        }        
        res.send(pokeList);
    }
}

function createPokeList(pokeId, pokeName) {

    // pokeList.push({ /////////////////////////////////////////////// perguntar qual seria o mais correto
    //     pokemon: {
    //         pokeId: pokeId,
    //         pokeName: pokeName,
    //         urlPokePicture: urlPokePicture
    //     }
    // })

    pokeList.push({
        pokeId: pokeId,
        pokeName: pokeName,
        urlPokePicture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`

    });
}

module.exports = pokeListService;