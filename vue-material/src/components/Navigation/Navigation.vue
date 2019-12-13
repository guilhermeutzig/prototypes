<template>
  <ul class="navigation">
    <li class="navigation__item">
      <router-link
        class="navigation__link"
        :to="'/'"
      >
        Usuários
      </router-link>
    </li>
    <li class="navigation__item">
      <router-link
        class="navigation__link"
        :to="'/contato'"
      >
        Contato
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
