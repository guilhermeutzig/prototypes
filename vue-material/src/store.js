export default {
  state: {
    users: ['João', 'Guilherme', 'Pedro']
  },
  mutations: {
    addUser(state, payload) {
      state.users.push('');
    },
    editUser(state, payload) {
      const { index, name } = payload;
      state.users[index] = name;
    },
    removeUser(state, payload) {
      state.users.splice(payload, 1);
    }
  },
  actions: {
    addUserAction(context, payload) {
      context.commit('addUser', payload);
    },
    editUserAction(context, payload) {
      context.commit('editUser', payload);
    },
    removeUserAction(context, payload) {
      context.commit('removeUser', payload);
    }
  },
  getters: {
    getUsers(state) {
      return state.users;
    }
  }
}