<template>
  <div class="m-hot f-cb">

    <div class="m-hot-left">
      <div class="m-hot-left-c ">
        <div class="m-hot-left-c-wrap">
          <div class="wrap-head">
            <base-icon style="float:left;color:red;font-size:25px;" icon="kongdian" />
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
              <base-icon class="wrap-head-arrow" icon="right" />

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
                    <base-icon icon="music" />
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
              <base-icon style="float:left;color:red;font-size:25px;" icon="kongdian" />
              <a class="wrap-head-title">
                新碟上架
              </a>
              <span class="wrap-head-more">
                <a>更多</a>
                <base-icon class="wrap-head-arrow" icon="right" />

              </span>
            </div>
            <div class="m-disk">
              <div class="inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="m-hot-right">2</div>
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
      ]
    };
  },

  created() {
    this.getPersonalized();
  },
  methods: {
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
          padding: 0 10px 0 5px;
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
                  margin: 3px 10px 0px 5px;
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
  }
}
</style>
