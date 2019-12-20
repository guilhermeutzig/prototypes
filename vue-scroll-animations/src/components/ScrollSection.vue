<template>
  <section class="scroll-target">
    <div class="container">
      <h1>Conteúdo com base no scroll</h1>
      <div class="content">
        <div>
          <p class="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eaque
            debitis sapiente odit doloribus porro, in, laborum dolores nobis
            doloremque sed quia. Quisquam consectetur inventore minus,
            exercitationem laborum vel ratione!
            <br />
            <br />Error eaque debitis sapiente odit doloribus porro, in, laborum
            dolores nobis doloremque sed quia. Quisquam consectetur inventore
            minus, exercitationem laborum vel ratione!
          </p>
          <ul class="list">
            <li class="item first">Lorem ipsum dolor</li>
            <li class="item">Aspernatur placeat ea est</li>
            <li class="item">Suscipit fugit cumque</li>
          </ul>
        </div>
        <img
          src="./../assets/img.png"
          alt="Image test"
          class="floating-img right"
        />
      </div>
      <Employees />
    </div>
  </section>
</template>

<script>
import Employees from "./Employees";

export default {
  name: "ScrollSection",
  components: {
    Employees
  },
  data() {
    return {
      translatePoint: null
    };
  },
  mounted() {
    window.addEventListener("scroll", () => this.onScroll());
  },
  beforeDestroy() {
    window.removeEventListener("scroll", () => this.onScroll());
  },
  methods: {
    onScroll() {
      this.imageAnimation();
      this.listAnimation();
    },
    getTranslatePoint() {
      return this.$el.getBoundingClientRect().y - window.innerHeight / 2 / 2;
    },
    imageAnimation() {
      this.translatePoint = this.getTranslatePoint();
      const image = this.$el.querySelector(".floating-img");
      image.style.transform = `translateY(${
        this.translatePoint > 0 ? this.translatePoint : 0
      }px)`;
    },
    listAnimation() {
      this.translatePoint = this.getTranslatePoint();
      const items = this.$el.querySelectorAll(".item");
      items.forEach((item, i) => {
        const translate = this.translatePoint + i * 50;
        item.style.transform = `translateY(${translate < 50 ? 0 : 20}px)`;
        item.style.opacity = translate < 50 ? 1 : 0;
      });
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

h1 {
  color: white;
  text-align: center;
  width: 100%;
  margin: 0 0 60px;
  font-size: 24px;
}

p {
  color: white;
  margin: 0 0 20px;
  max-width: 480px;
}

p.right {
  text-align: right;
  margin-left: auto;
}

.floating-img {
  transition: 500ms ease-out;
  width: 480px;
}

.list {
  padding: 0;
  margin: 0;
  list-style-type: none;
  width: 380px;
}

.list.right {
  text-align: right;
  margin-left: auto;
}

.item {
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  background: #f9b000;
  color: #c34700;
  padding: 10px;
  margin-bottom: 20px;
  transition: 500ms ease-out;
  opacity: 0;
}
</style>
