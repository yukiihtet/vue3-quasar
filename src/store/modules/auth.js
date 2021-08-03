const authModule = {
  namespaced: true,
  state: () => ({
    authUser: [
      {
        email: "user@gmail.com",
        password: "userpassword",
        name: "User",
        role: "user",
      },
      {
        email: "admin@gmail.com",
        password: "adminpassword",
        name: "Admin",
        role: "admin",
      },
    ],
    loginUser: {},
    isLogin: false,
  }),
  mutations: {
    login(state, user) {
      let index = state.authUser.findIndex(
        (auth) => auth.email === user.email && auth.password === user.password
      );
      if (index !== -1) {
        state.isLogin = true;
        state.loginUser = state.authUser[index];
      }
    },
    Logout(state, logout) {
      state.isLogin = logout;
    },
  },
  actions: {
    login({ commit }, user) {
      commit("login", user);
    },
    logout({ commit }, logout) {
      commit("Logout", logout);
    },
  },
};

export default authModule;
