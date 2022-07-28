<template>
    <div class="notifi">
        <div class="notification is-danger is-light">
            <strong>Pokemon name not found! / Nome do Pokemon não encontrado!</strong>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: "Notification"
});
</script>

<style scoped>
.notifi {
    padding-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
