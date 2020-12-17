<template>
  <svg
    :xmlns="xmlns"
    :viewBox="viewBox"
    :width="width"
    :height="height"
    :fill="fill"
    :stroke="stroke"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    xmlns: {
      type: String,
      default: 'http://www.w3.org/2000/svg'
    },
    viewBox: {
      type: Number,
      default: null
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    stroke: {
      type: String,
      default: 'none'
    }
  }
}
</script>
