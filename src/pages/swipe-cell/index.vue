<template>
  <div>
    <demo-block title="基础用法">
      <van-swipe-cell :right-width="65" :left-width="65">
        <view slot="left" class="van-swipe-cell__left">选择</view>
        <van-cell-group>
          <van-cell title="单元格" value="内容" />
        </van-cell-group>
        <view slot="right" class="van-swipe-cell__right">删除</view>
      </van-swipe-cell>
    </demo-block>

    <demo-block title="异步关闭">
      <van-swipe-cell id="swipe-cell" :right-width="65" :left-width="65" async-close @close="onClose">
        <view slot="left" class="van-swipe-cell__left">选择</view>
        <van-cell-group>
          <van-cell title="单元格" value="内容" />
        </van-cell-group>
        <view slot="right" class="van-swipe-cell__right">删除</view>
      </van-swipe-cell>
    </demo-block>

    <demo-block title="主动打开">
      <van-swipe-cell id="swipe-cell2" :right-width="65" :left-width="65" name="示例" @open="onOpen" >
        <view slot="left" class="van-swipe-cell__left">选择</view>
        <van-cell-group>
          <van-cell title="单元格" value="内容" />
        </van-cell-group>
        <view slot="right" class="van-swipe-cell__right">删除</view>
      </van-swipe-cell>
    </demo-block>

    <van-dialog id="van-dialog" />
    <van-notify id="van-notify" />

  </div>
</template>

<script>
import Dialog from '@vant/weapp/dist/dialog/dialog';
import Notify from '@vant/weapp/dist/notify/notify';
export default {
  methods: {
    onClose(event) {
      const { position, instance } = event.detail;
      switch (position) {
        case 'left':
        case 'cell':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    },
    onOpen(event) {
      const { position, name } = event.detail;
      switch (position) {
        case 'left':
          Notify({
            type: 'primary',
            message: `${name}${position}部分展示open事件被触发`
          });
          break;
        case 'right':
          Notify({
            type: 'primary',
            message: `${name}${position}部分展示open事件被触发`
          });
          break;
      }
    }
  }
}
</script>

<style>
.demo-swipe-cell {
  user-select: none;
}

.van-swipe-cell__left,
.van-swipe-cell__right {
  display: inline-block;
  width: 65px;
  height: 44px;
  font-size: 15px;
  line-height: 44px;
  color: #fff;
  text-align: center;
  background-color: #ee0a24;
}
</style>
