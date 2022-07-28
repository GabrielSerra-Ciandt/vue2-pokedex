<template>
    <div class="search">
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <form class="control has-icons-left">
            <input class="input" type="text" placeholder="Search for a Pokemon name" v-model="searchText">
            <span class="icon is-small is-left">
                <i class="fa fa-search"></i>
            </span>
        </form>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: "SearcheBar",
    emits: ['pokemonFilter'],
    data() {
        return {
            searchText: '',
        }
    },
    watch: {
        // whenever question changes, this function will run
        searchText(newSearchText, oldSearchText) {
            if (newSearchText != oldSearchText) {
                this.emitSearchText()
            }
        }
    },
    methods: {
        async emitSearchText() {
            this.$emit('pokemonFilter', this.searchText)
        }
    }
});
</script>

<style scoped>
.search {
    padding-top: 5px;
    padding-bottom: 5px;
    flex-wrap: wrap;
    margin-inline: 200px;
    /* max-inline-size: 600px;   */
}
</style>