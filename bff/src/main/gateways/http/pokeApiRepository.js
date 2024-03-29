const axios = require('axios');

const urlPokeList = "http://127.0.0.1:8080/pokeapi";

const pokeApiRepository = {
    getPokeApiList: async (req, res) => {
        const response = await axios.get(urlPokeList)
            .catch((error) => {
                console.log(error);
                res.status(500).send();
            });

        return (response.data);
    },

    getPokeDetail: async (req, res) => {
        const urlPokeDetail = urlPokeList + '/' + req.params.pokeId;
        const response = await axios.get(urlPokeDetail)
            .catch((error) => {
                console.log(error);
                res.status(500).send();
            });

        return(response.data);
    }
}

module.exports = pokeApiRepository;
