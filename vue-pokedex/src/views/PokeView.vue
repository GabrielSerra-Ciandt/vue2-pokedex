<template>
  <div class="logo">
    <img alt="Pokemon Logo" src="../assets/PokemonLogo.png" />
    <SearchBar v-on:pokemonFilter="filterPokemon" />

    <div class="notifi">
      <Notification v-if="this.renderPokemons.length === 0" />
    </div>
    <div class="poke-wall">
      <PokeWall v-for="pokemon in this.renderPokemons" :key=pokemon.pokemonId :pokemon="pokemon"
        @toClickedPokemon="selectPokemon" />
    </div>
    <ModalComp :showModal="selectedPokemon != null" :pokemonDetail="selectedPokemon">
      <template v-slot:detailModal></template>
      <template v-slot:foot>
        <button @click="closeModal" class="button is-danger">Close / Fechar</button>
      </template>
    </ModalComp>
  </div>
</template>

<script>
import Notification from '@/components/Notification.vue';
import ModalComp from '@/components/ModalComp.vue';
import PokeWall from "@/components/PokeWall.vue";
import SearchBar from '@/components/SearchBar.vue';
import PokeClient from '../Client/pokeClient.js';

export default ({
  name: "PokeView",
  components: {
    Notification,
    ModalComp,
    PokeWall,
    SearchBar,
    PokeClient,
  },
  data() {
    return {
      pokemons: [],
      renderPokemons: [],
      selectedPokemon: null
    }
  },
  mounted: async function () {
    this.pokemons = await PokeClient.getPokeList();
    this.renderPokemons = this.pokemons;
  },
  methods: {
    async selectPokemon(pokemonId) {
      this.selectedPokemon = await PokeClient.getPokeDetail(pokemonId);
    },
    closeModal() {
      this.selectedPokemon = null;
    },
    filterPokemon(pokemonFilter) {
      this.renderPokemons = this.pokemons.filter((items) => {
        return items.pokemonName.includes(pokemonFilter.toLowerCase())
      });
    }
  },
});
</script>

<style scoped>
.poke-wall {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

img {
  padding-top: 35px;
  max-width: 35%;
  max-height: 35%;
}
</style>