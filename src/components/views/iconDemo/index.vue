<template>
  <div>
      <div style="margin-left:60px;">
          <p> 图标名称：menu</p>
          <p> 代码案列：{{code}}</p>
         
      </div>
      <ul class="icon-demo" v-for="item in iconsMap" :key="item">
          <li>
               <base-icon class="bac-icon"  :icon="item" />
               <p>{{item}}</p>
          </li>
          
            </ul>
  </div>
</template>

<script>
import icons from "./createIconMap";
export default {
  name: "icon",
  data() {
    return {
      iconsMap: [],
      code: '<base-icon icon="menu"/>'
    };
  },
  mounted() {
    console.log(2222);
    console.log(icons.state.iconsMap);
    const iconsMap = icons.state.iconsMap.map(i => {
      return i.default.id.split("-")[1];
    });
    this.iconsMap = iconsMap;
    console.log(3333,this.iconsMap);
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
.icon-demo {
  list-style: none;
  // overflow: hidden;
  li {
    float: left;
    width: 60px;
    text-align: center;
    padding:  20px;
    height: 80px;
    .bac-icon {
      font-size: 50px;
      color: #3a8ee6;
    }
    p {
      text-align: center;
        font-size: 14px;
    }
  }
}
</style>
