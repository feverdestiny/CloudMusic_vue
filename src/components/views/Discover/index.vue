<template>
  <div>
    <div class="cm-subnav">
      <div>1231231232</div>
      <div class="cm-wrap f-pr">
        <ul class="nav">
          <li v-for="(item,index) in navList" :key="index">
            <span :class="['nav-li',item.index==navActive?'active':'']" @click="setNavActive(item)">{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navActive: 1,
      navList: [
        { index: 1, name: "推荐", path: "/" },
        { index: 2, name: "排行榜", path: "/discover/toplist" },
        { index: 3, name: "歌单", path: "/discover/playlist" },
        { index: 4, name: "主播电台", path: "/discover/djradio" },
        { index: 5, name: "歌手", path: "/discover/artist" },
        { index: 6, name: "新碟上架", path: "/discover/album" }
      ]
    };
  },
  methods: {
    setNavActive(item) {
      this.navActive = item.index;
      this.$router.push(item.path);
    }
  }
};
</script>

<style lang="scss" scoped>
.cm-subnav {
  z-index: 90;
  height: 35px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  .cm-wrap {
    width: 1100px;
    margin: 0 auto;
    .nav {
      float: left;
      padding-left: 180px;
      li {
        list-style: none;
        float: left;
        height: 34px;
        text-align: center;
        .nav-li {
          color: #fff;
          font-size: 12px;
          display: inline-block;
          height: 20px;
          padding: 0 13px;
          margin: 7px 17px 0;
          border-radius: 20px;
          line-height: 21px;
          &:hover {
            background: #9b0909;
            cursor: pointer;
          }
        }
        .active {
          background: #9b0909;
          cursor: pointer;
        }
      }
    }
  }
  .f-pr {
    position: relative;
    zoom: 1;
  }
}
</style>

