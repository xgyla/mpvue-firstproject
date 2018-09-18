import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
      "navigationBarTitleText": '配送至',
      "enablePullDownRefresh": true,
      "navigationBarBackgroundColor": "#23dcdc",
      "navigationBarTextStyle": "#fff",
      "backgroundColor": "#ccc",   //下拉背景颜色
    }
  }