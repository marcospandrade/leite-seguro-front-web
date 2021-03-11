import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './icons'
// import '@/styles/index.scss' //global css

Vue.config.productionTip = false

window._Vue = new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
