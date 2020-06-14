<template>
  <ta-page :color="'tertiary'">
    <template v-slot:title>Twitch Alert</template>
    <template v-slot:content>
      <router-link to="search">Home</router-link>
      <ion-button color="tertiary" expand="block" class="ion-margin-top">Buscar cuenta de Twitch</ion-button>
    </template>
  </ta-page>
</template>

<script>
import TaPage from "../page/Page";

export default {
  components: {
    TaPage
  }
};
</script>

<style>
</style>