<template>
  <div>
    <demo-block title="页面里直接使用">
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
        @click-overlay="onClickOverlay"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
        @after-leave="onAfterLeave"
      />
    </demo-block>

    <demo-block title="封装在 vue 组件里">
      <test-van-popup />
    </demo-block>

    <demo-block title="微信自定义组件里">
      <van-popup-test />
    </demo-block>

    <demo-block title="综上发现 uni-app 中，嵌套微信自定义组件里面，使用 kebab-case 写法写的事件名没办法被触发，所以这也导致了 van-dropdown-menu 出现了 bug 。" />
  </div>
</template>

<script>
import TestVanPopup from '@/components/test-van-popup'
export default {
  components: {
    TestVanPopup
  },
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
