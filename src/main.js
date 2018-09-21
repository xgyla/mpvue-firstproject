import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/counter/main',
      'pages/bird/main',
      'pages/personal/main',
      'pages/logs/main',
      'pages/index/main',
      'pages/member/main',
      'pages/reports/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    // "tabBar": {//设置Tab页样式
    //   "list": [//设置Tab页列表，最大支持5个
    //     {
    //       "pagePath": "pages/bird/main",
    //       "text": "鸟页面",
    //       "iconPath": "./static/assets/img/tab.png",
    //       "selectedIconPath": "./static/assets/img/tab.png"
    //     },
    //     {
    //       "pagePath": "pages/member/main",
    //       "text": "会员页面",
    //       "iconPath": "./static/assets/img/tab.png",
    //       "selectedIconPath": "./static/assets/img/tab.png"
    //     }
    //   ],
    //   "borderStyle":"white"
    // },
  }
}
