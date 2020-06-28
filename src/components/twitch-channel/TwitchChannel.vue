<template>
    <ta-page :color="'tertiary'">
        <template v-slot:title>Buscar Canal</template>
        <template v-slot:content>
            <template v-if="!currentChannel">
                <ion-searchbar 
                    animated 
                    debounce="500" 
                    placeholder="Ingresa el nombre del canal" 
                    :value="term" 
                    @ionChange="onInput($event.target.value)"
                    @ionClear="searchCleared($event)">
                </ion-searchbar>
                <ta-skeleton v-if="isLoading"></ta-skeleton>
                <ta-channel-list v-else :channels="channels" @select="saveChannel"></ta-channel-list>
            </template>
            <ta-channel-detail :channel="currentChannel" @close="currentChannel = null"></ta-channel-detail>
        </template>
    </ta-page>
</template>
<script>
    import TaPage from '../page/Page';
    import TaSkeleton from '../skeleton/Skeleton';
    import TaChannelList from '../twitch-channel/TwitchChannelList';
    import TaChannelDetail from '../twitch-channel/TwitchChannelDetail';
    import { Utils } from '../../services/Utils';

    export default {
        
        components: {
            TaPage,
            TaSkeleton,
            TaChannelList,
            TaChannelDetail
        },

        data () {
            return {
                term: '',
                isLoading: false,
                channels: null,
                currentChannel: null
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
            async saveChannel(channel) {
                this.currentChannel = channel;
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