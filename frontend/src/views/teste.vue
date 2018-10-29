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
              name: 'email',
              validate: 'required|email',
              label: 'E-mail',
              required: true
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
