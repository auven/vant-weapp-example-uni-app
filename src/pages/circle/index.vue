<template>
  <div>
    <demo-block title="基础用法">
      <van-circle type="2d" :value="value" :text="`${value}%`" />
    </demo-block>

    <demo-block title="样式定制">
      <van-circle :value="value" :stroke-width="6" text="宽度定制" />
      <van-circle :value="value" layer-color="#eee" color="#ee0a24" text="颜色定制" />
      <van-circle :value="value" :color="gradientColor" text="渐变色" />
      <van-circle :value="value" color="#07c160" :clockwise="false" text="逆时针" />
      <van-circle :value="value" size="120" text="大小定制" />
    </demo-block>

    <van-button type="primary" size="small" data-step="10" @tap="run">增加</van-button>
    <van-button type="danger" size="small" data-step="-10" @tap="run">减少</van-button>

  </div>
</template>

<script>
const format = rate => Math.min(Math.max(rate, 0), 100);
export default {
  data() {
    return {
      value: 25,
      gradientColor: {
        '0%': '#ffd01e',
        '100%': '#ee0a24'
      }
    }
  },
  methods: {
    run(e) {
      const step = parseFloat(e.currentTarget.dataset.step);
      this.value = format((this.value += step))
    }
  }
}
</script>

<style>
.van-circle {
  margin: 5px 10px 20px;
}
.van-button{
  margin-left: 10px;
}
</style>
