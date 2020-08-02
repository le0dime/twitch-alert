<template>
    <ion-card v-if="hasChannel">
        <ion-card-header>
            <ion-card-subtitle>Canal seleccionado</ion-card-subtitle>
            <ion-card-title>{{this.channel.display_name}}</ion-card-title>
            <ion-button size="small" color="primary" @click="viewChannel">
                <ios-eye-icon></ios-eye-icon>&nbsp;Ver
            </ion-button>
        </ion-card-header>
    </ion-card>
</template>
<script>
export default {
    computed: {
        hasChannel() {
            return (!!this.channel);
        },
        channel() {
            return this.$store.state.channel;
        }
    },
    methods: {
        viewChannel() {
            this.$store.commit('queryChannel', this.channel);
            this.$router.push({ path: 'detail' });
        }
    }
}
</script>