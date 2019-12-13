import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './App'
import './styles.scss';

import storeData from './store'
import routes from './routes';

Vue
  .use(Vuex)
  .use(VueRouter)

export const store =  new Vuex.Store(storeData);
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')