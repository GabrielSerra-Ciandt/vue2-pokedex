<template>
    <div class="card" @click="clickedPokemon">
        <div class="deck">
            <img v-bind:src="pokemon.urlPokePicture" alt="pokePicture">
            <span class="deck-title">
                {{ pokemon.pokemonName }}
            </span>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: "PokeCard",
    emits: ['toClickedPokemon'],
    props: {
        pokemon: {
            pokemonId: Number,
            pokemonName: String,
            urlPokePicture: String,
            require: true
        }
    },
    methods: {
        clickedPokemon() {
            console.log("clicado", this.pokemon.pokemonId); ////////////////LOG
            this.$emit('toClickedPokemon', this.pokemon.pokemonId);
        }
    }

})
</script>

<style scoped>
.card {
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 1em;

}

.deck {
    width: 200px;
    height: fit-content;
    border: 1px solid #FFF;
    box-shadow: 5px 5px 5px #0006;
    flex-grow: 0.5;
    transition: transform 0.3s linear;
    background-color: darkgray;
    padding-bottom: 5px;
  /* border-radius: 20px; */ /*verificar borda background da figura */

}

.deck img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    offset-position: center;
    
}

.deck:hover {
    transform: scale(1.05);
    opacity: 1;


}

.deck-title {
    position: static;
    width: 100%;
    color: #FFF;
    padding: 10px;
    font-size: 30px;
    text-transform: capitalize;
    
}
</style>