import Vue from "vue";
import Router from "vue-router";
/**
 * 统一导入vue文件格式
 * @param {*} file  文件名
 */
const _resolve = file => resolve => require([`@/components/${file}.vue`], resolve);

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
          name: "discover",
          component: _resolve("views/Discover/index")
        }, {
          path: "/icon",
          name: "Icon",
          component: _resolve("views/iconDemo/index")
        }
      ]
    }, {
      path: "/icon",
      name: "Icon",
      component: _resolve("views/iconDemo/index")
    }
  ]
});
