<template>
  <div class="m-hot f-cb">

    <div class="m-hot-left">
      <div class="m-hot-left-c ">
        <div class="m-hot-left-c-wrap">
          <div class="wrap-head">
            <a class="wrap-head-title">
              热门推荐
            </a>
            <div class="wrap-head-tabs">
              <span v-for="(item,index) in tabsList" :key="index">
                <a>{{item.name}}</a>
                <span class="tabs-line">|</span>
              </span>
            </div>
            <span class="wrap-head-more">
              <a>更多</a>
              <i class="icon-more"></i>
            </span>
          </div>
          <ul class="wrap-list f-cb">
            <li v-for="(item,index) in wrapList" :key="index">
              <div class="wrap-list-cover-item">
                <img :src='item.picUrl' />
                <a class="mark"></a>
                <div class="bottom">
                  <a class="play"></a>
                  <span class="icon">
                  </span>
                  <span class="num">{{numFix(item.playCount)}}</span>
                </div>
                <div class="dec">
                  {{item.name}}
                </div>
              </div>
            </li>
          </ul>
          <div class="m-clmnad"></div>
          <div class="m-new">
            <div class="wrap-head">
              <a class="wrap-head-title">
                新碟上架
              </a>
              <span class="wrap-head-more">
                <a>更多</a>
                <i class="icon-more"></i>
              </span>
            </div>
            <div class="m-disk">
              <div class="inner">
                <span class="inner-left">
                </span>
                <div class="inner-roll">
                  <ul class="f-cb">
                    <li v-for="(item,index) in albumList" :key="index">
                      <div class="roll-ab roll-cover" @mouseenter='mouseenter(item)' @mouseleave='mouseleave(item)'>
                        <img :src='item.picUrl' />
                        <a class="mark"></a>
                        <a v-show="item.playShow" class="play"></a>
                      </div>
                      <p class="f-hide">
                        {{item.name}}
                      </p>
                      <p class="f-hide fc">
                        {{item.artist.name}}
                      </p>
                    </li>
                  </ul>
                </div>
                <span class="inner-right">
                </span>
              </div>
            </div>
          </div>
          <div class="m-bill">
            <div class="wrap-head">
              <a class="wrap-head-title">
                榜单
              </a>
              <span class="wrap-head-more">
                <a>更多</a>
                <i class="icon-more"></i>
              </span>
            </div>
            <div class="m-bill-list">
              <!-- 飙升榜 -->

              <div class="bill-list-blk">
                <div class="top">
                  <div class="top-cover">
                    <img src="../../../../assets/images/bs.jpg" />
                    <div class="mark"></div>
                  </div>
                  <div class="top-title">
                    <h3 class="title-h">
                      云音乐飙升榜
                    </h3>
                    <div class="title-btn">
                      <a class="btn-py">播放</a>
                      <a class="btn-sc"></a>
                    </div>
                  </div>
                </div>
                <div class="list">
                  <ol>
                    <li v-for="(item,index ) in topList.upList" :key="index" @mouseenter='mouseenter(item)' @mouseleave='mouseleave(item)'>
                      <span :class="['no',index<3?'no-top':'']">{{index+1}}</span>
                      <a :class="['nm', 'm-hide',item.playShow?'w2':'w1']">{{item.name}}</a>
                      <div class="oper" v-show="item.playShow">
                        <a class="sg sg-11" @click="musicPlay(item)" title='播放'></a>
                        <a class="icon icon-11" title='添加到播放列表'></a>
                        <a class="sg sg-12" title='收藏'></a>
                      </div>
                    </li>
                  </ol>
                  <div class="more">
                    <a>查看全部></a>
                  </div>
                </div>
              </div>
              <!-- 云音乐新歌榜 -->
              <div class="bill-list-blk">
                <div class="top">
                  <div class="top-cover">
                    <img src="../../../../assets/images/xg.jpg" />
                    <div class="mark"></div>
                  </div>
                  <div class="top-title">
                    <h3 class="title-h">
                      云音乐新歌榜
                    </h3>
                    <div class="title-btn">
                      <a class="btn-py" >播放</a>
                      <a class="btn-sc"></a>
                    </div>
                  </div>
                </div>
                <div class="list">
                  <ol>
                    <li v-for="(item,index ) in topList.newList" :key="index" @mouseenter='mouseenter(item)' @mouseleave='mouseleave(item)'>
                      <span :class="['no',index<3?'no-top':'']">{{index+1}}</span>
                      <a :class="['nm', 'm-hide',item.playShow?'w2':'w1']">{{item.name}}</a>
                      <div class="oper" v-show="item.playShow">
                        <a class="sg sg-11" title='播放' @click="musicPlay(item)"></a>
                        <a class="icon icon-11" title='添加到播放列表'></a>
                        <a class="sg sg-12" title='收藏'></a>
                      </div>
                    </li>
                  </ol>
                  <div class="more">
                    <a>查看全部></a>
                  </div>
                </div>
              </div>
              <!-- 网易原创歌曲榜 -->

              <div class="bill-list-blk blk1">
                <div class="top">
                  <div class="top-cover">
                    <img src="../../../../assets/images/yc.jpg" />
                    <div class="mark"></div>
                  </div>
                  <div class="top-title">
                    <h3 class="title-h">
                      网易原创歌曲榜
                    </h3>
                    <div class="title-btn">
                      <a class="btn-py">播放</a>
                      <a class="btn-sc"></a>
                    </div>
                  </div>
                </div>
                <div class="list">
                  <ol>
                    <li v-for="(item,index ) in topList.orgList" :key="index" @mouseenter='mouseenter(item)' @mouseleave='mouseleave(item)'>
                      <span :class="['no',index<3?'no-top':'']">{{index+1}}</span>
                      <a :class="['nm', 'm-hide',item.playShow?'w2':'w1']">{{item.name}}</a>
                      <div class="oper" v-show="item.playShow">
                        <a class="sg sg-11" title='播放' @click="musicPlay(item)"></a>
                        <a class="icon icon-11" title='添加到播放列表'></a>
                        <a class="sg sg-12" title='收藏'></a>
                      </div>
                    </li>
                  </ol>
                  <div class="more">
                    <a>查看全部></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="m-hot-right">

     <div class="m-myinfo m-myinfo-1 sg sg1">
        <p class="note">
          登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
        </p>
        <div class="btn sg sg2">用户登录</div>
      </div>
      <div class="m-signer">
        <h3 class="hd3">
          <span style="float:left">热门歌手</span>
          <a >查看全部 ></a>
        </h3>
      </div>
      <ul class="m-enter f-cb">
        <li v-for="(item,index) in artistsList" :key="index">
          <a class="item">
            <div class="head">
              <img :src='item.img1v1Url'/>
            </div>
            <div class="ifo">
              <h4>
                <span class="nm m-hide" style="font-size:14px">{{item.name}}</span>
              </h4>
              <p class="m-hide" style="color:#666">热门歌手</p>
            </div>
          </a>
        </li>
  
        
      </ul>
      <div>
        <a class="m-btn2 btn2-1">
          <i>申请成为网易音乐人</i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabsList: [
        {
          index: 1,
          name: "华语"
        },
        {
          index: 2,
          name: "流行"
        },
        {
          index: 3,
          name: "摇滚"
        },
        {
          index: 4,
          name: "民谣"
        },
        {
          index: 5,
          name: "电子"
        }
      ],
      wrapList: [
        {
          index: 1,
          src: require("assets/images/18903903416776929.jpg"),
          num: "117万",
          dec: "伤心回忆寄存馆|今日营业中"
        },
        {
          index: 2,
          src: require("assets/images/18903903416776929.jpg"),

          num: "117万",
          dec: "伤心回忆寄存馆|今日营业中"
        },
        {
          index: 3,
          src: require("assets/images/18903903416776929.jpg"),

          num: "117万",
          dec: "伤心回忆寄存馆|今日营业中"
        },
        {
          index: 4,
          src: require("assets/images/18903903416776929.jpg"),

          num: "117万",
          dec: "伤心回忆寄存馆|今日营业中"
        },
        {
          index: 5,
          src: require("assets/images/18903903416776929.jpg"),
          num: "117万",
          dec: "伤心回忆寄存馆|今日营业中"
        },
        {
          index: 6,
          src: require("assets/images/18903903416776929.jpg"),

          num: "117万",
          dec: "伤心回忆寄存馆|今日营业中"
        },
        {
          index: 7,
          src: require("assets/images/18903903416776929.jpg"),

          num: "117万",
          dec: "伤心回忆寄存馆|今日营业中"
        },
        {
          index: 8,
          src: require("assets/images/18903903416776929.jpg"),
          num: "117万",
          dec: "伤心回忆寄存馆|今日营业中"
        }
      ],
      albumList: [],
      topList: {
        upList: [],
        newList: [],
        orgList: []
      },
      artistsList: []
    };
  },

  async created() {
    this.getPersonalized();
    this.getAlbum();
    this.topList.upList = await this.getTop(3);
    this.topList.newList = await this.getTop(0);
    this.topList.orgList = await this.getTop(2);
    this.getArtists();

    console.log("top", this.topList.upList);
  },
  methods: {
    async getArtists() {
      const Res = await this.$http.get("/top/artists", {
        params: {
          offset: 0,
          limit: 5
        }
      });
      if (Res && Res.code === 200) {
        this.artistsList = Res.artists;
      }
    },
    musicPlay(data) {
      console.log(data);
      this.$store.dispatch("setSong", data);
    },
    /**
     * 热门推荐
     */
    async getPersonalized() {
      const Res = await this.$http.get("/personalized");
      if (Res && Res.code === 200) {
        this.wrapList = Res.result
          .sort((a, b) => {
            return b.playCount - a.playCount;
          })
          .slice(0, 8);
      }
    },
    /**
     * 新碟上架
     */
    async getAlbum() {
      const Res = await this.$http.get("/top/album", {
        params: {
          offset: 0,
          limit: 10
        }
      });
      if (Res && Res.code === 200) {
        this.albumList = Res.albums.slice(0, 5).map(item => {
          item.playShow = false;
          return item;
        });
        console.log(this.albumList);
      }
    },
    async getTop(idx) {
      let data = [];
      const Res = await this.$http.get("/top/list", {
        params: {
          idx: idx
        }
      });
      if (Res && Res.code === 200) {
        data = Res.playlist.tracks.slice(0, 10).map(item => {
          item.playShow = false;
          return item;
        });
        return data;
      }
    },
    mouseenter(data) {
      data.playShow = true;
    },
    mouseleave(data) {
      data.playShow = false;
    },
    /**
     * 播放量格式化
     */
    numFix(num) {
      // return num > 9999 ? Math.floor(num / 1000) / 10 + "万" : num;
      return num > 9999 ? Math.floor(num / 10000) + "万" : num;
    }
  }
};
</script>

