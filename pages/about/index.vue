<template>
  <main>
    <TitlePage label="About" />
  </main>
</template>

<script>
import TitlePage from '@/components/TitlePage'

export default {
  components: {
    TitlePage
  },

  head() {
    return {
      title:
        'About' +
        this.$config.app.titleSeparator +
        this.$config.app.titleTemplate,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$config.app.description
        }
      ]
    }
  }
}
</script>
