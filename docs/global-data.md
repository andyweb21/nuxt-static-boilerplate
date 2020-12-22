# Nuxt Global Data

## Global Data

`Global Data` is designed to help you manage global data within the Nuxt project. The module allows you to easily [inject data](https://nuxtjs.org/docs/2.x/directory-structure/plugins#inject-in-root--context) and provides a way to share values across the application without having to manually import data into each file. Basically, it's a simple alternative to the Nuxt `runtimeConfig` option.

### Module

`globalData` is enabled by default.

Settings → `nuxt/modules/globalData.js`

## Example

```js
// nuxt/modules/globalData.js

{
  project: {
    name: 'New Project',
    url: 'https://www.website.com',
    title: 'Awesome Nuxt Project'
  },
  breakpoints: {
    sm: '640px',
    md: '768px'
  },
  // ...
}
```

> The `$` will be prepended automatically to the **globalData** `key`.

Now data can be accessed by using `this.$project` and `this.$breakpoints` etc.

```html
<!-- index.vue -->

<template>
  <div>
    <p>{{ this.$breakpoints.md }}</p>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: this.$project.title
      }
    }
  }
</script>
```

### Secret keys and private data

⚠️ In case you want to store some private data that shouldn't be exposed on the frontend, it's recommended to use the Nuxt [privateRuntimeConfig](https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config#privateruntimeconfig) option.

---

[← Table of Contents](README.md)
