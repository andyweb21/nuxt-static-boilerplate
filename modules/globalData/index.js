import { resolve } from 'path'

export default function globalData(moduleOptions) {
  const { nuxt, addPlugin } = this
  const options = {
    ...nuxt.options.globalData,
    ...moduleOptions
  }

  if (Object.keys(nuxt.options.globalData).length) {
    addPlugin({
      src: resolve(__dirname, 'plugin.js'),
      fileName: 'globalData.js',
      options
    })
  }
}
