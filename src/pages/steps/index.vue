<template>
  <div>
    <demo-block title="基础用法">
      <van-steps
        :steps="steps"
        :active="active"
        custom-class="demo-margin-bottom"
      />

      <van-button custom-class="demo-margin-left" @click="nextStep">下一步</van-button>
    </demo-block>

    <demo-block title="自定义样式">
      <van-steps
        :steps="steps"
        :active="active"
        active-icon="success"
        active-color="#38f"
        inactive-icon="arrow"
      />
    </demo-block>

    <demo-block title="竖向步骤条">
      <van-steps
        :steps="steps"
        :active="active"
        direction="vertical"
        active-color="#ee0a24"
      />
    </demo-block>

    <demo-block title="click事件">
      <van-steps
        :steps="steps"
        @click-step="onClick"
        :active="active"
        custom-class="demo-margin-bottom"
      />

      <van-button custom-class="demo-margin-left" @click="nextStep">下一步</van-button>
    </demo-block>

    <van-toast id="van-toast" />

  </div>
</template>

<script>
import Toast from '@vant/weapp/dist/toast/toast'
export default {
  data() {
    return {
      active: 1,
      steps: [
        {
          text: '步骤一',
          desc: '描述信息'
        },
        {
          text: '步骤二',
          desc: '描述信息'
        },
        {
          text: '步骤三',
          desc: '描述信息'
        },
        {
          text: '步骤四',
          desc: '描述信息'
        }
      ]
    }
  },
  methods: {
    nextStep() {
      this.active = ++this.active % 4
    },

    onClick(event) {
      Toast(`Index: ${event.detail}`);
    }
  }
}
</script>

<style>

</style>
