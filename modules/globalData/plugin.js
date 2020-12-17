const options = <%= serialize(options) %>

export default (context, inject) => {
  Object.keys(options).forEach(key => {
    inject(key, options[key])
  })
}
