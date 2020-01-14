<template>
  <h1>{{ text }}</h1>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  color: white;
  margin: 0;
}
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Title'
    },
  }
}
</script>