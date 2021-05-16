import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'

import './icons'
import '@/assets/styles/index.scss' //global css
import '@/plugins/jquery/jquery.min.js'
import '@/plugins/aos-animation/aos.js'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(VueMask);

Vue.config.productionTip = false

window._Vue = new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
