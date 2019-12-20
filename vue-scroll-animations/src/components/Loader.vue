<template>
  <div class="loader">
    <div class="container"></div>
  </div>
</template>

<script>
import lottie from "lottie-web";

import animationData from "./../assets/animations/loader.json";

export default {
  name: "Loader",
  mounted() {
    lottie.loadAnimation({
      container: this.$el.querySelector(".container"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData
    });
  }
};
</script>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #2864f6;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: opacity 500ms linear;
}

.loader.hide {
  opacity: 0;
}

.container {
  width: 280px;
}
</style>
