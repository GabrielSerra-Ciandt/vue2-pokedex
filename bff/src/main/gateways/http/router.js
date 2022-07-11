const apiRepository = require('./pokeApiRepository');
const pokeListService = require('../../service/pokeListService.js');
const pokeDetailService = require('../../service/pokeDetailService.js')

module.exports = (router) => {
    router.get('/', async (req, res) => {       
        await pokeListService.getPokeApiList(req, res);
    });

    router.get('/:pokeId', async (req, res) => {
        // await apiRepository.getPokeDetail(req, res, req.params['pokeId']);
        await pokeDetailService.getPokemonDatail(req, res, req.params['pokeId'])
    });

    return router;
};
