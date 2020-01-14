<template>
  <div class="employees">
    <ul class="cards small first">
      <li class="card" @click="openCardsContent()">
        <img src="../assets/employee.webp" alt />
      </li>
      <li class="card" @click="openCardsContent()">
        <img src="../assets/employee.webp" alt />
      </li>
      <li class="card" @click="openCardsContent()">
        <img src="../assets/employee.webp" alt />
      </li>
      <li class="card" @click="openCardsContent()">
        <img src="../assets/employee.webp" alt />
      </li>
      <li class="card" @click="openCardsContent()">
        <img src="../assets/employee.webp" alt />
      </li>
      <li class="card" @click="openCardsContent()">
        <img src="../assets/employee.webp" alt />
      </li>
    </ul>
    <div class="cards-content">
      <div class="cards-content-holder">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum amet
          dignissimos saepe corrupti perferendis rem harum magnam quod, aut
          soluta explicabo beatae velit voluptatum, doloribus recusandae! Odit
          facere cum expedita.
        </p>
        <p>
          Eum amet dignissimos saepe corrupti perferendis rem harum magnam quod,
          aut soluta explicabo beatae velit voluptatum, doloribus recusandae!
          Odit facere cum expedita.
        </p>
      </div>
    </div>
    <ul class="cards">
      <li class="card no-background" @click="flipCard($event)">
        <div class="card-front">
          <img src="../assets/employee.webp" alt />
        </div>
        <div class="card-back">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum amet
            dignissimos saepe corrupti perferendis rem harum magnam quod, aut
            soluta explicabo beatae velit voluptatum, doloribus recusandae! Odit
            facere cum expedita.
          </p>
          <p>
            Eum amet dignissimos saepe corrupti perferendis rem harum magnam
            quod, aut soluta explicabo beatae velit voluptatum, doloribus
            recusandae! Odit facere cum expedita.
          </p>
        </div>
      </li>
      <li class="card no-background" @click="flipCard($event)">
        <div class="card-front">
          <img src="../assets/employee.webp" alt />
        </div>
        <div class="card-back">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum amet
            dignissimos saepe corrupti perferendis rem harum magnam quod, aut
            soluta explicabo beatae velit voluptatum, doloribus recusandae! Odit
            facere cum expedita.
          </p>
          <p>
            Eum amet dignissimos saepe corrupti perferendis rem harum magnam
            quod, aut soluta explicabo beatae velit voluptatum, doloribus
            recusandae! Odit facere cum expedita.
          </p>
        </div>
      </li>
      <li class="card no-background" @click="flipCard($event)">
        <div class="card-front">
          <img src="../assets/employee.webp" alt />
        </div>
        <div class="card-back">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum amet
            dignissimos saepe corrupti perferendis rem harum magnam quod, aut
            soluta explicabo beatae velit voluptatum, doloribus recusandae! Odit
            facere cum expedita.
          </p>
          <p>
            Eum amet dignissimos saepe corrupti perferendis rem harum magnam
            quod, aut soluta explicabo beatae velit voluptatum, doloribus
            recusandae! Odit facere cum expedita.
          </p>
        </div>
      </li>
    </ul>
    <ul class="cards small">
      <li class="card" @click="openUserPage()">
        <img src="../assets/employee.webp" alt />
      </li>
      <li class="card" @click="openUserPage()">
        <img src="../assets/employee.webp" alt />
      </li>
      <li class="card" @click="openUserPage()">
        <img src="../assets/employee.webp" alt />
      </li>
      <li class="card" @click="openUserPage()">
        <img src="../assets/employee.webp" alt />
      </li>
      <li class="card" @click="openUserPage()">
        <img src="../assets/employee.webp" alt />
      </li>
      <li class="card" @click="openUserPage()">
        <img src="../assets/employee.webp" alt />
      </li>
    </ul>
    <div class="user-page">
      <div class="container">
        <h3 @click="goBack()">Go back</h3>
        <div class="user">
          <img src="../assets/employee.webp" alt />
          <div>
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum amet
              dignissimos saepe corrupti perferendis rem harum magnam quod, aut
              soluta explicabo beatae velit voluptatum, doloribus recusandae!
              Odit facere cum expedita.
            </p>
            <p>
              Eum amet dignissimos saepe corrupti perferendis rem harum magnam
              quod, aut soluta explicabo beatae velit voluptatum, doloribus
              recusandae! Odit facere cum expedita.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum amet
              dignissimos saepe corrupti perferendis rem harum magnam quod, aut
              soluta explicabo beatae velit voluptatum, doloribus recusandae!
              Odit facere cum expedita. Eum amet dignissimos saepe corrupti
              perferendis rem harum magnam quod, aut soluta explicabo beatae
              velit voluptatum, doloribus recusandae! Odit facere cum expedita.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum amet
              dignissimos saepe corrupti perferendis rem harum magnam quod, aut
              soluta explicabo beatae velit voluptatum, doloribus recusandae!
              Odit facere cum expedita.
            </p>
            <p>
              Eum amet dignissimos saepe corrupti perferendis rem harum magnam
              quod, aut soluta explicabo beatae velit voluptatum, doloribus
              recusandae! Odit facere cum expedita.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { TweenMax, TimelineMax, Quint } from 'gsap/all'

