<template>
  <div id="playAudio">
    <audio :poster="poster" :name="name" :author="author" :src="src" id="myAudio" controls loop></audio>
    <div class="srcoll_view" @tap="textclick">这武器那都好，就是不吃药只能战斗15秒，15秒内不是你死就是我亡，这才是90级史诗该有的王者风范!</div>
    <!-- <p :style="{transform: `translateY(${trans}px)`} ">testtest</p> -->
    <div class="rankflag">
      <div class="allrank"></div>
      <div class="validrank"></div>
    </div>

    <!-- <button class="vote" @click="voteClick">投票</button> -->


  </div>
</template>

<script>

export default {
  data () {
    return {
      // validStatus:false,
      trans:0,
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此',
      author: '薛之谦',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    }
  },
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },

  // mount: function () {
  //     this.move()
  //  },
  methods: {
    //  move: function () {
    //  // 实现滚动
    //   setTimeout(()=>{
    //     this.trans = -10
    //   },1000)
    //  }

    // voteClick(){
    //   this.validStatus = true
    // }
  }
}
</script>

<style>
  .srcoll_view{
    position: absolute;
    top:0rpx;
    height: 100rpx;
    font-size: 30rpx;
    white-space: nowrap;
    line-height: 100rpx;
    color: #00bff3;
    animation:myfirst 10s linear infinite;
  }

  @keyframes myfirst{
    0% {
      margin-left: 0px;
    }
     100% {
      margin-left: -1000px;
    }
  }

  .rankflag{
    position: relative;
    margin-bottom: 20px;
  }
  .allrank{
    width: 200px;
    height: 30px;
    background-color: #ccc;
    border-radius: 15px;
  }
  .validrank{
    /* width=20% * 200px */
    width: 50px;
    height: 30px;
    background-color: rgb(255, 201,14);
    border-radius: 15px;
    position: absolute;
    top: 0;
    /* animation:move 2s; */
    transition: width 10s;
  }
  .vote{
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  /* @keyframes move{
    0%{width:0px;}
    100%{width:50px;}
  } */
    

</style>
