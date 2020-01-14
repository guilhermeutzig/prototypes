<template>
  <div class="card">
    <img src="http://placehold.it/258x168" alt="">
    <div class="body">
      <ul class="stars">
        <li><Star /></li>
        <li><Star /></li>
        <li><Star /></li>
        <li><Star /></li>
        <li><Star :disabled="true" /></li>
      </ul>
      <h3>Hambúrguer de bacon</h3>
      <p>Ingredientes: pão, carne, queijo, cebola, tomate, alface, molho barbecue e bacon</p>
      <div class="bottom">
        <h2>R$ 25,00</h2>
        <Button text="Adicionar ao carrinho" width="165" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: black;
  color: white;
}

img {
  display: block;
  margin: 0;
  width: 100%;
  max-height: 160px;
}

.body {
  padding: 10px;
}

.stars {
  padding: 0;
  margin: 0 0 6px;
  list-style: none;
  display: flex;
  align-items: center;
}

li:not(:first-child) {
  margin-right: 2px;
}

h3 {
  font-size: 16px;
  margin: 0 0 5px;
}

p {
  font-size: 10px;
  margin: 0 0 25px;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h2 {
  font-size: 24px;
  margin: 0;
}
</style>

<script>
import Star from './../components/Star';
import Button from './../components/Button';

export default {
  components: {
    Star,
    Button
  }
}
</script>