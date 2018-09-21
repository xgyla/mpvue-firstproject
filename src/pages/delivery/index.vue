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
    <image src="../../static/assets/img/decBg.jpg" class="decImg" mode="aspectFill"></image>
  </div>
</template>

<script>
// import { citys } from '../../utils/city.js'
// var amapFile = require('../../libs/amap-wx.js');

import amapFile from '../../libs/amap-wx.js'
// var markersData = {
//   latitude: '',//纬度
//   longitude: '',//经度
//   key: "e8fa26f75c2f41ba87870a42699e2752"//申请的高德地图key
// };

export default {
  data () {
    return {
      index:0,
      // array: ['美国', '中国', '巴西', '日本'],
      // citys: 
      region: ['上海市', '上海市', '徐汇区'],
      customItem:'全部',
      // latitude:'',
      // longitude:''
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
    },


    //  获取当前经纬度
    loadInfo(){
      wx.getLocation({
        type:'gcj02',
        success(res){
         console.log(res);
         let latitude = res.latitude
         let longitude = res.longitude
        //  this.loadCity(latitude,longitude)
        }
      })
    },

    // 经纬度传给高德地图
    // loadCity(latitude,longitude){
    //   let myAmapFun = new amapFile.AMapWX({ key: 'e8fa26f75c2f41ba87870a42699e2752'});
    //   myAmapFun.getRegeo({
    //     // location: '' + longitude + ',' + latitude + '',//location的格式为'经度,纬度'
    //     success: function (data) {
    //       console.log(data);
    //     },
    //     fail: function (info) { }
    //   });
    // }
    







  },
  onLoad(){
   this.loadInfo()
  //  let myAmapFun = new amapFile.AMapWX({ key: 'e8fa26f75c2f41ba87870a42699e2752'})
  //     myAmapFun.getRegeo({
  //       // location: '' + longitude + ',' + latitude + '',//location的格式为'经度,纬度'
  //       success: function (data) {
  //         console.log(data);
  //       },
  //       fail: function (info) { }
  //  })
  },
  onShow(){
    
  }
}

</script>
<style lang="stylus" src="./style.styl"></style>



