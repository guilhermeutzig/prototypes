<template>
  <button :class="{'secondary': secondary}" :style="{ width: width ? `${width}px` : '100%' }">{{ text }}</button>
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
    },
    width: {
      type: String,
      default: undefined
    }
  }
}
</script>