<template>
  <div id="delivery">
    <div class="delivery-top">
       <picker mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem">
        <view class="picker">
          当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
        </view>
       </picker>
       <input type="text" placeholder="搜索附近的小区、学校等" :confirm-type="search">
    </div>
    <div class="delivery-middle">
      <p>当前地址</p>
      <div class="position-quick">
        <span>通天股份</span>
        <div>
          <span>重新定位</span>
          <span class="iconfont icon-dibiao" style="font-size:30px;color:red"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { citys } from '../../utils/city.js'
export default {
  data () {
    return {
      index:0,
      // array: ['美国', '中国', '巴西', '日本'],
      // citys: 
      region: ['上海市', '上海市', '徐汇区'],
      customItem:'全部'
    }
  },
  onPullDownRefresh: function () {
    console.log("下拉");
    // wx.showNavigationBarLoading();
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },1500)
  },
  methods:{
    // bindPickerChange(e) {
    //     // console.log(e);
    //     // this.setData({
    //     //   index: e.detail.value
    //     // })
    //     this.index = e.mp.detail.value
    // },

    bindRegionChange: function (e) {
      //  console.log(e);
      this.region = e.mp.detail.value
    }
  }

}
</script>
<style lang="stylus" src="./style.styl"></style>



