<template>
  <div>
    <demo-block title="基本用法" padding>
      <van-radio-group
        :value="radio1"
        data-key="radio1"
        @change="onChange"
      >
        <van-radio name="1" custom-class="demo-radio">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block title="禁用状态" padding>
      <van-radio-group
        disabled
        :value="radio2"
        data-key="radio2"
        @change="onChange"
      >
        <van-radio name="1" custom-class="demo-radio">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block title="自定义形状" padding>
      <van-radio-group
        :value="radioShape"
        data-key="radioShape"
        @change="onChange"
      >
        <van-radio name="1" shape="square" custom-class="demo-radio">单选框</van-radio>
        <van-radio name="2" shape="square">单选框</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block title="自定义颜色" padding>
      <van-radio-group
        :value="radio3"
        data-key="radio3"
        @change="onChange"
      >
        <van-radio name="1" custom-class="demo-radio" checked-color="#07c160">单选框</van-radio>
        <van-radio name="2" checked-color="#07c160">单选框</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block title="自定义大小" padding>
      <van-radio-group
        :value="radioSize"
        data-key="radioSize"
        @change="onChange"
      >
        <van-radio name="1" icon-size="24px" custom-class="demo-radio">单选框</van-radio>
        <van-radio name="2" icon-size="24px">单选框</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block title="自定义图标" padding>
      <van-radio-group
        :value="radio4"
        data-key="radio4"
        @change="onChange"
      >
        <van-radio use-icon-slot name="1">
          自定义图标
          <image
            slot="icon"
            :src="radio4 === '1' ? icon.active : icon.normal"
            class="icon"
            mode="widthFix"
          />
        </van-radio>
        <van-radio use-icon-slot name="2">
          自定义图标
          <image
            slot="icon"
            :src="radio4 === '2' ? icon.active : icon.normal"
            class="icon"
            mode="widthFix"
          />
        </van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block title="禁用文本点击" padding>
      <van-radio-group
        :value="radioLabel"
        data-key="radioLabel"
        @change="onChange"
      >
        <van-radio label-disabled name="1" custom-class="demo-radio">单选框 1</van-radio>
        <van-radio label-disabled name="2">单选框 2</van-radio>
      </van-radio-group>
    </demo-block>

    <demo-block title="与 Cell 组件一起使用">
      <van-radio-group :value="radio5">
        <van-cell-group>
          <van-cell
            title="单选框 1"
            clickable
            data-name="1"
            @click="onClick"
          >
            <van-radio slot="right-icon" name="1" />
          </van-cell>
          <van-cell
            title="单选框 2"
            clickable
            data-name="2"
            @click="onClick"
          >
            <van-radio slot="right-icon" name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1',
      radio5: '1',
      radioSize: '1',
      radioLabel: '1',
      radioShape: '1',
      icon: {
        normal:
          'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active:
          'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    }
  },
  methods: {
    onChange(event) {
      const { key } = event.currentTarget.dataset;
      this[key] = event.detail
    },

    onClick(event) {
      const { name } = event.currentTarget.dataset
      this.radio5 = name
    }
  }
}
</script>

<style>
.demo-radio {
  margin-bottom: 10px;
}

.icon {
  width: 20px;
}
</style>
