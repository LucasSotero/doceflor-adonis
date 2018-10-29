<template>
  <div>
    <forms
      size="md12"
      :data="[
        {
          size: 'md12',
          content: [
            {
              typeComponent: 'text',
              type: 'v-text-field',
              name: 'name',
              validate: 'required',
              label: 'Nome',
              required: true
            }
          ]
        },
        {
          size: 'md6',
          content: [
            {
              typeComponent: 'text',
              type: 'v-text-field',
              name: 'barCode',
              validate: 'required',
              label: 'Código de Barras',
              required: true
            }
          ]
        },
        {
          size: 'md4'
        },
        {
          size: 'md2',
          content:[
            {
              typeComponent: 'number',
              type: 'v-text-field',
              name: 'value',
              validade: 'numeric',
              label: 'Valor',
              required: true
            }
          ]
        }
      ]"
      :actions="[{color: 'info', event: 'submit', text: 'salvar', icon: 'send'}]"
      @submit="submit"
    ></forms>
  </div>
</template>

<script>
import forms from '@/components/utils/forms'
export default {
  components: {
    forms
  },
  methods: {
    submit (text) {
      console.log('log', text)
    }
  }
}
</script>
