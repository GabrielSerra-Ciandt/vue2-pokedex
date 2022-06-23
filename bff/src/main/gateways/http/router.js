const apiController = require('./apiController');

module.exports = (router) => {
    router.get('/pokeapi', async (req, res) => {
        await apiController.getPokeList(req, res);
    });
    return router;
};
