import Vue from 'vue'
import VueRouter from 'vue-router';

import TaMain from './components/main/Main';
import TaTwitchChannel from './components/twitch-channel/TwitchChannel';
import TaTwitchChannelDetail from './components/twitch-channel/TwitchChannelDetail';

Vue.use(VueRouter);

const routes = [
  { path: '', redirect: '/main'},
  { path: '/main', name: 'main', component: TaMain },
  { path: '/search', name: 'search', component: TaTwitchChannel},
  { path: '/detail', name: 'detail', component: TaTwitchChannelDetail}
]

export default new VueRouter({ routes })