<template>
  <Section>
    <Title text="Cadastro" />
    <Input type="text" placeholder="E-mail" name="email" />
    <Input type="password" placeholder="Senha" name="password" />
    <Input type="password" placeholder="Confirmar senha" name="confirm_password" />
    <Button text="Cadastrar" />
    <p>Já tem uma conta? <Link href="/login" text="Faça seu login" /></p>
  </Section>
</template>

<style lang="scss" scoped>
h1 {
  margin-bottom: 26px;
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
import Section from './../components/Section';
import Input from './../components/Input';
import Button from './../components/Button';
import Link from './../components/Link';
import Title from './../components/Title';

export default {
  components: {
    Input,
    Button,
    Link,
    Section,
    Title
  }
}
</script>