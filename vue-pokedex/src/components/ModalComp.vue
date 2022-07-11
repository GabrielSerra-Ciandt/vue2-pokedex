<template>
    <div class="modal" :class="{ 'is-active': showModal }" v-if="showModal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <div class="pokemonPicture">
                <figure class="image is-128x128">
                    <img class="is-rounded" v-bind:src="pokemonDetail[0].urlPokePicture">
                </figure>
            </div>
            <header class="modal-card-head">
                <div>
                    <h1 class="modal-card-title">
                        {{ pokemonDetail[0].pokeName }}
                    </h1>
                </div>
            </header>
            <section class="modal-card-body">
                <div class="columns">
                    <p class="column is-half">
                        Base Experience / Experiência
                    </p>
                    <p class="column is-pulled-right">
                        {{ pokemonDetail[0].pokemonId }} XP
                    </p>
                </div>
                <div class="columns">
                    <p class="column is-half">
                        Height / Altura
                    </p>
                    <p class="column is-pulled-right">
                        {{ pokemonDetail[0].pokemonId }} m
                    </p>
                </div>
                <div class="columns">
                    <p class="column is-half">
                        Weight / Peso
                    </p>
                    <p class="column is-pulled-right">
                        {{ pokemonDetail[0].pokemonId }} kg
                    </p>
                </div>
                <hr>
                <div>
                    <h2>
                        Pokemon Types / Tipos
                    </h2>
                    <p>
                        tipo 1 tipo 2
                    </p>
                    <hr>
                    <h2>
                        Abilities / Habilidades
                    </h2>
                    <p>
                        tiopo A tipo B
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
            pokemonId: Number,
            pokeName: String,
            urlPokePicture: String,
            require: true
        },
    },
});
</script>

<style scoped>
.pokemonPicture {
    align-self: center;
}

img {
    background: orange;
    box-shadow: 5px 15px 15px 1px grey;

}

h1 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 25px;
}
</style>>



