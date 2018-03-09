<template>
  <div class="wrap">
    <div class="ban f-pr"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Carousel" //轮播图
    };
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
  }
}
.f-pr {
  position: relative;
  zoom: 1;
}
</style>


