import '@babel/polyfill'; // allow async / await functions
import '@ionic/core/css/ionic.bundle.css';
import 'vue-ionicons/ionicons.css';
import Vue from 'vue'
import IonicVue from "@ionic/vue";
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios';

// setup ionic
Vue.use(IonicVue);
Vue.config.ignoredElements = [/^ion-/];
Vue.use(AllIosIcon);

// setup services
import { Twitch } from './services/Twitch';

Vue.prototype.$twitch = new Twitch();

// bootstrap
import router from './router'

const app = new Vue({
    router
  }).$mount('#app')