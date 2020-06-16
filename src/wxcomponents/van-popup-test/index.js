Component({
  data: {
    show: false,
    show1: false
  },
  methods: {
    showPopup() {
      this.setData({
        show: true
      })
    },
    onClose() {
      this.setData({
        show: false
      })
    },
    showPopup1() {
      this.setData({
        show1: true
      })
    },
    onClose1() {
      this.setData({
        show1: false
      })
    },
    onClickOverlay() {
      console.log('click-overlay')
    },
    onBeforeEnter() {
      console.log('before-enter')
    },
    onEnter() {
      console.log('enter')
    },
    onAfterEnter() {
      console.log('after-enter')
    },
    onBeforeLeave() {
      console.log('before-leave')
    },
    onLeave() {
      console.log('leave')
    },
    onAfterLeave() {
      console.log('after-leave')
    }
  }
})
