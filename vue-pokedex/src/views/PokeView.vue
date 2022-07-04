<template>
  <div class="logo">
    <img alt="Pokemon Logo" src="../assets/PokemonLogo.png" />
    <SearchBar />
    <PokeWall v-for="pokemon in this.pokemons" :key=pokemon.pokeId :pokemon="pokemon" />
  </div>
</template>

<script>
// @ is an alias to /src
import PokeWall from "@/components/PokeWall.vue";
import SearchBar from '@/components/SearchBar.vue';
import pokeList from '../Client/pokeClient.js'

export default ({
  name: "PokeView",
  components: {
    PokeWall,
    SearchBar,
    pokeList
  },
  data: () => ({
    pokemons: []

  }),
  mounted: async function () {
    this.pokemons = await pokeList.getPokeList();
    console.log(this.pokemons);
  }
});

</script>
<style scoped>
img {
  max-width: 30%;
  max-height: 30%;
}
</style>