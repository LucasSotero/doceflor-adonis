
<template>
  <div id="app">
    <v-app id="inspire">
      <v-form ref="form">
        <v-card-title primary-title>
          <div class="headline">Cadastrar Cliente</div>
        </v-card-title>
        <v-container grid-list-xl fluid>
          <v-layout wrap>
            <v-flex v-for="index in data" :key="index.name" v-bind="{[index.size]: true}">
              <div :type="values.typeComponent" :is="values.type" v-for="values in index.content" :key="values.name"
                v-validate="values.validate"
                v-model="result[values.name]"
                :error-messages="errors.collect(values.name)"
                :label="values.label"
                :data-vv-name="values.name"
              ></div>
            </v-flex>
            <v-btn flat v-for="(action, i) in actions" :key="i"
              :disabled="!isValid"
              :color="action.color"
              type="submit"
              @click.native.prevent="actionEvent(action.event)"
            >
              {{action.text}}
              <v-icon v-if="action.icon" right dark>{{action.icon}}</v-icon>
            </v-btn>
          </v-layout>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script>
export default {
  props: ['data', 'size', 'actions'],
  $_veeValidate: {
    validator: 'new'
  },
  data: () => ({
    result: {},
    isValid: false
  }),
  mounted () {
    this.$validator.localize('pt')
  },
  watch: {
  },
  methods: {
    actionEvent (event) {
      console.log(this.isValid)
      this.$validator.validateAll(this.result).then(result => {
        if (result) {
          this.$emit(event, this.result)
        }
      })
    },
    clear (object) {
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          switch (typeof (object[key])) {
            case 'number':
              object[key] = null
              break
            case 'string':
              object[key] = ''
              break
            case 'boolean':
              object[key] = null
              break
            case 'object':
              object[key] = this.clear(object[key])
              break
            default:
              object[key] = undefined
              break
          }
        }
      }
      this.$validator.reset()
      return object
    }
  }
}
</script>
