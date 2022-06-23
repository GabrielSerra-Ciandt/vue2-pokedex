const axios = require('axios');

const urlPokeList = "http://127.0.0.1:8080/pokeapi";

const apiController = {
    getPokeList: async (req, res) => {
        const response = await axios.get(urlPokeList)
            .catch((error) => {
                console.log(error);
                res.status(500).send();
            });
        res.send(response.data);
    }
}

module.exports = apiController;
