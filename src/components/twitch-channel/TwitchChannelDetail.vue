<template>
  <ta-page :color="'tertiary'">
      <template v-slot:title>Datos del canal</template>
      <template v-slot:content>
          <ion-card v-if="hasChannel">
            <img :src="channel.profile_banner" />
            <ion-card-header>
            <ion-card-subtitle>{{url}}</ion-card-subtitle>
            <ion-card-title>{{channel.display_name}}</ion-card-title>
            <ion-badge v-if="channel.partner" color="tertiary">Partner</ion-badge>
            </ion-card-header>
            <ion-card-content>
                <div>
                    {{channel.description}}
                </div>
                <div class="ion-margin-top">
                    <ion-button size="small" color="primary" :disabled="channelIsSelected" @click="saveChannel">
                        <ios-heart-icon animate="beat"></ios-heart-icon>
                        <template v-if="channelIsSelected">
                            &nbsp;Canal seleccionado
                        </template>
                        <template v-else>
                            &nbsp;Seleccionar Canal
                        </template>
                    </ion-button>
                </div>
            </ion-card-content>
        </ion-card>
      </template>
  </ta-page>
</template>

<script>
import TaPage from '../page/Page';
import {Utils} from '../../services/Utils';

export default {

    components: {
        TaPage
    },

    computed: {
        hasChannel() {
            return !!(this.channel);
        },
        channel() {
            return this.$store.state.queryChannel;
        },
        savedChannel() {
            let savedChannel = this.$store.state.channel

            return !!(savedChannel) ? savedChannel : { _id: '1234' }
        },
        channelIsSelected() {
            return this.channel._id == this.savedChannel._id;
        },
        url() {
            return this.hasChannel ? Utils.cleanUrl(this.channel.url) : '';
        }
    },

    methods: {
        async saveChannel() {
            let self = this;

            const alert = await this.$ionic.alertController
                .create({
                    header: 'Seleccionar canal',
                    message: `${self.channel.display_name} será seleccionado para emitir las alertas ¿Desea proceder?`,
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary'
                        },
                        {
                            text: 'Ok',
                            handler: () => {
                                self.$store.commit('twitchChannel', self.channel);
                            }
                        }
                    ],
                })
                .then(a => a.present());
        }
    }
};
</script>

<style>
</style>