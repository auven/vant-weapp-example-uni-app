<template>
  <div>
    <demo-block title="提示弹窗" padding>
      <van-button type="primary" class="demo-margin-right" @click="onClickAlert">
        提示弹窗
      </van-button>
      <van-button type="primary" @click="onClickAlert2">
        提示弹窗（无标题）
      </van-button>
    </demo-block>

    <demo-block title="确认弹窗" padding>
      <van-button type="primary" @click="onClickConfirm">
        确认弹窗
      </van-button>
    </demo-block>

    <demo-block title="异步关闭" padding>
      <van-button type="primary" @click="onClickAsyncClose">
        异步关闭
      </van-button>
    </demo-block>

    <demo-block title="组件调用" padding>
      <van-button type="primary" class="demo-margin-right" @click="showCustomDialog">
        组件调用
      </van-button>
      <van-dialog
        use-slot
        title="标题"
        :show="show"
        show-cancel-button
        @close="onClose"
        confirm-button-open-type="getUserInfo"
        @getuserinfo="getUserInfo"
      >
        <image
          class="demo-image"
          src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
        />
      </van-dialog>
    </demo-block>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import Dialog from '@vant/weapp/dist/dialog/dialog'
const message = '代码是写出来给人看的，附带能在机器上运行'
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showCustomDialog() {
      this.show = true
    },

    onClickAlert() {
      Dialog.alert({
        title: '标题',
        message
      });
    },

    getUserInfo(event) {
      console.log(event.detail);
    },

    onClickAlert2() {
      Dialog.alert({
        message
      });
    },

    onClickConfirm() {
      Dialog.confirm({
        title: '标题',
        message
      });
    },

    onClickAsyncClose() {
      Dialog.confirm({
        title: '标题',
        message,
        asyncClose: true
      })
        .then(() => {
          setTimeout(() => {
            Dialog.close();
          }, 1000);
        })
        .catch(() => {
          Dialog.close();
        });
    },

    onClose(event) {
      this.show = false
    }
  }
}
</script>

<style>
.demo-image {
  box-sizing: border-box;
  width: 100%;
  padding: 25px 20px 0;
}
</style>
