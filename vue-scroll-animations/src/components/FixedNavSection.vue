<template>
  <div class="fixed-nav-section">
    <div class="container">
      <div class="reference first"></div>
      <div class="reference second"></div>
      <div class="reference third"></div>
      <div class="content">
        <div class="box"></div>
        <div class="bar">
          <div class="bg"></div>
          <span class="divisor"></span>
          <span class="divisor"></span>
          <span class="divisor"></span>
          <div class="fill"></div>
        </div>
        <ul class="items">
          <li class="item active">
            <p class="item-title">Praesentium ullam</p>
            <p class="item-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              nemo odio at nisi aut ad, exercitationem similique natus
              dignissimos enim dolor rem harum eaque.
            </p>
          </li>
          <li class="item">
            <p class="item-title">Lorem ipsum dolor</p>
            <p class="item-description">
              Sit amet consectetur adipisicing elit. Saepe nemo odio at nisi aut
              ad, exercitationem similique natus dignissimos enim dolor rem
              harum eaque. Lorem ipsum
            </p>
          </li>
          <li class="item">
            <p class="item-title">Saepe nemo odio</p>
            <p class="item-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              nemo odio at nisi aut ad, exercitationem similique natus
              dignissimos enim dolor rem harum eaque.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Elevator from "elevator.js";

export default {
  name: "FixedNavSection",
  data() {
    return {
      y: 0,
      x: 0,
      width: 0
    };
  },
  data() {
    return {
      fixed: false,
      finalY: 0,
      finalContentY: 0
    };
  },
  mounted() {
    this.instanceAnchors();
    window.addEventListener("scroll", () => this.onScroll());
  },
  beforeDestroy() {
    window.removeEventListener("scroll", () => this.onScroll());
  },
  methods: {
    instanceAnchors() {
      const references = this.$el.querySelectorAll(".reference");
      const items = this.$el.querySelectorAll(".item");
      references.forEach((reference, i) => {
        new Elevator({
          element: items[i].querySelector(".item-title"),
          targetElement: reference,
          duration: 1000,
          verticalPadding: window.innerHeight / 4
        });
        console.log(reference);
      });
    },
    onScroll() {
      this.contentPositioning();
      this.barFilling();
      this.itemsCheck();
    },
    reset() {
      this.y = 0;
      this.x = 0;
      this.width = 0;
      this.finalY = 0;
      this.finalContentY = 0;
    },
    contentPositioning() {
      const barFill = this.$el.querySelector(".fill");
      const content = this.$el.querySelector(".content");
      const y =
        this.$el.getBoundingClientRect().y -
        window.innerHeight / 2 +
        content.getBoundingClientRect().height / 2;

      this.finalContentY =
        this.$el.getBoundingClientRect().y +
        this.$el.getBoundingClientRect().height -
        content.getBoundingClientRect().height / 2 -
        window.innerHeight / 2;

      if (y <= 0) {
        if (this.finalContentY <= 0) {
          content.style.position = "absolute";
          content.style.bottom = "0";
          content.style.left = this.x;
          content.style.top = "auto";
          barFill.style.top = "0";
          this.fixed = false;
        } else {
          if (this.y == 0 && this.x == 0 && this.width == 0) {
            this.y = content.getBoundingClientRect().y;
            this.x = content.getBoundingClientRect().x;
            this.width = content.getBoundingClientRect().width;
          }
          this.fixed = true;
          content.style.position = "fixed";
          content.style.top = this.y + "px";
          content.style.left = this.x + "px";
          content.style.width = this.width + "px";
        }
      } else {
        content.removeAttribute("style");
        this.fixed = false;
        this.reset();
      }
    },
    barFilling() {
      if (this.fixed) {
        const content = this.$el.querySelector(".content");
        const barFill = this.$el.querySelector(".fill");
        if (!this.finalY) this.finalY = this.finalContentY;
        const percentage = -Math.abs((this.finalContentY * 100) / this.finalY);
        barFill.style.top = percentage + "%";
      }
    },
    itemsCheck() {
      const content = this.$el.querySelector(".content");
      const references = this.$el.querySelectorAll(".reference");
      const items = this.$el.querySelectorAll(".item");

      references.forEach((reference, i) => {
        const referenceY =
          reference.getBoundingClientRect().y -
          window.innerHeight / 2 +
          content.getBoundingClientRect().height / 2;

        const referenceFinalY =
          referenceY + reference.getBoundingClientRect().height;

        if (referenceY <= 0) {
          if (referenceFinalY <= 0) {
            items[i].classList.remove("active");
          } else {
            items[i].classList.add("active");
          }
        } else {
          items[i].classList.remove("active");
        }
      });
    }
  }
};
</script>

<style scoped>
.fixed-nav-section {
  height: 1800px;
  background-color: #2864f6;
  position: relative;
}

h1 {
  color: white;
  text-align: center;
  width: 100%;
  margin: 0 0 60px;
  font-size: 24px;
}

.content {
  height: 600px;
  display: flex;
  justify-content: space-between;
}

.box {
  height: 100%;
  width: 40%;
  background-color: #f9b000;
  border: 20px solid #eb6700;
}

.bar {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  overflow-y: hidden;
}

.bg {
  width: 1px;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  margin-left: -1px;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  z-index: 1;
}

.fill {
  top: -100%;
  left: 50%;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  background-color: #f9b000;
  position: absolute;
  z-index: 2;
  transition: 150ms linear;
}

.divisor {
  height: 4px;
  width: 16px;
  border-radius: 3px;
  background-color: white;
  margin-left: -8px;
  position: relative;
  z-index: 3;
}

.items {
  width: 45%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  height: 100%;
  position: relative;
}

.item {
  color: white;
  opacity: 0.5;
}

.item.active {
  opacity: 1;
}

.item.active .item-description {
  height: 66px;
}

.item-title {
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 5px;
  cursor: pointer;
}

.item-description {
  font-size: 16px;
  margin: 0;
  max-width: 480px;
  height: 0;
  overflow: hidden;
  transition: 100ms linear;
}

.item:nth-child(2) {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.item:last-child {
  position: absolute;
  left: 0;
  bottom: 0;
}

.reference {
  position: absolute;
  left: 0;
  width: 100%;
  height: 33.33%;
}

.reference.first {
  top: 0;
}

.reference.second {
  top: 33.33%;
}

.reference.third {
  top: 66.66%;
}
</style>
