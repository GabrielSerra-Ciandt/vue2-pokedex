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
                <div class="columns">
                    <p class="column is-half">
                        Base Experience / Experiência
                    </p>
                    <p class="column is-pulled-right">
                        {{ pokemonDetail.baseExperience }} XP
                    </p>
                </div>
                <div class="columns">
                    <p class="column is-half">
                        Height / Altura
                    </p>
                    <p class="column is-pulled-right">
                        {{ pokemonDetail.height }} m
                    </p>
                </div>
                <div class="columns">
                    <p class="column is-half">
                        Weight / Peso
                    </p>
                    <p class="column is-pulled-right">
                        {{ pokemonDetail.weight }} kg
                    </p>
                </div>
                <hr>
                <div>
                    <h2>
                        Pokemon Types / Tipos
                    </h2>
                    <p>
                        {{ pokemonDetail.type1 }} | {{ pokemonDetail.type2 }}
                    </p>
                    <hr>
                    <h2>
                        Abilities / Habilidades
                    </h2>
                    <p>
                        {{ pokemonDetail.ability1 }} | {{ pokemonDetail.ability2 }}
                    </p>
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
.modal {
    text-transform: capitalize;
}

.pokemonPicture {
    align-self: center;
}

img {
    background: orange;
    box-shadow: 5px 15px 15px 1px grey;

}

h1 {

    font-weight: bold;
    font-size: 25px;
}
</style>>



