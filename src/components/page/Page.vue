<template>
  <div>
    <ion-header>
      <ion-toolbar :color="color">
        <ion-buttons v-if="hasHistory && !currentRouteIsMain" slot="start">
            <ion-button @click="goBack">
                <ion-icon name="arrow-back"></ion-icon>
            </ion-button>
        </ion-buttons>
        <ion-title>
            <slot name="title"></slot>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="page--content">
      <slot name="content"></slot>
    </ion-content>
  </div>
</template>

<script>
export default {
    props: {
        color: String,
        enableBackButton: {
            type: Boolean,
            default: true
        },
        previousPage: String
    },

    computed: {
        currentRouteIsMain() {
            return this.$route.name == 'main';
        },
        hasHistory() {
            return window.history.length > 2;
        }
    },

    methods: {
        goBack() {
            return this.$router.go(-1);
        }
    }
};
</script>

<style lang="scss">

    .page--content {
        height: 100vh;
    }

    .button-back {
        color: white;
    }
    
</style>