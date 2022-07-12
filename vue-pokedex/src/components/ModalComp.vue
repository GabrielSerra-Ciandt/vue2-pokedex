<template>
    <div class="modal" :class="{ 'is-active': showModal }" v-if="showModal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <div class="pokemonPicture">
                <figure class="image is-128x128">
                    <img class="is-rounded" v-bind:src="pokemonDetail.picture">
                </figure>
            </div>
            <header class="modal-card-head">
                <div>
                    <h1 class="modal-card-title">
                        {{ pokemonDetail.name }}
                    </h1>
                </div>
            </header>
            <section class="modal-card-body">
                <div class="pokemon-data">
                    <em class="pokemon-title">Base Experience / Experiência</em>
                    <em class="pokemon-stats">{{ pokemonDetail.baseExperience }} XP</em>
                    <br />
                    <em class="pokemon-title">Height / Altura</em>
                    <em class="pokemon-stats">{{ pokemonDetail.height }} M</em>
                    <br />
                    <em class="pokemon-title">Weight / Peso</em>
                    <em class="pokemon-stats">{{ pokemonDetail.weight }} Kg</em>
                </div>
                <hr />
                <div>
                    <em class="pokemon-stats-title">Pokemon Types / Tipo</em>
                    <div class="types">
                        <button class="type" :data-result-val="pokemonDetail.type1">
                            {{ pokemonDetail.type1 }}
                        </button>
                        <button class="type" :data-result-val="pokemonDetail.type2" v-if="pokemonDetail.type2">
                            {{ pokemonDetail.type2 }}
                        </button>
                    </div>
                </div>
                <hr />
                <div>
                    <em class="pokemon-stats-title">Abilities/Habilidades</em>
                    <div class="types">
                        <button class="ability">
                            {{ pokemonDetail.ability1 }}
                        </button>
                        <button class="ability" v-if="pokemonDetail.ability2">
                            {{ pokemonDetail.ability2 }}
                        </button>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <slot name="foot"></slot>
            </footer>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: "ModalComp",
    props: {
        showModal: {
            type: Boolean,
            require: true
        },
        pokemonDetail: {
            id: Number,
            name: String,
            picture: String,
            baseExperience: String,
            height: Number,
            weight: Number,
            type1: String,
            type2: String,
            ability1: String,
            ability2: String,
        },
    },
});
</script>

<style scoped>
button[data-result-val="normal"] {
    background-color: #a9a879;
}

button[data-result-val="bug"] {
    background-color: #a8bb15;
}

button[data-result-val="fighting"] {
    background-color: #bd3226;
}

button[data-result-val="ghost"] {
    background-color: #715996;
}

button[data-result-val="electric"] {
    background-color: #f6d230;
}

button[data-result-val="flying"] {
    background-color: #a88ff3;
}

button[data-result-val="steel"] {
    background-color: #b8b8d0;
}

button[data-result-val="psychic"] {
    background-color: #f85888;
}

button[data-result-val="poison"] {
    background-color: #9f3fa0;
}

button[data-result-val="fire"] {
    background-color: #f07f2f;
}

button[data-result-val="ice"] {
    background-color: #98d8d8;
}

button[data-result-val="ground"] {
    background-color: #dec162;
}

button[data-result-val="water"] {
    background-color: #6991e7;
}

button[data-result-val="dragon"] {
    background-color: #6e39ed;
}

button[data-result-val="rock"] {
    background-color: #b4a339;
}

button[data-result-val="grass"] {
    background-color: #75ca4f;
}

button[data-result-val="dark"] {
    background-color: #6f5848;
}

button[data-result-val="fairy"] {
    background-color: #de94dc;
}

img {
    background: orange;
    box-shadow: 5px 15px 15px 1px grey;
}


h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2em;
}

.pokemonPicture {
    align-self: center;
}

.modal {
    text-transform: capitalize;
}

.pokemon-title {
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
}

.pokemon-data {
    margin-top: 5%;
    text-align: left;
    margin-left: 15%;
}

.pokemon-stats {
    float: right;
    margin-right: 17%;
    font-style: normal;
    font-size: 20px;

}



.pokemon-stats-title {
    font-weight: bold;
    font-style: normal;
    color: black;
    text-transform: capitalize;
    font-size: 2em;
    float: center;

}

.types {
    float: center;
}

.type {
    min-width: 100px;
    height: 40px;
    color: white;
    font-size: 20px;
    border-radius: 25px;
    border: 0;
    text-transform: capitalize;
    margin-right: 20px;
    font-weight: bold;
    float: center;
}

.ability {
    background-color: white;
    min-width: 120px;
    height: 40px;
    color: #11771c;
    font-size: 20px;
    border-radius: 25px;
    border: solid 3px;
    border-color: #11771c;
    text-transform: capitalize;
    margin-right: 20px;
    font-weight: bold;
    float: center;
    margin-top: 3px;
}
</style>>



