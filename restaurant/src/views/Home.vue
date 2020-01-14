<template>
  <Section valign="top">
    <Header text="Cardápio" />
    <Card />
  </Section>
</template>

<script>
import Section from './../components/Section';
import Header from './../components/Header';
import Card from './../components/Card';

export default {
  components: {
    Section,
    Header,
    Card
  }
}
</script>
