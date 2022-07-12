const axios = require('axios');
const urlPokeList = "http://127.0.0.1:3000/pokeapi";

const pokeClient = {
    getPokeList: async () => {
        let response = null;
        response = await axios.get(urlPokeList)

            .catch((error) => {
                console.log(error);
            })
        // console.log("Client", response.data); //////////////////// LOG
        return response.data.slice(0, 11);
        // return response.data;        
    },

    getPokeDetail: async (req, res) => {
        const urlPokeDetail = urlPokeList + '/' + req;
        const response = await axios.get(urlPokeDetail)
            .catch((error) => {
                console.log(error);
                res.status(500).send();
            });

        return(response.data);
    }
}

module.exports = pokeClient;