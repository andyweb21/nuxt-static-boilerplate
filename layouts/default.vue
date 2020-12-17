<template>
  <div id="__default">
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import { canonical, facebook, twitter, appLdJson } from '~/utils/headData'

export default {
  head() {
    const { path } = this.$route
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`

    return {
      meta: [...facebook(pathWithSlash), ...twitter()],

      link: [...canonical(pathWithSlash)],

      script: [...appLdJson(pathWithSlash)]
    }
  }
}
</script>
