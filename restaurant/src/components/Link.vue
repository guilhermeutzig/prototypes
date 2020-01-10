<template>
  <router-link :to="href">{{ text }}</router-link>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#'
    },
    text: {
      type: String,
      default: 'Link'
    },
  }
}
</script>