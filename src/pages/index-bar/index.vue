<template>
  <van-tabs
    :active="activeTab"
    @change="onChange"
  >
    <van-tab title="基础用法">
      <van-index-bar
        v-if="activeTab === 0"
        :scroll-top="scrollTop"
      >
        <view
          v-for="item in indexList"
          :key="item"
        >
          <van-index-anchor :index="item" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
        </view>
      </van-index-bar>
    </van-tab>

    <van-tab title="自定义索引列表">
      <van-index-bar
        v-if="activeTab === 1"
        :index-list="customIndexList"
        :scroll-top="scrollTop"
      >
        <view
          v-for="(item, index) in customIndexList"
          :key="index"
        >
          <van-index-anchor
            use-slot
            :index="item"
          >
            <text>标题{{ item }}</text>
          </van-index-anchor>
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
        </view>
      </van-index-bar>
    </van-tab>
  </van-tabs>
</template>

<script>
const indexList = [];
const charCodeOfA = 'A'.charCodeAt(0);
for (let i = 0; i < 26; i++) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}
export default {
  data() {
    return {
      activeTab: 0,
      indexList,
      customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10],
      scrollTop: 0,
    }
  },
  onPageScroll(event) {
    // 这里是 vant 的bug 等待修复
    this.scrollTop = event.scrollTop
  },
  methods: {
    onChange(event) {
      this.activeTab = event.detail.name
    }
  }
}
</script>

<style>

</style>
