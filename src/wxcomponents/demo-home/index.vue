<template>
<uni-shadow-root class="demo-home-index"><view class="demo-home">
  <view class="demo-home__title">
    <image mode="aspectFit" class="demo-home__image" src="https://img.yzcdn.cn/vant/logo.png"></image>
    <view class="demo-home__text">Vant Weapp</view>
  </view>
  <view class="demo-home__desc">
    轻量、可靠的小程序 UI 组件库
  </view>
  <view v-for="(group,index) in (list)" :key="group.index">
    <demo-home-nav :group="group"></demo-home-nav>
  </view>
</view></uni-shadow-root>
</template>

<script>
import DemoHomeNav from '../demo-home-nav/index.vue'
global['__wxVueOptions'] = {components:{'demo-home-nav': DemoHomeNav}}

global['__wxRoute'] = 'demo-home/index'
Component({
  properties: {
    list: Array
  }
});
export default global['__wxComponents']['demo-home/index']
</script>
<style platform="mp-weixin">
.demo-home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 46px 20px 20px;
  background: #fff;
}

.demo-home__title,
.demo-home__desc {
  padding-left: 16px;
  font-weight: normal;
  line-height: 1;
  user-select: none;
}

.demo-home__title {
  margin: 0 0 16px;
  font-size: 32px;
}

.demo-home__image,
.demo-home__text {
  display: inline-block;
  vertical-align: middle;
}

.demo-home__image {
  width: 32px;
  height: 32px;
}

.demo-home__text {
  margin-left: 16px;
  font-weight: 500;
}

.demo-home__title .demo-home--small {
  font-size: 24px;
}

.demo-home__desc {
  margin: 0 0 40px;
  color: rgba(69, 90, 100, 0.6);
  font-size: 14px;
}
</style>