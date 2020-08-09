import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import infiniteScroll from 'vue-infinite-scroll';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  directives: {infiniteScroll},
  render: h => h(App)
}).$mount('#app')
