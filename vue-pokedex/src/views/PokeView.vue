<template>
  <div class="logo">
    <img alt="Pokemon Logo" src="../assets/PokemonLogo.png" />
    <SearchBar />
    <div class="poke-wall">
      <PokeWall v-for="pokemon in this.pokemons" :key=pokemon.pokemonId :pokemon="pokemon"
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
import ModalComp from '@/components/ModalComp.vue';
import PokeWall from "@/components/PokeWall.vue";
import SearchBar from '@/components/SearchBar.vue';
import PokeClient from '../Client/pokeClient.js';

export default ({
  name: "PokeView",
  components: {
    PokeWall,
    SearchBar,
    PokeClient,
    ModalComp

  },
  data() {
    return {
      pokemons: [],
      selectedPokemon: null

    }
  },
  mounted: async function () {
    this.pokemons = await PokeClient.getPokeList();
  },
  methods: {
    async selectPokemon(pokemonId) {
      console.log("pokeId", pokemonId); ///////////////LOG

      this.selectedPokemon = await PokeClient.getPokeDetail(pokemonId);

      console.log("selectPokemon", this.selectedPokemon); //////////LOG
    },
    closeModal() {
      this.selectedPokemon = null;
    }
  }
});

</script>

<style scoped>
.poke-wall {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

img {
  max-width: 30%;
  max-height: 30%;
}
</style>