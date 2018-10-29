<template>
  <v-layout row justify-center>
    <v-btn color="primary" dark @click.stop.prevent="dialog2 = true">
      Open Dialog
    </v-btn>
    <v-dialog v-model="dialog" max-width="300">
      <v-card>
        <v-card-title class="headline error white--text">Excluir</v-card-title>
        <v-card-text class="text-md-center">
          {{content}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat="flat" @click="dialog2 = false">
            Voltar
          </v-btn>
          <v-btn color="error" flat="flat" @click.stop="deleteConfirm()">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  props: ['content', 'dialog', 'data'],
  data () {
    return {
      dialog2: this.dialog
    }
  },
  methods: {
    deleteConfirm () {
      this.$emit('deletar', this.data)
    }
  }
}
</script>
