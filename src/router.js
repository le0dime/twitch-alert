import Vue from 'vue'
import VueRouter from 'vue-router';

import TaMain from './components/main/Main';
import TaTwitchChannel from './components/twitch-channel/TwitchChannel';

Vue.use(VueRouter);

const routes = [
  { path: '', redirect: '/main'},
  { path: '/main', name: 'main', component: TaMain },
  { path: '/search', name: 'search', component: TaTwitchChannel}
]

export default new VueRouter({ routes })