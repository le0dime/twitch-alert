<template>
    <ta-page :color="'tertiary'">
        <template v-slot:title>Buscar Canal</template>
        <template v-slot:content>
            <template>
                <ion-searchbar 
                    animated 
                    debounce="500" 
                    placeholder="Ingresa el nombre del canal" 
                    :value="term" 
                    @ionChange="onInput($event.target.value)"
                    @ionClear="searchCleared($event)">
                </ion-searchbar>
                <ta-skeleton v-if="isLoading"></ta-skeleton>
                <ta-channel-list v-else :channels="channels" @select="viewChannel"></ta-channel-list>
            </template>
        </template>
    </ta-page>
</template>
<script>
    import TaPage from '../page/Page';
    import TaSkeleton from '../skeleton/Skeleton';
    import TaChannelList from '../twitch-channel/TwitchChannelList';
    import { Utils } from '../../services/Utils';

    export default {
        
        components: {
            TaPage,
            TaSkeleton,
            TaChannelList
        },

        data () {
            return {
                term: '',
                isLoading: false,
                channels: null
            }
        },
        
        methods: {
            onInput(term) {
                this.term = term;
            },
            searchCleared() {
                this.term = '';

                this.channels = [];
            },
            viewChannel(channel) {
                this.$store.commit('queryChannel', channel);
                this.$router.push({ path: 'detail' });
            }
        },

        watch: {
            term: async function(val) {
                if (!val) return;

                this.isLoading = true;

                this.channels = await this.$twitch.searchChannel(val);

                this.isLoading = false;
            }
        }
    }
</script>