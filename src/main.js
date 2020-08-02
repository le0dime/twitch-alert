import '@babel/polyfill'; // allow async / await functions
import '@ionic/core/css/ionic.bundle.css';
import 'vue-ionicons/ionicons.css';
import Vue from 'vue'
import Vuex from 'vuex';
import IonicVue from "@ionic/vue";
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios';

// setup ionic
Vue.use(IonicVue);
Vue.config.ignoredElements = [/^ion-/];
Vue.use(AllIosIcon);

// setup services
import { Twitch } from './services/Twitch';

Vue.prototype.$twitch = new Twitch();

// setup vuex
import store from './services/Store';

// bootstrap
import router from './router'

const app = new Vue({
    router,
    store,
    beforeCreate() { 
        this.$store.commit('initializeStore');
    },
  }).$mount('#app')