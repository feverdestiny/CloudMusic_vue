<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
html,
body {
  // overflow: hidden;
}
#app {
  background: #f5f5f5;
}
.f-cb {
}
.f-cb:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
</style>
