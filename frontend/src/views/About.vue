<template>
<v-container>
  <div>
    <v-card-title>
      <v-btn color="success" dark slot="activator" class="mb-2"  @click="newItem()">novo</v-btn>
        <v-spacer></v-spacer>
        <v-flex sm4>
          <v-text-field
            append-icon="search"
            label="Pesquise..."
            hide-details
            v-model="search"
          ></v-text-field>
        </v-flex>
    </v-card-title>
    <Table
      title="Nome"
      value="Table"
      :search="search"
      :headers="headers"
      :actions="[{
        icon: 'delete',
        color: 'red',
        event: 'teste'
      }]"
      :desserts="desserts"
      @teste="test"
    ></Table>
    <dialog2 title="excluir?" :content="contentDialog" :data="dataDialog" :dialog="dialog" @deletar="confirmDelete"></dialog2>
  </div>
  <forms></forms>
</v-container>
</template>

<script>
import Table from '@/components/utils/table'
import dialog2 from '@/components/utils/dialog'
import forms from '@/components/utils/forms'
export default {
  name: 'About',
  components: {
    Table,
    dialog2,
    forms
  },
  data () {
    return {
      search: '',
      dialog: false,
      contentDialog: 'Deseja Excluir Este Item?',
      dataDialog: undefined,
      headers: {
        observetion: 'Observação'
      }
    }
  },
  computed: {
    desserts () {
      return this.$store.client.state.clients
    }
  },
  mounted () {
    this.initialize()
  },
  methods: {
    initialize () {
      return this.$store.client.dispatch('getAll')
    },
    newItem () {
      this.$router.push({name: 'products.insert'})
    },
    viewTable (item) {
      this.$router.push({name: 'products.details', params: {id: item.id}})
    },
    editTable (item) {
      this.$router.push({name: 'products.edit', params: {id: item.id}})
    },
    deleteTable (item) {
      this.item = item
      this.dialog = true
    },
    confirmDelete (id) {
      console.log(id)
      this.$store.client.dispatch('delete', id).then(() => {
        this.dialog = false
      })
    },
    cancelDelete () {
      this.dialog = false
    },
    test (data) {
      console.log('chegou', data)
      const {id, name} = data
      this.dataDialog = id
      this.contentDialog = `Deseja escluir o cliente ${name} ?`
      this.dialog = true
    }
  }
}
</script>
