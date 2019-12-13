<template>
  <form class="form">
    <div class="form__text-field mdc-text-field">
      <input type="text" id="name" class="mdc-text-field__input">
      <div class="mdc-line-ripple"></div>
      <label class="mdc-floating-label" for="name">Nome</label>
    </div>
    <div class="form__text-field mdc-text-field">
      <input type="text" id="email" class="mdc-text-field__input">
      <label class="mdc-floating-label" for="email">E-mail</label>
      <div class="mdc-line-ripple"></div>
    </div>
    <div class="form__text-field mdc-text-field">
      <input type="password" id="password" class="mdc-text-field__input">
      <label class="mdc-floating-label" for="password">Senha</label>
      <div class="mdc-line-ripple"></div>
    </div>
    <button class="form__button mdc-button mdc-button--raised">
      Enviar
    </button>
  </form>
</template>

<script>
import {MDCTextField} from '@material/textfield';

export default {
  name: 'Form',
  mounted() {
    this.instanceInputs();
  },
  methods: {
    instanceInputs() {
      const inputs = document.querySelectorAll('.mdc-text-field');
      inputs.forEach((input) => new MDCTextField(input));
    }
  }
}
</script>
