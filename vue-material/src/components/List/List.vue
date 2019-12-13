<template>
  <ul class="list">
    <User
      v-for="(user, index) in users"
      :key="user + index"
      :name="user"
      :index="index"
    />
  </ul>
</template>

<script>
import User from './../User/User';

export default {
  name: 'List',
  components: {
    User
  },
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
}
</script>
