<template>
  <h1 class="font-600 text-3xl">{{ label }}</h1>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>
