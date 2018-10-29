import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './routers'
import store from './stores'
import messages from 'vee-validate/dist/locale/pt_BR'
import VeeValidate from 'vee-validate'
import AsyncComputed from 'vue-async-computed'
import './registerServiceWorker'

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt: messages
  }
})

Vue.use(AsyncComputed)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
