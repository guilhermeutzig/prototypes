<template>
  <Section valign="top">
    <Header text="Cardápio" />
    <Card v-for="product in products" :key="product.name" :card="product" />
  </Section>
</template>

<style lang="scss" scoped>
header {
  margin-bottom: 44px;
}

.card:not(:last-child) {
  margin-bottom: 20px;
}
</style>

<script>
import Section from './../components/Section';
import Header from './../components/Header';
import Card from './../components/Card';

export default {
  components: {
    Section,
    Header,
    Card
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then((res) => this.products = res.data)
  }
}
</script>
