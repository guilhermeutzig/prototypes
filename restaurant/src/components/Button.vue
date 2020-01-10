<template>
  <button :class="secondary ? secondary : null">{{ text }}</button>
</template>

<style lang="scss" scoped>
button {
  background-color: #E07676;
  color: white;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 0;
  text-transform: uppercase;
  width: 100%;
  border: 0;
}
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    secondary: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>