import { config } from '../../config'

export default {
  copyExistingFiles: false,

  netlifyToml: {
    build: {
      publish: 'dist',
      command: 'npm run generate'
    },

    headers: [
      {
        for: '/*',
        values: {
          'Referrer-Policy': 'origin',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block'
        }
      },
      {
        for: `${config.nuxt.publicPath}*`,
        values: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      {
        for: '/sw.js',
        values: {
          'Cache-Control': 'no-cache'
        }
      },
      {
        for: '/favicon.ico',
        values: {
          'Cache-Control': 'public, max-age=86400'
        }
      }
    ],

    redirects: [
      {
        from: `${config.app.public.baseUrl}/*`,
        to: `${config.app.public.url}/:splat`,
        status: 301
      }
    ]
  }
}
