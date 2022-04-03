<template>
  <div
    class="absolute top-0 left-0 flex flex-col items-center justify-center w-screen min-h-full text-black"
  >
    <h1 v-if="error.statusCode === 404" class="font-600 text-xl uppercase">
      Page not found
    </h1>
    <h1 v-else class="font-600 text-xl uppercase">
      <span>An error occurred</span>
    </h1>
    <NuxtLink :to="{ name: 'index' }">BACK TO HOME</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'errorLayout',

  props: {
    error: {
      type: Object,
      required: true
    }
  },

  head() {
    return {
      htmlAttrs: {
        class: 'overflow-hidden'
      },

      title: 'Error' + this.$config.app.titleSeparator + '404 Not Found'
    }
  }
}
</script>
