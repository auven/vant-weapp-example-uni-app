<template>
  <div>
    <van-cell center title="基础用法">
      <van-stepper :value="1" />
    </van-cell>

    <van-cell center title="步长设置">
      <van-stepper :value="1" step="2" />
    </van-cell>

    <van-cell center title="限制输入范围">
      <van-stepper :value="1" min="5" max="8" />
    </van-cell>

    <van-cell center title="限制输入整数">
      <van-stepper :value="1" integer />
    </van-cell>

    <van-cell center title="禁用状态">
      <van-stepper :value="1" disabled />
    </van-cell>

    <van-cell center title="禁用长按">
      <van-stepper :value="1" :long-press="false" />
    </van-cell>

    <van-cell center title="固定小数位数">
      <van-stepper :value="1" step="0.2" :decimal-length="1" />
    </van-cell>

    <van-cell center title="异步变更">
      <van-stepper
        :value="value"
        async-change
        @change="onChange"
      />
    </van-cell>

    <van-cell center title="自定义大小">
      <van-stepper :value="1" input-width="40px" button-size="32px" />
    </van-cell>

    <van-toast id="van-toast" />

  </div>
</template>

<script>
import Toast from '@vant/weapp/dist/toast/toast'
export default {
  data() {
    return {
      value: 1
    }
  },
  methods: {
    onChange(event) {
      Toast.loading({
        forbidClick: true
      });

      setTimeout(() => {
        Toast.clear();
        this.value = event.detail
      }, 500);
    }
  }
}
</script>

<style>
page {
  background-color: #fff;
}
</style>
