<template>
  <div>
    <demo-block title="基础用法" padding>
      <van-row>
        <van-col span="8" custom-class="dark">span: 8</van-col>
        <van-col span="8" custom-class="light">span: 8</van-col>
        <van-col span="8" custom-class="dark">span: 8</van-col>
      </van-row>

      <van-row>
        <van-col span="4" custom-class="dark">span: 4</van-col>
        <van-col span="10" offset="4" custom-class="light">offset: 4, span: 10</van-col>
      </van-row>

      <van-row>
        <van-col offset="12" span="12" custom-class="dark">offset: 12, span: 12</van-col>
      </van-row>
    </demo-block>

    <demo-block title="在列元素之间增加间距" padding>
      <van-row gutter="20">
        <van-col span="8" custom-class="dark">span: 8</van-col>
        <van-col span="8" custom-class="light">span: 8</van-col>
        <van-col span="8" custom-class="dark">span: 8</van-col>
      </van-row>
    </demo-block>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.dark,
.light {
  color: #fff;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 10px;
  background-clip: content-box;
}

.dark {
  background-color: #39a9ed;
}

.light {
  background-color: #66c6f2;
}
</style>
