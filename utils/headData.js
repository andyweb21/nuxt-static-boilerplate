import { app } from '../config/app'

export const canonical = (_path = []) => {
  return [
    {
      rel: 'canonical',
      href: app.host + _path
    }
  ]
}

export const facebook = (_path = []) => {
  return [
    {
      hid: 'og:title',
      property: 'og:title',
      content: app.title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: app.description
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: app.type
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: app.title
    },
    {
      hid: 'og:locale',
      property: 'og:locale',
      content: app.locale
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: app.host + _path
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: app.host + require('~/assets/images/social/fb.jpg')
    }
  ]
}

export const twitter = () => {
  return [
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: app.title
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: app.description
    },
    {
      hid: 'twitter:image:src',
      name: 'twitter:image:src',
      content: app.host + require('~/assets/images/social/tw.jpg')
    }
  ]
}

export const appLdJson = (_path = []) => {
  return [
    {
      hid: 'application/ld+json',
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org',
        '@type': app.type,
        name: app.name,
        url: app.host + _path,
        sameAs: [
          'https://www.facebook.com/',
          'https://www.instagram.com/',
          'https://www.twitter.com/'
        ]
      }
    }
  ]
}
