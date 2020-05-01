import Vue from 'vue'
import App from './App'
import mixins from './mixins'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.mixin(mixins)

const app = new Vue({
  ...App
})
app.$mount()
