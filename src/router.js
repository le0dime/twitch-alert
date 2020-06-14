import Vue from 'vue'
import VueRouter from 'vue-router';

import TaMain from './components/main/Main';
import TaTwitchAccount from './components/twitch-account/TwitchAccount';

Vue.use(VueRouter);

const routes = [
  { path: '', redirect: '/main'},
  { path: '/main', component: TaMain },
  { path: '/search', component: TaTwitchAccount}
]

export default new VueRouter({ routes })