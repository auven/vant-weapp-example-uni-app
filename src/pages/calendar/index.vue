<template>
  <div>
    <demo-block title="基础用法">
      <van-cell
        is-link
        title="选择单个日期"
        data-type="single"
        data-id="selectSingle"
        :value="computed.formatFullDate(date.selectSingle)"
        @click="show"
      />

      <van-cell
        is-link
        title="选择多个日期"
        data-type="multiple"
        data-id="selectMultiple"
        :value="computed.formatMultiple(date.selectMultiple)"
        @click="show"
      />

      <van-cell
        is-link
        title="选择日期区间"
        data-type="range"
        data-id="selectRange"
        :value="computed.formatRange(date.selectRange)"
        @click="show"
      />
    </demo-block>

    <demo-block title="快捷选择">
      <van-cell
        is-link
        title="选择单个日期"
        data-type="single"
        data-id="quickSelect1"
        :value="computed.formatFullDate(date.quickSelect1)"
        @click="show"
      />

      <van-cell
        is-link
        title="选择日期区间"
        data-type="range"
        data-id="quickSelect2"
        :value="computed.formatRange(date.quickSelect2)"
        @click="show"
      />
    </demo-block>

    <demo-block title="自定义日历">
      <van-cell
        is-link
        title="自定义颜色"
        data-type="range"
        data-id="customColor"
        :value="computed.formatRange(date.customColor)"
        @click="show"
      />

      <van-cell
        is-link
        title="自定义日期范围"
        data-type="single"
        data-id="customRange"
        :value="computed.formatFullDate(date.customRange)"
        @click="show"
      />

      <van-cell
        is-link
        title="自定义按钮文字"
        data-type="range"
        data-id="customConfirm"
        :value="computed.formatRange(date.customConfirm)"
        @click="show"
      />

      <van-cell
        is-link
        title="自定义日期文案"
        data-type="range"
        data-id="customDayText"
        :value="computed.formatRange(date.customDayText)"
        @click="show"
      />

      <van-cell
        is-link
        title="自定义弹出位置"
        data-type="single"
        data-id="customPosition"
        :value="computed.formatFullDate(date.customPosition)"
        @click="show"
      />

      <van-cell
        is-link
        title="日期区间最大范围"
        data-type="range"
        data-id="maxRange"
        :value="computed.formatRange(date.maxRange)"
        @click="show"
      />
    </demo-block>

    <demo-block title="平铺展示">
      <van-calendar
        title="日历"
        :poppable="false"
        :show-confirm="false"
        :min-date="tiledMinDate"
        :max-date="tiledMaxDate"
        class="tiled-calendar"
      />
    </demo-block>

    <van-calendar
      :show="showCalendar"
      :type="type"
      :color="color"
      :round="round"
      :position="position"
      :min-date="minDate"
      :max-date="maxDate"
      :max-range="maxRange"
      :formatter="formatter"
      :show-confirm="showConfirm"
      :confirm-text="confirmText"
      :confirm-disabled-text="confirmDisabledText"
      @confirm="onConfirm"
      @select="onSelect"
      @unselect="onUnselect"
      @open="onOpen"
      @opened="onOpened"
      @close="onClose"
      @closed="onClosed"
    >
    </van-calendar>

  </div>
</template>

<script module="computed" lang="wxs" src="./index.wxs"></script>
<script>
export default {
  data() {
    return {
      id: '',
      date: {
        maxRange: [],
        selectSingle: null,
        selectRange: [],
        selectMultiple: [],
        quickSelect1: null,
        quickSelect2: [],
        customColor: [],
        customConfirm: [],
        customRange: null,
        customDayText: [],
        customPosition: null
      },
      type: 'single',
      round: true,
      color: undefined,
      minDate: Date.now(),
      maxDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 6,
        new Date().getDate()
      ).getTime(),
      maxRange: undefined,
      position: undefined,
      formatter: undefined,
      showConfirm: false,
      showCalendar: false,
      tiledMinDate: new Date(2012, 0, 10).getTime(),
      tiledMaxDate: new Date(2012, 2, 20).getTime(),
      confirmText: undefined,
      confirmDisabledText: undefined
    }
  },
  methods: {
    onConfirm(event) {
      console.log(event);
      this.showCalendar = false

      this.date[this.id] = event.detail
    },

    onSelect(event) {
      console.log(event);
    },

    onUnselect(event) {
      console.log(event);
    },

    onClose() {
      this.showCalendar = false
    },

    onOpen() {
      console.log('open');
    },

    onOpened() {
      console.log('opened');
    },

    onClosed() {
      console.log('closed');
    },

    resetSettings() {
      this.round = true
      this.color = null
      this.minDate = Date.now()
      this.maxDate = new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 6,
          new Date().getDate()
        ).getTime()
      this.maxRange = null
      this.position = 'bottom'
      this.formatter = null
      this.showConfirm = true
      this.confirmText = '确定'
      this.confirmDisabledText = null
    },

    show(event) {
      this.resetSettings();
      const { type, id } = event.currentTarget.dataset
      this.id = id
      this.type = type
      this.showCalendar = true

      switch (id) {
        case 'quickSelect1':
        case 'quickSelect2':
          this.showConfirm = false;
          break;
        case 'customColor':
          this.color = '#07c160';
          break;
        case 'customConfirm':
          this.confirmText = '完成';
          this.confirmDisabledText = '请选择结束时间';
          break;
        case 'customRange':
          this.minDate = new Date(2010, 0, 1).getTime();
          this.maxDate = new Date(2010, 0, 31).getTime();
          break;
        case 'customDayText':
          this.minDate = new Date(2010, 4, 1).getTime();
          this.maxDate = new Date(2010, 4, 31).getTime();
          this.formatter = this.dayFormatter;
          break;
        case 'customPosition':
          this.round = false;
          this.position = 'right';
          break;
        case 'maxRange':
          this.maxRange = 3;
          break;
      }
    },

    dayFormatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 5) {
        if (date === 1) {
          day.topInfo = '劳动节';
        } else if (date === 4) {
          day.topInfo = '五四青年节';
        } else if (date === 11) {
          day.text = '今天';
        }
      }

      if (day.type === 'start') {
        day.bottomInfo = '入店';
      } else if (day.type === 'end') {
        day.bottomInfo = '离店';
      }

      return day;
    }
  }
}
</script>

<style>
.tiled-calendar {
  --calendar-height: 500px;
}
</style>
