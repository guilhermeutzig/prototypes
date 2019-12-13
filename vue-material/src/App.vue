<template>
  <main>
    <Navigation />
    <router-view />
  </main>
</template>

<script>
import Navigation from './components/Navigation/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>