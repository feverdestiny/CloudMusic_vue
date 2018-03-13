<template>
  <div class="wrap">
    <div class="ban f-pr">
      <img class="" v-show="showImg(index)" v-for="(item,index) in imgList" :key="index" :src='item.img' />
      <a class="btnl" @click='setActive(1)'>
        <base-icon icon="arrow" />
      </a>
      <a class="btnr" @click='setActive(0)'>
        <base-icon icon="arrow" />
      </a>
      <div class="dot">
        <a :class="['pg',index===activeImage?'pgActive':'']" v-for="(item,index) in imgList" :key="index" @click="setNewActive(index)" >
          <base-icon icon="dian"/>
        </a>
      </div>
      <div class="dow"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Carousel", //轮播图
      activeImage: 0,
      imgList: [
        {
          img: require("assets/images/img1.png")
        },
        {
          img: require("assets/images/img2.png")
        },
        {
          img: require("assets/images/img3.png")
        },
        {
          img: require("assets/images/img4.png")
        },
        {
          img: require("assets/images/img5.png")
        },
        {
          img: require("assets/images/img6.png")
        },
        {
          img: require("assets/images/img7.png")
        },
        {
          img: require("assets/images/img8.png")
        }
      ]
    };
  },
  methods: {
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
    }
  }
}

.f-pr {
  position: relative;
  zoom: 1;
}
</style>
