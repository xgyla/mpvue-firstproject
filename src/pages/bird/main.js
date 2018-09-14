import Vue from 'vue'
import App from './bird'

const app = new Vue(App)
app.$mount()

export default {
    config: {
      navigationBarTitleText: '个人资料'
    }
  }