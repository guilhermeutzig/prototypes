<template>
  <main>
    <Loader v-if="loaderShowing" />
    <section class="logo">
      <img src="./assets/logo.jpeg" alt="ZFlow" />
      <button class="scroll-down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="51"
          viewBox="0 0 43 51"
          class="intro-arrow svelte-1hzidvp"
        >
          <g data-name="Group 1" transform="translate(-939 -554)">
            <g
              data-name="Polygon 1"
              transform="translate(982 591) rotate(180)"
              fill="none"
            >
              <path d="M21.5,0,43,37H0Z" stroke="none" />
              <path
                d="M 21.5 3.980747222900391 L 3.475299835205078 35 L 39.52470016479492
        35 L 21.5 3.980747222900391 M 21.5 0 L 43 37 L 0 37 L 21.5 0 Z"
                stroke="none"
                fill="#fff"
              />
            </g>
            <g
              data-name="Polygon 2"
              transform="translate(982 605) rotate(180)"
              fill="none"
            >
              <path d="M21.5,0,43,37H0Z" stroke="none" />
              <path
                d="M 21.5 3.980747222900391 L 3.475299835205078 35 L 39.52470016479492
        35 L 21.5 3.980747222900391 M 21.5 0 L 43 37 L 0 37 L 21.5 0 Z"
                stroke="none"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
      </button>
    </section>
    <ScrollSection />
    <FixedNavSection />
    <section></section>
  </main>
</template>

<script>
import Elevator from "elevator.js";

import ScrollSection from "./components/ScrollSection";
import FixedNavSection from "./components/FixedNavSection";
import Loader from "./components/Loader";

export default {
  name: "App",
  components: {
    ScrollSection,
    FixedNavSection,
    Loader
  },
  data() {
    return {
      loaderShowing: true
    };
  },
  mounted() {
    new Elevator({
      element: document.querySelector(".scroll-down"),
      targetElement: document.querySelector(".scroll-target"),
      duration: 2000
    });
    setTimeout(() => {
      document.querySelector(".loader").classList.add("hide");
      setTimeout(() => {
        this.loaderShowing = false;
      }, 500);
    }, 3000);
  }
};
</script>

<style>
main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  position: relative;
}

html,
body {
  height: 100%;
  margin: 0;
}

* {
  box-sizing: border-box;
}

section.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

section {
  background-color: #2864f6;
  min-height: 100%;
  position: relative;
  padding: 60px 0;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.scroll-down {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: 0;
  cursor: pointer;
  animation: up-down 2s infinite;
}

@keyframes up-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
