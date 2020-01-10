<template>
  <section>
    <h1>Cadastro</h1>
    <Input type="text" placeholder="E-mail" name="email" />
    <Input type="password" placeholder="Senha" name="password" />
    <Input type="password" placeholder="Confirmar senha" name="confirm_password" />
    <Button text="Cadastrar" />
    <p>Já tem uma conta? <Link href="/login" text="Faça seu login" /></p>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 0 31px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  font-size: 24px;
  color: white;
  margin: 0 0 26px;
}

input,
button {
  margin-bottom: 15px;
}

p {
  color: white;
  font-size: 12px;
  margin: 0;
}
</style>

<script>
import Input from './../components/Input';
import Button from './../components/Button';
import Link from './../components/Link';

export default {
  components: {
    Input,
    Button,
    Link
  }
}
</script>