<style lang="scss">
.m-hot {
  width: 980px;
  min-height: 700px;
  _height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  .m-hot-left {
    float: left;
    width: 100%;
    margin-right: -250px;
    .m-hot-left-c {
      margin-right: 251px;
      .m-hot-left-c-wrap {
        padding: 20px 20px 40px;
        .wrap-head {
          height: 33px;
          padding: 0 10px 0 34px;
          background: url("../../../../assets/images/index.png")no-repeat;
          background-position: -225px -156px;
          border-bottom: 2px solid #c10d0c;
          .wrap-head-title {
            color: #333;
            font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
            float: left;
            font-size: 20px;
            font-weight: normal;
            line-height: 28px;
          }
          .wrap-head-tabs {
            float: left;
            margin: 7px 0 0 20px;
            font-size: 12px;
            a {
              color: #666;
              cursor: pointer;
            }
            .tabs-line {
              margin: 0 10px;
              color: #ccc;
            }
          }
          .wrap-head-more {
            font-size: 12px;
            float: right;
            margin-top: 9px;
            a {
              color: #666;
            }
            .icon-more {
              display: inline-block;
              width: 12px;
              height: 12px;
              margin-left: 4px;
              vertical-align: middle;
              background: url("../../../../assets/images/index.png")no-repeat;
              background-position: 0 -240px;
            }
            .wrap-head-arrow {
              color: #c10d0c;
              font-size: 14px;
              transform: rotate(90deg);
            }
          }
        }
        .wrap-list {
          margin: 20px 0 0 -36px;
          li {
            list-style: none;
            width: 140px;
            height: 204px;
            padding-left: 42px; // float: left;
            display: inline-block;
            width: 140px;
            height: 188px;
            overflow: hidden;
            padding: 0 0 30px 35px;
            line-height: 1.4;
            .wrap-list-cover-item {
              width: 140px;
              height: 140px;
              position: relative;
              display: block;

              img {
                display: block;
                width: 100%;
                height: 100%;
              }
              .mark {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url("../../../../assets/images/coverall.png")no-repeat;
                background-position: 0 0;
              }
              .bottom {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 27px;
                color: #ccc;
                background: url("../../../../assets/images/coverall.png")no-repeat;
                background-position: 0 -537px;

                .play {
                  position: absolute;
                  right: 10px;
                  bottom: 5px;
                  width: 16px;
                  height: 17px;
                  background: url("../../../../assets/images/iconall.png")no-repeat;
                  background-position: 0 0;
                  &:hover {
                    cursor: pointer;
                    background-position: 0 -60px;
                  }
                }
                .icon {
                  float: left;
                  width: 14px;
                  height: 11px;
                  background: url("../../../../assets/images/iconall.png")no-repeat;

                  background-position: 0 -24px;
                  margin: 9px 5px 9px 10px;
                  // margin: 3px 10px 0px 5px;
                }
                .num {
                  float: left;
                  font-size: 12px;
                  margin: 7px 0 0 0;
                }
              }
              .dec {
                margin: 8px 0 3px;
                font-size: 14px;
              }
            }
          }
        }
        .m-clmnad {
          position: relative;
          margin: 0 0 35px;
        }
        .m-new {
          margin: 0px 0 0px;
          .m-disk {
            position: relative;
            zoom: 1;
            height: 186px;
            margin: 20px 0 37px;
            border: 1px solid #d3d3d3;
            .inner {
              height: 184px;
              padding-left: 16px;
              background: #f5f5f5;
              border: 1px solid #fff;
              .inner-left {
                position: absolute;
                top: 71px;
                width: 17px;
                height: 17px;
                left: 4px;
                background: url("../../../../assets/images/index.png")no-repeat;
                background-position: -260px -75px;
                &:hover {
                  background-position: -280px -75px;
                  cursor: pointer;
                }
              }
              .inner-roll {
                float: left;
                width: 645px;
                height: 180px;
                overflow: hidden;
                position: relative;
                zoom: 1;
                ul {
                  position: absolute;
                  top: 0;
                  width: 645px;
                  margin: 28px 0 0 0;
                  li {
                    list-style: none;
                    float: left;
                    display: inline;
                    width: 118px;
                    height: 150px;
                    margin-left: 11px;
                    background: url("../../../../assets/images/index.png")no-repeat;
                    background-position: -260px 100px;
                    .roll-ab {
                      width: 100px;
                      height: 100px;
                      img {
                        display: block;
                        width: 100%;
                        height: 100%;
                      }
                      .mark {
                        width: 118px;
                        height: 100px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: url("../../../../assets/images/coverall.png")no-repeat;
                        background-position: 0 -570px;
                        cursor: pointer;
                      }
                      .play {
                        left: 72px;
                        width: 22px;
                        height: 22px;
                        float: right;
                        position: absolute;
                        right: 10px;
                        bottom: 5px;
                        background: url("../../../../assets/images/iconall.png")no-repeat;
                        background-position: 0 -85px;
                        &:hover {
                          background-position: 0 -110px;
                          cursor: pointer;
                        }
                      }
                    }
                    .roll-cover {
                      position: relative;
                      display: block;
                      margin-bottom: 7px;
                    }
                    p {
                      width: 90%;
                      line-height: 18px;
                      color: #333;
                      font-size: 12px;
                      &:hover {
                        cursor: pointer;
                        color: #000;
                        text-decoration: underline;
                      }
                    }
                    .f-hide {
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      word-wrap: normal;
                    }
                    .fc {
                      color: #666;
                    }
                  }
                }
              }
              .inner-right {
                position: absolute;
                top: 71px;
                width: 17px;
                height: 17px;
                background: url("../../../../assets/images/index.png")no-repeat;
                background-position: -300px -75px;
                &:hover {
                  background-position: -320px -75px;
                  cursor: pointer;
                }
              }
            }
          }
        }
        .m-bill {
          .m-bill-list {
            height: 472px;
            margin-top: 20px;
            padding-left: 1px;
            background: url("../../../../assets/images/index_bill.png")no-repeat;
            .bill-list-blk {
              float: left;
              width: 230px;
              .top {
                height: 100px;
                padding: 20px 0 0 19px;
                .top-cover {
                  float: left;
                  display: inline;
                  width: 80px;
                  height: 80px;
                  position: relative;
                  img {
                    display: block;
                    width: 100%;
                    height: 100%;
                  }
                  .mark {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url("../../../../assets/images/coverall.png")no-repeat;
                    background-position: -145px -57px;
                  }
                }
                .top-title {
                  float: left;
                  width: 116px;
                  margin: 6px 0 0 10px;
                  .title-h {
                    font-size: 14px;
                    color: #333;
                    &:hover {
                      text-decoration: underline;
                      cursor: pointer;
                    }
                  }
                  .title-btn {
                    margin-top: 10px;
                    font-size: 12px;
                    color: #333;
                    a {
                      display: block;
                      float: left;
                      width: 22px;
                      height: 22px;
                      margin-right: 10px;
                      text-indent: -9999px;
                    }
                    .btn-py {
                      background: url("../../../../assets/images/index.png")no-repeat;
                      background-position: -267px -205px;
                      &:hover {
                        background-position: -267px -235px;
                        cursor: pointer;
                      }
                    }
                    .btn-sc {
                      background: url("../../../../assets/images/index.png")no-repeat;
                      background-position: -300px -205px;
                      &:hover {
                        background-position: -300px -235px;
                        cursor: pointer;
                      }
                    }
                  }
                }
              }
              .list {
                ol {
                  height: 319px;
                  margin-left: 50px;
                  line-height: 32px;
                  li {
                    height: 32px;
                    vertical-align: middle;
                    display: list-item;
                    list-style: none;
                    text-align: -webkit-match-parent;
                    .no {
                      float: left;
                      position: relative;
                      width: 35px;
                      height: 32px;
                      margin-left: -35px;
                      text-align: center;
                      color: #666;
                      font-size: 16px;
                    }
                    .no-top {
                      color: #c10d0c;
                    }
                    .w1 {
                      width: 170px;
                    }
                    .w2 {
                      width: 96px;
                    }
                    .nm {
                      color: #000;
                      float: left;
                      font-size: 12px;
                      height: 32px;
                      &:hover {
                        cursor: pointer;
                        text-decoration: underline;
                      }
                    }
                    .oper {
                      display: block;
                      float: right;
                      width: 82px;
                      margin-top: 7px;
                      a {
                        float: left;
                        width: 17px;
                        height: 17px;
                        margin-right: 10px;
                        &:hover {
                          cursor: pointer;
                        }
                      }
                      .sg {
                        background: url("../../../../assets/images/index.png")no-repeat;
                      }
                      .sg-11 {
                        background-position: -267px -268px;
                        &:hover {
                          background-position: -267px -288px;
                        }
                      }
                      .sg-12 {
                        background-position: -297px -268px;
                        &:hover {
                          background-position: -297px -288px;
                        }
                      }
                      .icon {
                        display: inline-block;
                        overflow: hidden;
                        vertical-align: middle;
                        background: url("../../../../assets/images/icon.png")no-repeat;
                      }
                      .icon-11 {
                        width: 13px;
                        height: 13px;
                        margin: 2px 6px 0 0;
                        background-position: 0 -700px;
                        &:hover {
                          background-position: -22px -700px;
                        }
                      }
                    }
                  }
                }
                .more {
                  font-size: 12px;
                  color: #000;
                  clear: both;
                  height: 32px;
                  margin-right: 32px;
                  text-align: right;
                  line-height: 32px;
                  &:hover {
                    text-decoration: underline;
                    cursor: pointer;
                  }
                }
              }
            }

            .blk1 {
              width: 228px;
            }
          }
        }
      }
    }
  }
 .m-hot-right {
    position: relative;
    float: right;
    width: 250px;
    zoom: 1;
    font-size: 12px;
    .m-myinfo {
      height: 165px;
      padding-top: 20px;
      .note {
        width: 205px;
        margin: 0 auto;
        padding: 16px 0;
        line-height: 22px;
        color: #666;
      }
      .btn {
        display: block;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
      }
    }
    .m-signer {
      margin-top: 15px;
      .hd3 {
        font-size: 12px;
        position: relative;
        height: 23px;
        margin: 0 20px;
        border-bottom: 1px solid #ccc;
        color: #333;
        a {
          float: right;
          font-weight: normal;
          color: #666;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
    .m-enter {
      margin: 6px 0 14px 20px;
      li {
        list-style: none;
        margin-top: 14px;
        overflow: hidden;
        .item {
          float: left;
          width: 210px;
          height: 62px;
          text-decoration: none;
          background: #fafafa;
          .head {
            float: left;
            width: 62px;
            height: 62px;
            img {
              float: left;
              width: 62px;
              height: 62px;
            }
          }
          .ifo {
            float: left;
            width: 133px;
            height: 60px;
            padding-left: 14px;
            border: 1px solid #e9e9e9;
            border-left: none;
            h4 {
              margin-top: 8px;
              .nm {
                width: 90%;
              }
            }

            p {
              width: 90%;
              margin-top: 8px;
            }
          }
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .m-btn2 {
      margin-left: 20px;
      border-radius: 4px;
      padding: 0 5px 0 0;
      white-space: nowrap;
      display: inline-block;
      height: 31px;
      line-height: 31px;
      overflow: hidden;
      vertical-align: top;
      text-align: center;
      cursor: pointer;
    }
    .btn2-1 {
      color: #333;
      background: url("../../../../assets/images/button2.png")no-repeat 0 9999px;
      background-position: right -100px;
      &:hover {
        color: #333;
        background-position: right -182px;
      }

      i {
        display: inline-block;
        height: 31px;
        line-height: 31px;
        overflow: hidden;
        vertical-align: top;
        text-align: center;
        cursor: pointer;
        width: 170px;
        font-weight: bold;
        color: #333;

        padding: 0 15px 0 20px;
        pointer-events: none;
        background: url("../../../../assets/images/button2.png")no-repeat;
        background-position: 0 -59px;
        font-style: normal;
        // text-align: left;
        font-size: inherit;
      }
    }
    .m-myinfo-1 {
      height: 126px;
      padding-top: 0;
      .btn {
        margin: 0 auto;
      }
    }
    .sg {
      background: url("../../../../assets/images/index.png")no-repeat;
    }
    .sg1 {
      background-position: 0 0;
    }
    .sg2 {
      background-position: 0 -195px;
    }
  }
  .m-hide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
}
</style>
