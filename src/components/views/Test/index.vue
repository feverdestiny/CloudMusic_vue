<template>
    <div>
        <canvas id="mycanvas" width="300" height="300" class="cav"></canvas>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    const canvas = document.getElementById("mycanvas");
    const context = canvas.getContext("2d");
    const winWidht = document.documentElement.offsetWidth;
    const winHeight = document.documentElement.clientWidth;
    canvas.width = winWidht;
    canvas.height = winHeight;
  },
  methods: {
    init() {}
  }
};
</script>

<style lang="scss" scoped>
.cav {
  background: red;
}
</style>

