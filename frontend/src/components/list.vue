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
            single-line
            hide-details
            v-model="search"
          ></v-text-field>
        </v-flex>
    </v-card-title>
    <Table
      title="Produto"
      value="Table"
      :search="search"
      :headers="headers"
      :actions="[{
        icon: 'delete',
        color: 'red',
        event: 'teste'
      }]"
      :desserts="desserts"
    ></Table>
  </div>
</v-container>
</template>

<script>
import Table from '@/components/utils/Table'
export default {
  name: 'About',
  components: {
    Table
  },
  data () {
    return {
      search: '',
      headers: {
        calories: 'Calories',
        fat: 'Fat (g)',
        carbs: 'Carbs (g)',
        protein: 'Protein (g)',
        iron: 'Iron (%)'
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
    confirmDelete () {
      this.$store.product.dispatch('remove', this.item.id).then(() => {
        this.dialog = false
      })
    },
    cancelDelete () {
      this.dialog = false
    }
  }
}
</script>
