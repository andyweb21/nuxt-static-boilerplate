<template>
  <main>
    <div class="max-w-screen-md">
      <!-- Non-responsive example -->
      <app-img aspect-ratio="40:21" url="~/assets/images/social/fb.jpg" />
    </div>
  </main>
</template>

<script>
import AppImg from '~/components/elements/AppPicture'

export default {
  components: { AppImg },

  head() {
    return {
      title: 'About' + this.$app.titleSeparator + this.$app.titleTemplate,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$app.description
        }
      ]
    }
  }
}
</script>
