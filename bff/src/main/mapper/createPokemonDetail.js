

const createPokemonDetail = {
    getPokemonDetail: (result) =>{
        const pokemonDetail = {};

        pokemonDetail.id = result.id;
        pokemonDetail.name = result.forms[0].name;
        pokemonDetail.picture = result.sprites.front_default;
        pokemonDetail.baseExperience = result.base_experience;
        pokemonDetail.height = result.height / 10;
        pokemonDetail.weight = result.weight / 10;
        pokemonDetail.type1 = result.types[0].type.name;
        pokemonDetail.type2 = result.types[1]?.type.name;
        pokemonDetail.ability1 = result.abilities[0].ability.name;
        pokemonDetail.ability2 = result.abilities[1]?.ability.name;

        return pokemonDetail;
    }
}

module.exports = createPokemonDetail;