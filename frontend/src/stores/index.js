import Vue from 'vue'
import Vuex from 'vuex'
import client from './client'

window.axios = require('axios')
window.axios.defaults.baseURL = 'http://localhost:3333'
window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(Vuex)
export default {
  client: new Vuex.Store(client)
}
