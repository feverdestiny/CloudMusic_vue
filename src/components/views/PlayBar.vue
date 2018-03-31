<template>
  <div class="play-bar">
    <div class="m-play">
      <div class="updn">
        <div class="left f-f1">
          <a class="btn"></a>
        </div>
        <div class="right f-f1"></div>
      </div>
      <div class="bg"></div>
      <div class="hand"></div>
      <div class="wrap">
        <div class="btns">
          <a class="prv"></a>
          <a class="ply"></a>
          <a class="nxt"></a>
        </div>
        <div class="head">
          <img :src="songImg" />
          <a class="mark"></a>
        </div>
        <div class="play">
          <div class="words">
            <a class="f-thide">{{songInfo.name}}</a>
            <span class="f-thide by">
              <span>
                <a v-for="(item,index) in songAr" :key="index">
                  {{item.name}}
                  <span v-show="index!==songAr.length-1">/</span>
                </a>
              </span>
            </span>
            <a class="src">
            </a>
          </div>
          <div class="m-pbar">
            <div ref='timeline' class="barbg" @click="timeClick">
              <div class="rdy" :style="buffPrgress"></div>
              <div class="cur" :style="curPrgress">
                <span class="btn"></span>
              </div>
            </div>
            <div class="time">
              <em>{{currentTime}}</em>
              /{{duration}}
            </div>
          </div>
        </div>
        <div class="oper">
          <a class="icon icon-add"></a>
          <a class="icon icon-share"></a>
        </div>
        <div class="ctrl">
          <div class="m-vol">
            <div class="barbg"></div>
            <div class="vbg">
              <div class="curr" style="height:45px"></div>
              <span class="btn" style="top:45px"></span>
            </div>
          </div>
          <a class="icon icon-vol"></a>
          <a class="icon icon-loop"></a>
          <a class="add f-pr">
            <span class="tip">已添加到播放列表</span>
            <a class="icon icon-list">1</a>
          </a>
          <span class="tip tip-1">循环</span>
        </div>
      </div>
    </div>
    <audio ref='songPlay' :src='audioUrl'>
      <!-- <source :src="audioUrl"> -->
    </audio>
  </div>
</template>


<script>
export default {
  data() {
    return {
      duration: "00:00",
      currentTime: "00::00",
      curPrgress: {
        width: "0%"
      },
      buffPrgress: {
        width: "0%"
      },
      defalutImg:
        "http://s4.music.126.net/style/web2/img/default/default_album.jpg",
      // audioUrl: "",
      src:
        "http://m10.music.126.net/20180328232838/809fce1312f2bc8c74ec7021d6943658/ymusic/38f1/6fbc/5cdb/9728d7d9e09fb610a65006a9b930f526.mp3",
      audioUrl: "http://music.163.com/song/media/outer/url?id=548097885.mp3"
    };
  },
  created() {
    console.log(this);
  },
  methods: {
    timeClick(event){
      console.log(event);
      console.log(this.$refs.timeline);
    },
    setPrgress() {
      if (this.$refs.songPlay.currentTime) {
        let audio = this.$refs.songPlay;

        this.curPrgress.width = `${this.$refs.songPlay.currentTime /
          this.$refs.songPlay.duration *
          100}%`;
      } else {
        this.curPrgress.width = `0%`;
      }
    },
    setBuffPrgress() {
      if (this.$refs.songPlay.buffered) {
        let audio = this.$refs.songPlay;
        let timeRanges = audio.buffered;
        if (timeRanges.length > 0) {
          this.buffPrgress.width = `${timeRanges.end(
            timeRanges.length <= 0 ? 1 : timeRanges.length - 1
          ) /
            audio.duration *
            100}%`;
        }
      } else {
        this.buffPrgress.width = `0%`;
      }
    },
    transTime(time) {
      let duration = parseInt(time);
      let minute = parseInt(duration / 60);
      let sec = duration % 60 + "";
      let isM0 = ":";
      if (minute == 0) {
        minute = "00";
      } else if (minute < 10) {
        minute = "0" + minute;
      }
      if (sec.length == 1) {
        sec = "0" + sec;
      }
      return minute + isM0 + sec;
    }
  },
  computed: {
    songInfo() {
      return this.$store.getters.song;
    },
    songImg() {
      if (this.songInfo.al) {
        return this.songInfo.al.picUrl;
      } else {
        return this.defalutImg;
      }
    },
    songAr() {
      return this.songInfo.ar || [];
    }
  },
  watch: {
    songInfo(val) {
      this.$refs.songPlay.pause();
      this.audioUrl = `http://music.163.com/song/media/outer/url?id=${
        val.id
      }.mp3`;

      this.$nextTick(() => {
        this.$refs.songPlay.play();
        setInterval(() => {
          this.duration = this.transTime(this.$refs.songPlay.duration || 0);
          this.currentTime = this.transTime(this.$refs.songPlay.currentTime);
          this.setBuffPrgress();
          this.setPrgress();
        }, 500);
      });
    }
  }
};
</script>


