const apiController = require('./apiController');

module.exports = (router) => {
    router.get('/pokeapi', async (req, res) => {
        await apiController.getPokeList(req, res);
    });
    

    router.get('/pokeapi/:pokeId', async (req, res) => {
        await apiController.getPokeDetail(req, res, req.params['pokeId']);
    });
    
    return router;
};
