const apiRepository = require('./pokeApiRepository');
const pokeList = require('../../service/pokeListService.js');

module.exports = (router) => {
    router.get('/pokeapi', async (req, res) => {
        await pokeList.getPokeApiList(req, res);
    });

    router.get('/pokeapi/:pokeId', async (req, res) => {
        await apiRepository.getPokeDetail(req, res, req.params['pokeId']);
    });

    return router;
};
