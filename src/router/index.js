import Vue from "vue";
import Router from "vue-router";
/**
 * 统一导入vue文件格式
 * @param {*} file  文件名
 */
const _resolve = file => resolve =>
  require([`@/components/${file}.vue`], resolve);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: _resolve("views/Home"),
      children: [
        {
          path: "/",
          component: _resolve("views/Discover/index"),
          children: [
            {
              path: "/",
              redirect: "/discover"
            },
            {
              path: "/discover",
              name: "推荐",
              component: _resolve("views/Discover/recommend/index")
            },
            {
              path: "/discover/toplist",
              name: "toplist",
              component: _resolve("views/Discover/toplist/index")
            },
            {
              path: "/discover/playlist",
              name: "playlist",
              component: _resolve("views/Discover/playlist/index")
            },
            {
              path: "/discover/djradio",
              name: "djradio",
              component: _resolve("views/Discover/djradio/index")
            },
            {
              path: "/discover/artist",
              name: "artist",
              component: _resolve("views/Discover/artist/index")
            },
            {
              path: "/discover/album",
              name: "album",
              component: _resolve("views/Discover/album/index")
            }
          ]
        },
        {
          path: "/my",
          name: "我的音乐",
          component: _resolve("views/My/index")
        },
        {
          path: "/icon",
          name: "Icon",
          component: _resolve("views/iconDemo/index")
        }
      ]
    },
    {
      path: "/icon",
      name: "Icon",
      component: _resolve("views/iconDemo/index")
    }
  ]
});