gsap.registerPlugin(TweenMax, TimelineMax, Quint);

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
    },
    openUserPage() {
      const body = document.querySelector("body");
      const main = document.querySelector("main");
      const userPage = this.$el.querySelector(".user-page");

      TweenMax.to(main, 1, { left: "-100%", ease: Quint.easeOut });
      TweenMax.to(userPage, 1, { left: 0, ease: Quint.easeOut });
      TweenMax.set(body, { overflow: "hidden" });
    },
    openCardsContent() {
      const cardsContent = this.$el.querySelector(".cards-content");

      if (cardsContent.getAttribute("open") == "open") {
        cardsContent.classList.remove("open");
        cardsContent.setAttribute("open", "closed");
      } else {
        cardsContent.classList.add("open");
        cardsContent.setAttribute("open", "open");
      }
    },
    goBack() {
      const body = document.querySelector("body");
      const main = document.querySelector("main");
      const userPage = this.$el.querySelector(".user-page");

      TweenMax.to(main, 1, { left: "0", ease: Quint.easeOut });
      TweenMax.to(userPage, 1, { left: "100%", ease: Quint.easeOut });
      TweenMax.set(body, { overflow: "scroll" });
    },
    flipCard({ target }) {
      if (target.getAttribute("turned") == "turned") {
        this.animateCardFlipping(target, 0, 180, 0, 50);
        target.setAttribute("turned", "");
      } else {
        this.animateCardFlipping(target, 180, 0, 50, 0);
        target.setAttribute("turned", "turned");
      }
    },
    animateCardFlipping(
      target,
      frontCardRotation,
      backCardRotation,
      firstZ,
      secondZ
    ) {
      const frontCard = target.querySelector(".card-front");
      const backCard = target.querySelector(".card-back");
      const tl = new TimelineMax();
      tl.to(frontCard, 1, { rotationY: frontCardRotation })
        .to(backCard, 1, { rotationY: backCardRotation }, 0)
        .to(target, 0.5, { z: firstZ }, 0)
        .to(target, 0.5, { z: secondZ }, 0.5);
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
  height: 400px;
  width: calc(33.33% - 20px);
  position: relative;
  cursor: pointer;
}

.card img {
  height: 100%;
  width: 100%;
}

.card.no-background {
  border: 0;
  background-color: transparent;
}

.cards-content {
  margin-top: 0;
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 300ms ease-out;
}

.cards-content-holder {
  background-color: black;
  color: white;
  padding: 20px;
  margin-top: 20px;
}

.cards-content.open {
  height: 232px;
}

.cards-content h1 {
  margin-top: 0;
}

.cards-content::before {
  content: "";
  height: 15px;
  width: 15px;
  background-color: black;
  position: absolute;
  top: 12px;
  left: 15px;
  transform: rotate(45deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  pointer-events: none;
}

.card-back {
  background-color: black;
  color: white;
  transform: rotateY(-180deg);
  padding: 20px;
}

.card-back h1 {
  text-align: center;
}

.card-front img {
  height: 100%;
  width: 100%;
}

.cards.small .card {
  width: calc(16.66% - 20px);
  height: 200px;
}

.user-page {
  position: fixed;
  z-index: 999;
  background-color: #2864f6;
  left: 100%;
  top: 0;
  height: 100%;
  width: 100%;
  color: white;
  overflow: scroll;
}

.user-page h3 {
  cursor: pointer;
}
</style>
