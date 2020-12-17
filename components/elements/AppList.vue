<template>
  <ul v-if="listType">
    <slot />
  </ul>
  <ol v-else>
    <slot />
  </ol>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator: value => ['ul', 'ol'].includes(value),
      default: 'ul'
    }
  },
  computed: {
    listType() {
      return this.type === 'ul'
    }
  }
}
</script>
