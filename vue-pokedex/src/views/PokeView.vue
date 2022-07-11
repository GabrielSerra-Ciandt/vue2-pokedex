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
import PokeWall from "@/components/PokeWall.vue";
import SearchBar from '@/components/SearchBar.vue';
import PokeList from '../Client/pokeClient.js';
import ModalComp from '@/components/ModalComp.vue';

export default ({
  name: "PokeView",
  components: {
    PokeWall,
    SearchBar,
    PokeList,
    ModalComp

  },  
  data() {
    return {
      pokemons: [],
      selectedPokemon: null

    }
  },
  mounted: async function () {
    if (!this.pokemons[0]) {
      this.pokemons = await PokeList.getPokeList();
    }
  },
  methods: {
    selectPokemon(pokemonId) {
      console.log("selectPokemon", this.selectedPokemon);
      this.selectedPokemon = this.pokemons.filter(pokemon => pokemon.pokemonId === pokemonId);
      console.log("selectPokemon", this.selectedPokemon);
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