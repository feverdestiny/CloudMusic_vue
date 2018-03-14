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
            <li>
              <div class="wrap-list-cover-item">
                <img src='../../../../assets/images/18903903416776929.jpg' />
                <a class="mark"></a>
                <div class="bottom">
                  <a class="play"></a>
                </div>
              </div>
            </li>
          </ul>

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
        { index: 1, name: "华语" },
        { index: 2, name: "流行" },
        { index: 3, name: "摇滚" },
        { index: 4, name: "民谣" },
        { index: 5, name: "电子" }
      ]
    };
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
          margin: 20px 0 0 -42px;
          li {
            list-style: none;
            width: 140px;
            height: 204px;
            padding-left: 42px;
            float: left;
            display: inline-block;
            width: 140px;
            height: 188px;
            overflow: hidden;
            padding: 0 0 30px 50px;
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
                background-position: 0 0;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url("../../../../assets/images/coverall.png")no-repeat;
              }
              .bottom {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 27px;
                background-position: 0 -537px;
                color: #ccc;
                background: url("../../../../assets/images/coverall.png")no-repeat;
                .play {
                  position: absolute;
                  right: 10px;
                  bottom: 5px;
                  width: 16px;
                  height: 17px;
                  background-position: 0 0;
                  background: url("../../../../assets/images/iconall.png")no-repeat;
                }
              }
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


