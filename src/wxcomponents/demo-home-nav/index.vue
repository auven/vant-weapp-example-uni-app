<template>
<uni-shadow-root class="demo-home-nav-index"><view class="demo-home-nav">
  <view class="demo-home-nav__title">{{ group.groupName }}</view>
  <view class="demo-home-nav__group">
    <view v-for="(item,index) in (group.list)" :key="item.title" class="demo-home-nav__block" :data-url="'/pages'+(item.path)+'/index'" @click="onClick">
      {{ item.title }}
      <van-icon name="arrow" custom-class="demo-home-nav__icon"></van-icon>
    </view>
  </view>
</view></uni-shadow-root>
</template>

<script>
import VanIcon from '/wxcomponents/@vant/weapp/icon/index.vue'
global['__wxVueOptions'] = {components:{'van-icon': VanIcon}}

global['__wxRoute'] = 'demo-home-nav/index'
Component({
  properties: {
    group: Object
  },

  methods: {
    onClick(event) {
      wx.navigateTo({
        url: event.target.dataset.url
      });
    }
  }
});
export default global['__wxComponents']['demo-home-nav/index']
</script>
<style platform="mp-weixin">
.demo-home-nav__title {
  margin: 24px 0 8px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-size: 14px;
}

.demo-home-nav__block {
  position: relative;
  display: flex;
  margin: 0 0 12px;
  padding-left: 20px;
  color: #323233;
  font-weight: 500;
  font-size: 14px;
  line-height: 40px;
  background: #f7f8fa;
  border-radius: 99px;
  transition: background 0.3s;
}

.demo-home-nav__block:hover {
  background: darken(#f7f8fa, 3%);
}

.demo-home-nav__block:active {
  background: darken(#f7f8fa, 6%);
}

.demo-home-nav__icon {
  position: absolute !important;
  top: 50%;
  right: 16px;
  width: 16px;
  height: 16px;
  margin-top: -8px;
  color: rgb(182, 195, 210);
  font-weight: 900 !important;
}
</style>