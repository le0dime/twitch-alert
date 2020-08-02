<template>
  <ta-page :color="'tertiary'" class="ta-main">
    <template v-slot:title>Twitch Alert</template>
    <template v-slot:content>

     <ta-twitch-mini-channel-detail></ta-twitch-mini-channel-detail>
        
      <router-link class="ta-main--search" to="search">
          <ion-button color="tertiary" class="ion-margin" expand="block">Buscar canal de Twitch</ion-button>
      </router-link>
      
    </template>
  </ta-page>
</template>

<script>
import TaPage from "../page/Page";
import TaTwitchMiniChannelDetail from "../twitch-channel/TwitchMiniChannelDetail";

export default {
  components: {
    TaPage,
    TaTwitchMiniChannelDetail
  }
};
</script>

<style lang="scss">

    .ta-main {
        .ta-main--search {
            text-decoration: none;
        }
    }
</style>