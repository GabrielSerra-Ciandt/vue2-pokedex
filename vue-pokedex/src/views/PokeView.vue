<template>
  <div class="logo">
    <img alt="Pokemon Logo" src="../assets/PokemonLogo.png" />
    <SearchBar />
   
      <div class="poke-wall">
        <PokeWall v-for="pokemon in this.pokemons" :key=pokemon.pokeId :pokemon="pokemon" />
      </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import PokeWall from "@/components/PokeWall.vue";
import SearchBar from '@/components/SearchBar.vue';
import pokeList from '../Client/pokeClient.js';

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
    if (!this.pokemons[0]) {
      this.pokemons = await pokeList.getPokeList();
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