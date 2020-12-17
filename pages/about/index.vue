<template>
  <app-page>
    <main>
      <div class="max-w-screen-md">
        <!-- Non-responsive example -->
        <app-image aspect-ratio="40:21" url="~/assets/images/social/fb.jpg" />
      </div>
    </main>
  </app-page>
</template>

<script>
export default {
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
