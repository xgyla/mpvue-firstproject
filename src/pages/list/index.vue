<template>
  <div id="list">
    <div class="list-top">
      <div class="top-info" @click="toDeliveryPage">
        <span class="iconfont icon-dibiao" style="font-size:30px;color:red"></span>
        <span class="top-address">通天股份</span>
        <image src="../../static/assets/img/rightArrow.png"></image>
      </div>
      <span class="iconfont icon-shouye" style="font-size:30px;color:red"></span>
    </div>
    <div class="list-middle">
      <p class="tips-near">附近没有门店呢，请查看以下门店</p>
      <ul class="list-store">
        <li>
          <div class="store-name">
            <span>商城</span>
            <span>>10km</span>
          </div>
          <p class="store-position">上海市徐汇区古美路</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {

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
    toDeliveryPage(){
      wx.navigateTo({url:'/pages/delivery/main'})
    }

  }

}
</script>
<style lang="stylus" src="./style.styl"></style>