<style lang="scss">
$playbar: url("../../assets/images/playbar.png")no-repeat 0 9999px;
$starbar: url("../../assets/images/statbar.png")no-repeat 0 9999px;
$iconall: url("../../assets/images/iconall.png")no-repeat 0 9999px;

.play-bar {
  position: fixed;
  zoom: 1;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  width: 100%;
  z-index: 1002;
  .m-play {
    position: absolute;
    zoom: 1;
    top: -53px;
    left: 0;
    width: 100%;
    height: 53px;
    margin: 0 auto;
    .updn {
      position: relative;
      z-index: 11;
      visibility: visible;
      .left {
        position: absolute;
        top: -14px;
        right: 15px;
        width: 52px;
        height: 67px;
        background: $playbar;
        background-position: 0 -380px;
        .btn {
          display: block;
          width: 18px;
          height: 18px;
          margin: 6px 0 0 17px;
          background: $playbar;
          background-position: -100px -380px;
        }
      }
      .right {
        position: absolute;
        top: -1px;
        right: 0;
        width: 15px;
        height: 54px;
        background: $playbar;
        background-position: -52px -393px;
        pointer-events: none;
      }
      .f-f1 {
        float: left;
      }
    }
    .bg {
      height: 53px;
      zoom: 1;
      margin-right: 67px;
      background: $playbar;
      background-position: 0 0;
      background-repeat: repeat-x;
    }
    .hand {
      position: absolute;
      top: -10px;
      width: 100%;
      height: 20px;
      cursor: pointer;
    }
    .wrap {
      position: absolute;
      left: 50%;
      top: 6px;
      z-index: 15;
      width: 980px;
      height: 47px;
      margin: 0 auto;
      //   margin-left: -490px;
      margin-left: -498.5px;
      .btns {
        float: left;
        width: 137px;
        padding: 6px 0 0 0;
        a {
          display: block;
          float: left;
          width: 28px;
          height: 28px;
          margin-right: 8px;
          margin-top: 5px;
          text-indent: -9999px;
          background: $playbar;
          cursor: pointer;
        }
        .prv {
          background-position: 0 -130px;
          &:hover {
            background-position: -30px -130px;
          }
        }
        .ply {
          width: 36px;
          height: 36px;
          margin-top: 0;
          background-position: 0 -204px;
          &:hover {
            background-position: -40px -204px;
          }
        }
        .nxt {
          background-position: -80px -130px;
          &:hover {
            background-position: -110px -130px;
          }
        }
      }
      .head {
        float: left;
        position: relative;
        margin: 6px 15px 0 0;
        width: 34px;
        height: 34px;
        img {
          width: 34px;
          height: 34px;
        }
        .mark {
          position: absolute;
          top: 0px;
          left: 0px;
          display: block;
          width: 34px;
          height: 35px;
          background: $playbar;
          background-position: 0 -80px;
        }
      }
      .play {
        float: left;
        position: relative;
        font-size: 12px;
        width: 608px;
        .words {
          height: 28px;
          overflow: hidden;
          color: #e8e8e8;
          text-shadow: 0 1px 0 #171717;
          line-height: 28px;
          .f-thide {
            float: left;
            color: #e8e8e8;
            max-width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            a {
              color: #9b9b9b;
            }
          }
          .by {
            float: left;
            max-width: 220px;
            margin-left: 15px;
            color: #9b9b9b;
          }
          .src {
            float: left;
            width: 14px;
            height: 15px;
            margin: 7px 0 0 13px;
            background: $playbar;
            background-position: -110px -103px;
          }
        }
        .m-pbar {
          font-size: 12px;
          position: relative;
          width: 493px;
          .barbg {
            height: 9px;
            background: $starbar;
            background-position: right 0;
            .rdy {
              height: 9px;
              background: $starbar;
              background-position: right -30px;
            }
            .cur {
              position: absolute;
              top: 0;
              left: 0;
              width: 1%;
              height: 9px;
              background: $starbar;
              background-position: left -66px;
              .btn {
                position: absolute;
                top: -7px;
                right: -13px;
                width: 22px;
                height: 24px;
                margin-left: -11px;
                background: $iconall;
                background-position: 0 -250px;
                &:hover {
                  background-position: 0 -280px;
                }
              }
            }
          }
          .time {
            position: absolute;
            top: -3px;
            right: -84px;
            color: #797979;
            text-shadow: 0 1px 0 #121212;
            position: absolute;
            top: -3px;
            right: -84px;
            color: #797979;
            text-shadow: 0 1px 0 #121212;
            em {
              font-style: normal;
              text-align: left;
              font-size: inherit;
              color: #a1a1a1;
            }
          }
        }
      }
      .oper {
        width: 60px;
        float: left;
        .icon {
          float: left;
          width: 25px;
          height: 25px;
          margin: 11px 2px 0 0;
          text-indent: -9999px;
          background: $playbar;
          cursor: pointer;
        }
        .icon-add {
          background-position: -88px -163px;
          &:hover {
            background-position: -88px -189px;
          }
        }
        .icon-share {
          background-position: -114px -163px;
          &:hover {
            background-position: -114px -189px;
          }
        }
      }
      .ctrl {
        position: relative;
        z-index: 10;
        width: 113px;
        padding-left: 13px;
        background: $playbar;
        float: left;
        background-position: -147px -238px;
        .m-vol {
          position: absolute;
          top: -113px;
          left: 9px;
          clear: both;
          width: 32px;
          height: 113px;
          .barbg {
            position: absolute;
            top: 0;
            left: 0;
            width: 32px;
            height: 113px;
            background: $playbar;
            background-position: 0 -503px;
          }
          .vbg {
            padding: 4px 0;
            position: absolute;
            // top: 11px;
            top: 7px;
            left: 14px;
            width: 4px;
            height: 93px;
            .curr {
              position: absolute;
              //   top: 11px;
              //   left: 14px;
              width: 4px;
              //   height: 93px;
              top: auto;
              bottom: 4px;
              left: 0;
              background: $playbar;
              background-position: -40px bottom;
              overflow: hidden;
            }
            .btn {
              position: absolute;
              top: 0;
              left: -7px;
              display: block;
              width: 18px;
              height: 20px;
              background: $iconall;
              background-position: -40px -250px;
              _background-position: 0 0;
              cursor: pointer;
              &:hover {
                background-position: -40px -280px;
              }
            }
          }
        }
        .icon {
          float: left;
          width: 25px;
          height: 25px;
          margin: 11px 2px 0 0;
          text-indent: -9999px;
          background: $playbar;
          cursor: pointer;
        }
        .icon-vol {
          background-position: -2px -248px;
          &:hover {
            background-position: -31px -248px;
          }
        }
        .icon-loop {
          background-position: -3px -344px;
          &:hover {
            background-position: -33px -344px;
          }
        }
        .add {
          float: left;
          width: 59px;
          height: 36px;
          font-size: 12px;
        }
        .f-pr {
          position: relative;
          zoom: 1;
        }
        .tip {
          font-size: 12px;
          position: absolute;
          top: -51px;
          left: -65px;
          clear: both;
          width: 152px;
          height: 49px;
          background: $playbar;
          background-position: 0 -287px;
          text-align: center;
          color: #fff;
          line-height: 37px;
        }
        .tip-1 {
          top: -35px;
          left: 12px;
          width: 81px;
          height: 39px;
          line-height: 34px;
          background-position: 0 -457px;
        }
        .icon-list {
          display: block;
          float: none;
          width: 38px;
          padding-left: 21px;
          background-position: -42px -68px;
          line-height: 27px;
          text-align: center;
          color: #666;
          text-shadow: 0 1px 0 #080707;
          text-indent: 0;
          text-decoration: none;
          &:hover {
            background-position: -42px -98px;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
