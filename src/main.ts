import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import { createPinia, PiniaPlugin } from 'pinia'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import TreeView from '@grapoza/vue-tree'

import './global.scss'

import App from './app.vue'
import router from './router'


Vue.config.productionTip = false

Vue.use(VueCompositionAPI);
Vue.use(PiniaPlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("tree-view", TreeView);

const pinia = createPinia();

new Vue({
  router,
  pinia,
  render: h => h(App)
}).$mount('#app');
