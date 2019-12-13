<template>
  <li class="user">
    <label class="user__label">
      <div class="user__text-field mdc-text-field">
        <input
          class="user__input mdc-text-field__input"
          type="text"
          :value="userName"
          :disabled="!editEnabled"
          @change="setUsername($event.target.value)"
          @blur="doneEdition()"
        >
        <div class="mdc-line-ripple" />
      </div>
      <span
        v-if="error"
        class="user__error"
      >Nome já escolhido!</span>
    </label>
    <div>
      <button
        class="user__button mdc-button mdc-button--raised"
        :disabled="editEnabled"
        @click="toggleEdit()"
      >
        Editar
      </button>
      <button
        class="user__button mdc-button mdc-button--raised"
        @click="removeUser"
      >
        Excluir
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      default: () => {}
    },
    name: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      editEnabled: false,
      userName: '',
      error: false,
      inputChanged: false,
    }
  },
  created() {
    this.setUsername(this.name);
    this.inputChanged = false;
  },
  methods: {
    toggleEdit() {
      this.editEnabled = !this.editEnabled;
    },
    doneEdition() {
      if (this.inputChanged) {
        const users = this.$store.getters.getUsers;
        const filter = users.filter(user => this.userName == user);
        if (filter.length) {
          this.error = true;
        } else {
          this.inputChanged = false;
          this.editEnabled = false;
          this.error = false;
          this.$store.dispatch('editUserAction', { name: this.userName, index: this.index });
        }
      } else {
        this.editEnabled = false;
      }
    },
    removeUser() {
      this.$store.dispatch('removeUserAction', this.index);
    },
    setUsername(value) {
      this.inputChanged = true;
      this.userName = value;
    }
  }
}
</script>
