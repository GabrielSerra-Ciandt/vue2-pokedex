const { stringify } = require('querystring');
const apiRepository = require('./apiRepository');

module.exports = (router) => {
    router.get('/pokeapi', async (req, res) => {
        await apiRepository.getPokeList(req, res);
    });
    

    router.get('/pokeapi/:pokeId', async (req, res) => {
        await apiRepository.getPokeDetail(req, res, req.params['pokeId']);
    });    

    return router;
};
