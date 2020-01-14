<template>
  <section :class="valign">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: auto;

  &.top {
    justify-content: flex-start;
    padding-top: 20px;
  }
}
</style>

<script>
export default {
  props: {
    valign: {
      type: String,
      default: ''
    }
  }
}
</script>