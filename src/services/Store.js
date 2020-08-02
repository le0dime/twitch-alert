import Vue from 'vue'
import Vuex from 'vuex'
import {Storage} from './Storage';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        channel: { name: 'Channel name' },
        queryChannel: { name: 'Channel name' }
    },
    mutations: {
        initializeStore(state) {
            let channel = Storage.get('channel');

            if (channel) {
                state.channel = channel;
            }
        },
        twitchChannel(state, value) {
            Storage.set('channel', value);
            state.channel = value;
        },
        queryChannel(state, value) {
            state.queryChannel = value;
        }
    }
})