<template>
  <div>
    <div class="cm-top">
      <div class="cm-wrap f-cb">
        <div class="cm-logo">
          网易云
        </div>
        <ul class="cm-nav">
          <li v-for="(item,index) in navList" @click="setNavActive(item)" :key="index" :class="item.index==navActive?'nav-active':''">
            <span>
              <a>{{item.name}}</a>
            </span>
            <div v-show="item.index==navActive" class="arrow-up"></div>
          </li>
        </ul>
        <div class="cm-tophead f-pr" @mouseenter='mouseenter' @mouseleave='mouseleave'>
          <a>
            <span class="cm-lgnam">登录</span>
            <base-icon style="margin-left:10px;" icon="down" /></a>
          <div class="cm-tlist" v-show="showLogin">
            <ul>
              <li v-for="(item,index) in loginList" :key="index">
                <a>
                  <base-icon style="font-size:20px;" :icon="item.icon" />
                  <span style="margin-left:10px;font-size:14px;">{{item.name}}</span>
                </a>
              </li>
            </ul>
            <div class="arr"></div>
          </div>
        </div>

      </div>
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showLogin: false,
      navActive: 1,
      navList: [
        { index: 1, name: "发现音乐", path: "/" },
        { index: 2, name: "我的音乐", path: "/my" },
        { index: 3, name: "朋友", path: "/" },
        { index: 4, name: "商城", path: "/" },
        { index: 5, name: "音乐人", path: "/" },
        { index: 6, name: "下载客户端", path: "/" }
      ],
      loginList: [
        { index: 1, name: "手机号登录", icon: "phone" },
        { index: 2, name: "微信登录", icon: "wechat" },
        { index: 3, name: "QQ登录", icon: "qq" },
        { index: 4, name: "新浪微博登录", icon: "weibo" }
      ]
    };
  },
  methods: {
    setNavActive(item) {
      this.navActive = item.index;
      this.$router.push(item.path);
    },
    mouseenter(event) {
      console.log("鼠标移入");
      this.showLogin = true;
    },
    mouseleave(event) {
      console.log("鼠标移出");
      this.showLogin = false;
    }
  }
};
</script>


<style lang="scss" scoped>
.cm-top {
  position: relative;
  z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
  color: #ccc;
  .cm-wrap {
    width: 1100px;
    margin: 0 auto;
    .cm-logo {
      float: left;
      width: 176px;
      height: 69px;
      background: url(../../assets/images/topbar.png) no-repeat 0 9999px;
    }
    .cm-nav {
      float: left;

      li {
        float: left;
        list-style: none;
        font-size: 14px;
        height: 70px;
        position: relative;
        .arrow-up {
          position: absolute;
          bottom: 0px;
          left: 44%;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 6px solid #c20c0c;
        }
        span {
          color: #ccc;
          a {
            padding: 0 19px;
            text-align: center;
            line-height: 70px;
          }
        }

        &:hover {
          cursor: pointer;
          background: #000;
          a {
            color: #fff;
          }
          // color: red !important;
        }
      }
      .nav-active {
        cursor: pointer;
        background: #000;
        a {
          color: #fff;
        }
        // color: red !important;
      }
    }
  }
  .cm-tophead {
    float: right;
    height: 45px;
    font-size: 14px;
    color: #787878;
    margin: 19px 0 0 20px;
    padding: 0 22px 0 0;
    background-position: right -47px;
    .cm-tlist {
      position: absolute;
      top: 38px;
      right: -43px;
      width: 158px;
      background: #2b2b2b;
      border: 1px solid #202020;
      box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      ul {
        li {
          list-style: none;
          color: #ccc;
          border-top: 1px solid rgba(25, 25, 25, 0.32);
          border-bottom: 1px solid rgba(25, 25, 25, 0.32);

          &:hover {
            background: #353535;
            color: #fff;
            cursor: pointer;
          }
          // float: left;
          a {
            margin-left: 20px;
            height: 38px;
            line-height: 38px;
          }
        }
      }
      .arr {
        position: absolute;
        top: -8px;
        left: 50%;
        width: 14px;
        height: 8px;
        margin-left: -7px;
        background-position: -20px 0;
      }
    }
    .cm-lgnam {
      &:hover {
        color: #ccc;
      }
    }
  }
  .f-pr {
    position: relative;
    z-index: 1;
  }
}

</style>
