<template>
  <div :style="wrapStyle">
    <div class="wrap">
      <div class="ban f-pr">
        <img class="" v-show="showImg(index)" v-for="(item,index) in imgList" :key="index" :src='item.picUrl' />
        <a class="btnl" @click='setActive(1)'>
          <base-icon icon="arrow" />
        </a>
        <a class="btnr" @click='setActive(0)'>
          <base-icon icon="arrow" />
        </a>
        <div class="dot">
          <a :class="['pg',index===activeImage?'pgActive':'']" v-for="(item,index) in imgList" :key="index" @click="setNewActive(index)">
            <base-icon icon="dian" />
          </a>
        </div>
        <div class="dow">
          <a class="btn">asd</a>
          <p> PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          <span class="shadow"></span>
          <span class="shadowr"></span>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      name: "Carousel", //轮播图
      activeImage: 0,
      imgList: []
    };
  },
  computed: {
    wrapStyle() {
      if (this.imgList.length > 0)
        return {
          backgroundImage: `url(${
            this.imgList[this.activeImage].backgroundUrl
          })`,
          backgroundRepeat: "repeat-x"
        };
      return {};
    }
  },
  created() {
    this.getBanner();
  },
  methods: {
    async getBanner() {
      const Res = await this.$http.get("/banner");
      console.log("banner:", Res);
      if (Res.code == 200) {
        this.imgList = Res.banners;
      }
    },
    asd() {},
    showImg(index) {
      if (this.activeImage === index) return true;
      return false;
    },
    setActive(value) {
      switch (value) {
        case 0: //加
          if (this.activeImage + 1 < this.imgList.length) {
            this.activeImage++;
          } else {
            this.activeImage = 0;
          }
          console.log(this.activeImage);
          break;
        case 1: //减
          if (this.activeImage - 1 >= 0) {
            this.activeImage--;
          } else {
            this.activeImage = this.imgList.length - 1;
          }
          console.log(this.activeImage);
          break;
        default:
          break;
      }
    },
    setNewActive(index) {
      this.activeImage = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin wh {
  width: 982px;
  height: 336px;
}

.wrap {
  @include wh;
  position: relative;
  margin: 0 auto;

  .ban {
    @include wh;
    .btnl {
      cursor: pointer;
      position: absolute;
      left: -68px;
      display: block;
      top: 50%;
      margin-top: -31px;
      width: 37px;
      height: 63px;
      font-size: 40px;
      line-height: 63px; // text-indent: -9999px;
      color: #fff;
      &:hover {
        background: rgba(53, 53, 53, 0.28);
      }
    }
    .btnr {
      cursor: pointer;
      position: absolute;
      transform: rotate(180deg);
      right: -68px;
      display: block;
      top: 50%;
      margin-top: -31px;
      width: 37px;
      height: 63px;
      font-size: 40px;
      line-height: 63px; // text-indent: -9999px;
          color: #fff;
      &:hover {
        background: rgba(53, 53, 53, 0.28);
      }
    }
    .dot {
      position: absolute;
      top: 310px;
      left: 0;
      width: 730px;
      height: 20px;
      text-align: center;
      .pg {
        display: inline-block;
        color: #b7b7b7;
        cursor: pointer;
        // background: #fff;
        // border-radius: 50%;
        width: 20px;
        height: 20px;
        &:hover {
          color: red;
        }
      }
      .pgActive {
        color: red;
      }
    }
    .dow {
      position: absolute;
      top: 0;
      z-index: 20;
      right: -1px;
      width: 254px;
      height: 336px;
      background: url("../../../../assets/images/download.png");
      // -moz-box-shadow: 10px 0px 20px rgba(51, 51, 51, 0.4),
      //   -10px 0px 20px rgba(51, 51, 51, 0.4);
      // -webkit-box-shadow: 10px 0px 20px rgba(51, 51, 51, 0.4),
      //   -10px 0px 20px rgba(51, 51, 51, 0.4);
      // box-shadow: 10px 0px 20px rgba(51, 51, 51, 0.4),
      //   -10px 0px 20px rgba(51, 51, 51, 0.4);
      .btn {
        display: block;
        width: 215px;
        height: 56px;
        margin: 212px 0 0 19px;
        background-position: 0 9999px;
        text-indent: -9999px;

        &:hover {
          cursor: pointer;
          background: url("../../../../assets/images/download.png") no-repeat 0
            0;
          background-position: 0 -340px;
          text-decoration: none;
        }
      }
      p {
        font-size: 12px;
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
      }

      .shadow {
        display: block;
        _display: none;
        position: absolute;
        top: 0;
        left: -20px;
        width: 20px;
        height: 336px;
        background: url("../../../../assets/images/banner.png") no-repeat 0;
        background-position: -1px 0;
      }
      .shadowr {
        display: block;
        position: absolute;
        top: 0;
        width: 20px;
        height: 336px;
        left: auto;
        right: -20px;
        background: url("../../../../assets/images/banner.png") no-repeat 0;
        background-position: -20px 0;
      }
    }
  }
}

.f-pr {
  position: relative;
  zoom: 1;
}
</style>
