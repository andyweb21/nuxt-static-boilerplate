export default {
  beforeEnter(el) {
    this.$anime.set(el, {
      opacity: 0
    })
  },

  enter(el, done) {
    this.$anime({
      targets: el,
      opacity: [0, 1],
      duration: 300,
      easing: 'easeInOutSine',
      complete: done
    })
  },

  // afterEnter(el) {},

  // beforeLeave(el) {},

  leave(el, done) {
    this.$anime({
      targets: el,
      opacity: [1, 0],
      duration: 300,
      easing: 'easeInOutSine',
      complete: done
    })
  }

  // afterLeave(el) {}
}
