<template>
  <input :type="type" :placeholder="placeholder" :name="name">
</template>

<style lang="scss" scoped>
input {
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(#000, .5);
  border: 0;
  height: 51px;
  padding-left: 14px;
  width: 100%;
  color: #888888;
  font-size: 12px;
}
</style>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Input'
    },
    name: {
      type: String,
      default: 'input'
    }
  }
}
</script>