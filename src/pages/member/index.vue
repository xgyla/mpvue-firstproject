<template>
 <div id="member">
   <div class="member-top">
     <span class="iconfont icon-shouye notice" style="font-size:30px;color:red"></span>
     <p class="noticeTxt">新人福利上线通知，上线通知</p>
   </div>
   <swiper class='swiper-box' :autoplay='true' :interval='2000' :vertical='true' :circular='true'>
     <swiper-item class='item' v-for='(item,index) in txtlist' :key="index">{{index + 1}}、{{item}}</swiper-item>
   </swiper>

  <div class='box'>
    <!-- <div id='txt1' class='txt' :style="{animation: `roll linear ${duration}s infinite`}">滚动效果实现滚动</div> -->
  </div>
  <!-- 显示完后再显示 -->
  <div class='box'>
    <div id='txt2' class='txt' style="left: 30">{{text}}</div>
  </div>
  <!-- 出现空白后就显示 -->
  <!-- <div class='box'>
    <div class='flex-box' :style="{left: `${posLeft2}px`}">
      <div id='txt3' class='txt'>{{text}}</div>
      <div class='txt' :style="{marginLeft: `${marginLeft}px`}">{{text}}</div>
    </div>
  </div> -->

  <div class="srcoll_view" @tap="textclick">这武器那都好，就是不吃药只能战斗15秒，15秒内不是你死就是我亡，这才是90级史诗该有的王者风范!</div>
  <!-- <p :style="{transform: `translateY(${trans}px)`} ">testtest</p> -->
       <!-- <p style="transform: translateX(-30px)">testtest</p> -->
 </div>
</template>

<script>
let interval1,interval2;
export default {
  data () {
    return {
      text: '这是一行文字水平滚动效果，在小程序中实现的', //滚动文字
      duration: 30, //水平滚动方法一中文字滚动总时间
      pace: 1,  //滚动速度
      posLeft1: 30,  //水平滚动方法二中left值
      posLeft2: 0,  //水平滚动方法三中left值
      marginLeft: 60,   //水平滚动方法三中两条文本之间的间距
      txtlist: [
        '这是第一条公告内容',
        '小程序上下滚动效果总结',
        '这是一行上下滚动的文字，文字最好短点，超过一行省略'
      ],
      trans:-30
    }
  },
  // mount: function () {
  //     this.move()
  //  },
  //  methods: {
  //    move: function () {
  //    // 实现滚动
  //     setTimeout(()=>{
  //       this.trans = -10
  //     },1000)
  //    }
  //  }




  // methods:{
  //   roll1(txtLength, windowWidth) {
  //     interval1 = setInterval(function() {
  //       if (-this.posLeft1 < txtLength) {
  //         // this.setData({
  //         //   posLeft1: this.data.posLeft1 - this.data.pace
  //         // })
  //         this.posLeft1 = this.posLeft1 - this.pace
  //       } else {
  //         // this.setData({
  //         //   posLeft1: windowWidth
  //         // })
  //         this.posLeft1 = this.windowWidth
  //       }
  //       }, 20)
  //   },
  //   roll2(txtLength, windowWidth) {
  //     interval2 = setInterval(function () {
  //       if (-this.posLeft2 < txtLength + this.marginLeft) {
  //         // this.setData({
  //         //   posLeft2: this.data.posLeft2 - this.data.pace
  //         // })
  //         this.posLeft2 = this.posLeft2 = this.pace
  //       } else { // 第二段文字滚动到左边后重新滚动
  //         // this.setData({
  //         //   posLeft2: 0
  //         // })
  //         this.posLeft2 = 0
  //         clearInterval(interval2);
  //         this.roll2(txtLength, windowWidth);
  //       }
  //     }, 20)
  //   },
  // },

  // onShow: function () {
  //   let windowWidth = wx.getSystemInfoSync().windowWidth; //屏幕宽度
  //   wx.createSelectorQuery().select('#txt1').boundingClientRect(function (rect) {
  //     let duration = rect.width * 0.03;//滚动文字时间,滚动速度为0.03s/px
  //     // this.setData({
  //     //   duration: duration
  //     // })
  //     this.duration = duration
  //   }).exec()

  //   wx.createSelectorQuery().select('#txt2').boundingClientRect(function (rect) {
  //     let txtLength = rect.width;//滚动文字长度
  //     this.roll1(txtLength, windowWidth);
  //   }).exec()

  //   wx.createSelectorQuery().select('#txt3').boundingClientRect(function (rect) {
  //     let txtLength = rect.width;//文字+图标长度
  //     // this.setData({
  //     //   marginLeft: txtLength < windowWidth - this.data.marginLeft ? windowWidth - txtLength : this.data.marginLeft
  //     // })
  //     this.marginLeft = txtLength < windowWidth - this.marginLeft ? windowWidth - txtLength : this.marginLeft
  //     this.roll2(txtLength, windowWidth);
  //   }).exec()
  // },
  // onHide: function() {
  //   clearInterval(interval1);
  //   clearInterval(interval2);
  // }
}
</script>
<style lang="stylus" src="./style.styl"></style>



