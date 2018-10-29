export default {
  state: {
    clients: [],
    client: {}
  },
  mutations: {
    insertAll (state, data) {
      state.clients = data
    }
  },
  actions: {
    getAll (context) {
      window.axios.get('/clients').then(Response => {
        Response.data = Response.data.clients.map(element => ({ id: element.id, name: element.name, observetion: element.observetion }))
        context.commit('insertAll', Response.data)
      })
    },
    delete (context, data) {
      window.axios.delete('/clients/' + data).then(Response => {
        Response.data = Response.data.clients.map(element => ({ id: element.id, name: element.name, observetion: element.observetion }))
        context.commit('insertAll', Response.data)
      })
    }
  }
}
