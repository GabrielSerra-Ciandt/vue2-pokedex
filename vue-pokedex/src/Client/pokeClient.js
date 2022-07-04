const axios = require('axios');
const urlPokeList = "http://127.0.0.1:3000/pokeapi";

const pokeList = {
    getPokeList: async () => {
        const response = await axios.get(urlPokeList)
            .catch((error) => {
                console.log(error);
            })
        console.log(response.data.slice(0, 10));
        return response.data.slice(0, 1000);
        // return response.data;

        
    }
}

module.exports = pokeList;