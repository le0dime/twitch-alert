<template>
  <ion-card v-if="channel">
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
            <ion-button size="small" color="primary" @click="saveChannel">
                <ios-heart-icon animate="beat"></ios-heart-icon>
                &nbsp;Seleccionar Canal
            </ion-button>
            <ion-button size="small" color="warning" @click="goBack">
                Cancelar
            </ion-button>
        </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {Utils} from '../../services/Utils';

export default {
    props: {
        channel: Object
    },

    computed: {
        hasChannel() {
            return !!(this.channel);
        },
        url() {
            return this.hasChannel ? Utils.cleanUrl(this.channel.url) : '';
        }
    },

    methods: {
        async saveChannel() {
            const alert = await this.$ionic.alertController
                .create({
                    header: 'Seleccionar canal',
                    message: `${this.channel.display_name} será seleccionado para emitir las alertas ¿Desea proceder?`,
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary'
                        },
                        {
                            text: 'Ok',
                            handler: () => {
                                console.log('Ok')
                            }
                        }
                    ],
                })
                .then(a => a.present());
        },
        goBack() {
            this.$emit('close');
        }
    }
};
</script>

<style>
</style>