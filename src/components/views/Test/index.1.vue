<template>
    <div>
        <canvas id="mycanvas" width="300" height="300"></canvas>
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
    const winWidht = document.documentElement.clientWidth;
    const winHeight = document.documentElement.clientHeight;
    canvas.width = winWidht;
    canvas.height = winHeight;
    let dotList = [];
    var img = new Image();
    img.src = require("assets/img.jpg");
    if (img.complete) {
      init();
    } else {
      img.onload = () => {
        init();
      };
    }

    function init() {
      console.log(winWidht, winHeight);

      var imgW = img.width,
        imgH = img.height,
        sx = winWidht / 2 - imgW / 2,
        sy = winHeight / 2 - imgH / 2;
      context.drawImage(img, sx, sy);
      var imgData = context.getImageData(sx, sy, imgW, imgH);
      console.log(imgData);
      for (var x = 0; x < imgData.width; x += 6) {
        for (var y = 0; y < imgData.height; y += 6) {
          var i = (y * imgData.width + x) * 4;
          if (imgData.data[i + 3] > 128 && imgData.data[i] < 100) {
            var dot = new Dot(x, y, 2);
            dotList.push(dot);
          }
        }
      }
      draw();
    }
    function Dot(centerX, centerY, radius) {
      this.x = centerX;
      this.y = centerY;
      this.radius = radius;
    }

    function draw() {
      console.log(222);
      var imgW = img.width,
        imgH = img.height,
        sx = winWidht / 2 - imgW / 2,
        sy = winHeight / 2 - imgH / 2;
      context.clearRect(0, 0, winWidht, winHeight);
      context.fillStyle = "#000";
      dotList.forEach(item => {
        context.save();
        context.beginPath();
        context.arc(sx + item.x, sy + item.y, item.radius, 0, Math.PI * 2);
        context.fill();
        context.restore();
      });
    }
  },
  methods: {
    init() {}
  }
};
</script>
