import userAPI from "../../api/user/user.js";
import useCommon from "../../util/useCommon.js";
const { updateLoadingStatus } = useCommon();
const userModule = {
  namespaced: true,
  state: () => ({
    user: {},
    users: [],
  }),
  mutations: {
    getUserList(state, users) {
      state.users = users;
    },
    createUser(state, user) {
      state.users.push(user);
    },
    updateUser(state, user) {
      let index = state.users.findIndex(
        (searchUser) => searchUser.id === user.id
      );
      console.log("update user index", user);
      if (index !== -1) {
        state.users[index] = user;
      }
    },
    deleteUser(state, id) {
      const index = state.users.findIndex((user) => {
        console.log("delete user index", id);
        return user.id === id;
      });
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
  },
  actions: {
    getUserList({ commit }) {
      updateLoadingStatus({ loading: true });
      userAPI
        .getUserList()
        .then((response) => {
          updateLoadingStatus({ loading: false });
          console.log("users res :: ", response.data);
          commit("getUserList", response.data);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        })
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
    createUser({ commit }, user) {
      updateLoadingStatus({ loading: true });
      userAPI
        .createUser(user)
        .then((response) => {
          console.log(response.data);
          updateLoadingStatus({ loading: false });
          commit("createUser", response.data);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        })
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
    updateUser({ commit }, user) {
      updateLoadingStatus({ loading: true });
      userAPI
        .updateUser(user)
        .then((response) => {
          updateLoadingStatus({ loading: false });
          console.log(response.data);
          commit("updateUser", user);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        })
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
    deleteUser({ commit }, id) {
      updateLoadingStatus({ loading: true });
      userAPI
        .deleteUser(id)
        .then((response) => {
          updateLoadingStatus({ loading: false });
          console.log(response);
          commit("deleteUser", id);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        })
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
  },
};

export default userModule;
