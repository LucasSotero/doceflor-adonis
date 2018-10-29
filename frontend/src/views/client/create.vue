<template>
  <div>
    <forms
      size="md12"
      :data="[
        {
          size: 'md12',
          content: [
            {
              type: 'v-text-field',
              name: 'name',
              validate: 'required',
              label: 'Nome',
              required: true
            },
            {
              type: 'v-text-field',
              name: 'observation',
              label: 'Observação'
            }
          ]
        }
      ]"
      :actions="[{color: 'info', event: 'submit', text: 'salvar', icon: 'send'}]"
      @submit="submit"
      >
    </forms>
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
