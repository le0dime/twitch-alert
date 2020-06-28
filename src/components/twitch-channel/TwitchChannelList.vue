<template>
  <ion-list v-if="hasChannels">
    <ion-item v-for="channel in channels" :key="channel._id" @click="selectChannel(channel)" detail="true">
      <ion-avatar slot="start">
        <img :src="channel.logo" />
      </ion-avatar>
      <ion-label>
        <h2>{{channel.display_name}}</h2>
        <p>{{channel.followers}} seguidores</p>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script>
export default {
    props: {
        channels: Array
    },

    computed: {
        hasChannels() {
            return this.channels && this.channels.length > 0;
        }
    },

    methods: {
        selectChannel(channel) {
            this.$emit('select', channel);
        }
    }
};
</script>