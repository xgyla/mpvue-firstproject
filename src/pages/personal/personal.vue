<template>
  <div id="person">
    <ul class="person-info">
      <li>
        <!-- 调用拍照功能和相册 -->
        <image class="infoImg" :src="imgUrl" alt="" @click="chooseImg"></image>
        <span class="infoName">萌萌哒的柚子</span>
      </li>
      <li>
        <span class="infoName">籍贯</span>
        <span class="infoName">芜湖</span>
      </li>
      <li>
        <span class="infoName">民族</span>
        <span class="infoName">汉</span>
      </li>
      <li>
        <span class="infoName">居住地</span>
        <span class="infoName">合肥</span>
      </li>
    </ul>
    <!-- <image :src="tempFilePaths" mode="aspecFill" style="width: 100%; height: 450rpx"></image>   -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      tempFilePaths: "",
      imgUrl:'../../static/assets/img/logo.jpg'
    }
  },
  methods:{
      chooseImg(){
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      //     _this.setData({
      //       tempFilePaths:res.tempFilePaths
      // })
        console.log(res);
        console.log("选取照片")
        this.tempFilePaths=res.tempFilePaths[0]
        if(this.tempFilePaths){
          // this.imgUrl = this.tempFilePaths
        }
    }
  })
}  
  }

}
</script>
<style lang="stylus" src="./style.styl"></style>



