<template>
  <div>
    <van-cell title="事件名 kebab-case 写法" is-link @click="show = true" />

    <van-popup
      :show="show"
      round
      position="bottom"
      custom-style="height: 20%"
      @close="show = false"
      @click-overlay="onClickOverlay"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    />

    <van-cell title="事件名 PascalCase 写法" is-link @click="show1 = true" />

    <van-popup
      :show="show1"
      round
      position="bottom"
      custom-style="height: 20%"
      @close="show1 = false"
      @clickOverlay="onClickOverlay"
      @beforeEnter="onBeforeEnter"
      @enter="onEnter"
      @afterEnter="onAfterEnter"
      @beforeLeave="onBeforeLeave"
      @leave="onLeave"
      @afterLeave="onAfterLeave"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show1: false
    }
  },
  methods: {
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
}
</script>

<style>

</style>
