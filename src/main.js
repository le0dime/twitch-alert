import Vue from 'vue'
import router from './router'

Vue.config.ignoredElements = [/^ion-/];

const app = new Vue({
    router
  }).$mount('#app')