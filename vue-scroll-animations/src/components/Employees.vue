<template>
  <div class="employees">
    <ul class="cards small first">
      <li class="card"></li>
      <li class="card"></li>
      <li class="card"></li>
      <li class="card"></li>
      <li class="card"></li>
      <li class="card"></li>
    </ul>
    <ul class="cards">
      <li class="card"></li>
      <li class="card"></li>
      <li class="card"></li>
    </ul>
    <ul class="cards small">
      <li class="card"></li>
      <li class="card"></li>
      <li class="card"></li>
      <li class="card"></li>
      <li class="card"></li>
      <li class="card"></li>
    </ul>
  </div>
</template>

<script>
import { TweenMax } from "gsap";

export default {
  name: "Employees",
  mounted() {
    window.addEventListener("scroll", () => this.onScroll());
  },
  beforeDestroy() {
    window.removeEventListener("scroll", () => this.onScroll());
  },
  methods: {
    onScroll() {
      const cardsLists = this.$el.querySelectorAll(".cards");
      cardsLists.forEach((list, i) => {
        const y = list.getBoundingClientRect().y - window.innerHeight / 2;
        const translate = y + i + 50;
        list.style.transform = `translateY(${translate < 50 ? 0 : 20}px)`;
        list.style.opacity = translate < 50 ? 1 : 0;
      });
    }
  }
};
</script>

<style scoped>
.employees {
  margin-bottom: 300px;
}

.cards {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0;
  margin: 20px 0 0;
  list-style-type: none;
  opacity: 0;
  position: relative;
  transition: 500ms linear;
}

.cards.first {
  margin-top: 80px;
}

.card {
  background-color: #f9b000;
  height: 400px;
  width: calc(33.33% - 20px);
  border: 20px solid #eb6700;
}

.cards.small .card {
  width: calc(16.66% - 20px);
  height: 200px;
}
</style>
