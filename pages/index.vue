<template>
  <main>
    <div class="max-w-screen-lg">
      <!-- Responsive example -->
      <app-picture
        aspect-ratio="40:21"
        url="~/assets/images/social/fb.jpg"
        url-md="~/assets/images/social/fb.jpg"
        url-xl="~/assets/images/social/fb.jpg"
      />
    </div>
  </main>
</template>

<script>
import AppPicture from '~/components/elements/AppPicture'

export default {
  components: { AppPicture },

  head() {
    return {
      title: this.$app.fullTitle,

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
