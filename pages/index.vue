<template>
  <main>
    <TitlePage label="Home" />
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
        this.$config.app.title +
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
