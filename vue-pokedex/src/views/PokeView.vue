<template>
  <div class="logo">
    <img alt="Pokemon Logo" src="../assets/PokemonLogo.png" />
    <SearchBar />
    <Pokedex />
  </div>
</template>

<script>
// @ is an alias to /src
import Pokedex from "@/components/Pokedex.vue";
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: "PokeView",
  components: {
    Pokedex,   
    SearchBar
  },
};
</script>


<style scoped>
img {
  max-width: 30%;
  max-height: 30%;
}
</style>