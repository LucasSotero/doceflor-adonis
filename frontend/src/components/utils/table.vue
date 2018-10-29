<template>
  <v-data-table
    :headers="header"
    :items="desserts"
    hide-actions
    class="elevation-1"
    :search="search"
  >
    <template slot="items" slot-scope="props">
      <td v-for="i in items" :key="i.value">
        {{props.item[i.value]}}
      </td>
       <td v-if="actions">
        <v-btn icon class="mx-0" v-for="(action, i) in actions" :key="i" @click="actionA(action.event, props.item)">
          <v-icon :color="action.color">
            {{action.icon}}
          </v-icon>
        </v-btn>
        </td>
      </template>
      <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        Sorry, nothing to display here :(
      </v-alert>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'Table',
  props: ['title', 'headers', 'actions', 'desserts', 'value', 'search'],
  data () {
    return {
      header: [],
      items: []
    }
  },
  methods: {
    actionA (key, data) {
      console.log('saiu', data)
      this.$emit(key, data)
    },
    headersNormalize (header) {
      let a = Object.keys(header)
      a = a.map(item => ({text: header[item], value: item}))
      a.unshift({
        text: this.title,
        align: 'left',
        sortable: true,
        value: 'name'
      })
      return a
    }
  },
  created () {
    this.header = this.headersNormalize(this.headers)
    this.items = this.headersNormalize(this.headers)
    if (this.actions) {
      this.header.push({text: 'Ações', value: 'name', sortable: false})
    }
  }
}
</script>
