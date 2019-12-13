<template>
  <main>
    <h1 class="main-title">
      Usuários
    </h1>
    <List
      v-if="users"
      :users="users"
    />
    <button
      class="add-user mdc-button mdc-button--raised"
      @click="addUser()"
    >
      Adicionar usuário
    </button>
  </main>
</template>

<script>
import {MDCTextField} from '@material/textfield';
import List from './../components/List/List.vue';

export default {
  name: 'Users',
  components: {
    List
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.users = this.$store.getters.getUsers;
  },
  mounted() {
    this.instanceInputs();
  },
  methods: {
    addUser() {
      this.$store.dispatch('addUserAction', '');
    },
    instanceInputs() {
      const inputs = document.querySelectorAll('.mdc-text-field');
      inputs.forEach((input) => new MDCTextField(input));
    }
  }
}
</script>