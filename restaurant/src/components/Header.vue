<template>
  <header>
    <Title :text="text" />
    <svg viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h17v2H0zM0 4h17v2H0zM0 8h17v2H0z"/></g></svg>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
}

svg {
  height: 11px;
  width: 20px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -5px;
}
</style>

<script>
import Title from './../components/Title';

export default {
  props: {
    text: {
      type: String,
      default: 'Header'
    }
  },
  components: {
    Title
  }
}
</script>