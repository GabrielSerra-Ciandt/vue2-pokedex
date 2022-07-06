const axios = require('axios');
const urlPokeList = "http://127.0.0.1:3000/pokeapi";

const pokeList = {
    getPokeList: async () => {
        let response = null;
        response = await axios.get(urlPokeList)

            .catch((error) => {
                console.log(error);
            })
        // console.log("Client", response.data);
        // return response.data.slice(0, 13);
        return response.data;        
    }
}

module.exports = pokeList;