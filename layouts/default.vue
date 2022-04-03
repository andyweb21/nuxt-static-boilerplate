<template>
  <div id="__default">
    <NavigationMain />
    <Nuxt />
  </div>
</template>

<script>
import NavigationMain from '@/components/NavigationMain'
import {
  useCanonical,
  useFacebook,
  useTwitter,
  useAppLdJson
} from '@/utils/useHeadData'

export default {
  components: {
    NavigationMain
  },

  head() {
    const { path } = this.$route
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`

    return {
      meta: [...useFacebook(pathWithSlash), ...useTwitter()],
      link: [...useCanonical(pathWithSlash)],
      script: [...useAppLdJson(pathWithSlash)]
    }
  }
}
</script>
