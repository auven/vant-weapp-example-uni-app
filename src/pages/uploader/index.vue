<template>
  <div>
    <demo-block title="基础用法" padding>
      <van-uploader
        name="1"
        :file-list="fileList1"
        @after-read="afterRead"
        @delete="onDelete"
        @click-preview="clickPreview"
      />
    </demo-block>

    <demo-block title="上传视频" padding>
      <van-uploader
        name="7"
        accept="video"
        :file-list="fileList7"
        @after-read="afterRead"
        @delete="onDelete"
      />
    </demo-block>

    <demo-block title="文件预览" padding>
      <van-uploader
        name="2"
        :file-list="fileList2"
        multiple
        @after-read="afterRead"
        @delete="onDelete"
        @click-preview="clickPreview"
      />
    </demo-block>

    <demo-block title="隐藏上传按钮" padding>
      <van-uploader
        name="2"
        :file-list="fileList2"
        multiple
        :show-upload="false"
        @after-read="afterRead"
        @delete="onDelete"
        @click-preview="clickPreview"
      />
    </demo-block>

    <demo-block title="上传状态" padding>
      <van-uploader
        name="8"
        :file-list="fileList8"
        multiple
        :max-count="2"
        @after-read="afterRead"
        @delete="onDelete"
        @click-preview="clickPreview"
      />
    </demo-block>

    <demo-block title="限制上传数量" padding>
      <van-uploader
        name="3"
        :file-list="fileList3"
        multiple
        :max-count="2"
        @after-read="afterRead"
        @delete="onDelete"
        @click-preview="clickPreview"
      />
    </demo-block>

    <demo-block title="自定义上传样式" padding>
      <van-uploader
        name="4"
        :file-list="fileList4"
        :max-count="2"
        @after-read="afterRead"
        @delete="onDelete"
        @click-preview="clickPreview"
        :use-slot="true"
      >
        <van-button icon="photo" type="primary">上传图片</van-button>
      </van-uploader>
    </demo-block>

    <demo-block title="上传前校验" padding>
      <van-uploader
        name="5"
        :file-list="fileList5"
        @before-read="beforeRead"
        @after-read="afterRead"
        @delete="onDelete"
        @click-preview="clickPreview"
        :use-before-read="true"
      />
    </demo-block>

    <demo-block title="云存储上传" padding>
      <van-uploader
        name="6"
        :file-list="fileList6"
        @before-read="beforeRead"
        @after-read="afterRead"
        @delete="onDelete"
        @click-preview="clickPreview"
        :use-before-read="true"
      />
      <view class="demo-margin-bottom">
        <van-button type="primary" @click="uploadToCloud">上传至云存储</van-button>
      </view>
    </demo-block>

  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList1: [],
      fileList2: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/tree.jpg' }
      ],
      fileList3: [{ url: 'https://img.yzcdn.cn/vant/sand.jpg' }],
      fileList4: [],
      fileList5: [],
      fileList6: [],
      cloudPath: [],
      fileList7: [],
      fileList8: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中'
        },
        {
          url: 'https://img.yzcdn.cn/vant/tree.jpg',
          status: 'failed',
          message: '上传失败'
        }
      ]
    }
  },
  methods: {
    beforeRead(event) {
      const { file, callback = () => {} } = event.detail;
      if (file.path.indexOf('jpeg') < 0) {
        wx.showToast({ title: '请选择jpg图片上传', icon: 'none' });
        callback(false);
        return;
      }
      callback(true);
    },

    afterRead(event) {
      const { file, name } = event.detail;
      const fileList = this[`fileList${name}`];
      this[`fileList${name}`] = fileList.concat(file)
    },

    oversize() {
      wx.showToast({ title: '文件超出大小限制', icon: 'none' });
    },

    onDelete(event) {
      const { index, name } = event.detail;
      const fileList = this[`fileList${name}`];
      fileList.splice(index, 1);
      this[`fileList${name}`] = fileList
    },

    clickPreview() {},

    uploadToCloud() {
      wx.cloud.init();
      const { fileList6: fileList = [] } = this;
      if (!fileList.length) {
        wx.showToast({ title: '请选择图片', icon: 'none' });
      } else {
        const uploadTasks = fileList.map((file, index) =>
          this.uploadFilePromise(`my-photo${index}.png`, file)
        );
        Promise.all(uploadTasks)
          .then(data => {
            wx.showToast({ title: '上传成功', icon: 'none' });
            const fileList = data.map(item => ({ url: item.fileID }));
            this.cloudPath = data
            this.fileList6 = fileList
          })
          .catch(e => {
            wx.showToast({ title: '上传失败', icon: 'none' });
            console.log(e);
          });
      }
    },

    uploadFilePromise(fileName, chooseResult) {
      return wx.cloud.uploadFile({
        cloudPath: fileName,
        filePath: chooseResult.path
      });
    }
  }
}
</script>

<style>
page {
  background-color: #fff;
}
</style>
