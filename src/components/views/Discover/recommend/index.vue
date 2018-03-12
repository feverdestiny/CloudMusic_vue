<template>
    <div>
        <carousel />
      <div class="sd">热门推荐</div>
    </div>
</template>

<script>
import Carousel from "./Carousel"; //轮播图
export default {
  data() {
    return {};
  },
  components: {
    Carousel
  }
};
</script>

<style lang="scss" scoped>

.sd {
  width: 980px;
  min-height: 700px;
  _height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}
</style>


