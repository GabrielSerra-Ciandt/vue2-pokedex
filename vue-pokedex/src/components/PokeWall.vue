<template>
    <div class="container">
        <a v-bind:href="pokemon.urlPokePicture" class="deck">
            <img v-bind:src="pokemon.urlPokePicture" alt="pokeName">
            <span class="deck-title">
                {{ pokemon.pokeName }}
            </span>
        </a>        
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: "PokeCard",
    props: {
        pokemon: {
            pokeId: Number,
            pokeName: String,
            urlPokePicture: String,
            require: true
        }
    }
})
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1vw;
    padding: 0 1vw;
}

.deck {
    width: 340px;
    height: fit-content;
    border: 1px solid #FFF;
    box-shadow: 5px 5px 5px #0006;
    flex-grow: 0.5;
    transition: transform 0.3s linear;
    background-color: darkgray;    
    padding-bottom: 5px;
}

.deck img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    offset-position: center;
}

.deck:hover {
    transform: scale(1.1);
    opacity: 1;
}

.deck .deck-title {
    position: static;
    width: 100%;
    color: #FFF;
    padding: 10px;
    font-size: 10pt;
}
</style>