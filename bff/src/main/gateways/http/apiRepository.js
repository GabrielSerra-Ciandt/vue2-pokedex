const axios = require('axios');

const urlPokeList = "http://127.0.0.1:8080/pokeapi";

const apiRepository = {
    getPokeList: async (req, res) => {
        const response = await axios.get(urlPokeList)
            .catch((error) => {
                console.log(error);
                res.status(500).send();
            });

        // console.log(response.data.results.map(pokeName => {
        //     return pokeName.url.split("/")[6];
        // }));

        res.send(response.data);
    },

    getPokeDetail: async (req, res, pokeId) => {
        const urlPokeDetail = urlPokeList + '/' + pokeId;
        // console.log("urlPokeDetail ", urlPokeDetail);

        const response = await axios.get(urlPokeDetail)
            .catch((error) => {
                console.log(error);
                res.status(500).send();
            });

        res.send(response.data);
    }
}

module.exports = apiRepository;
