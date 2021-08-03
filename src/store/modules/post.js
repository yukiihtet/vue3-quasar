import postAPI from "../../api/post/post";
import useCommon from "../../util/useCommon";
const { updateLoadingStatus, updateErrorStatus } = useCommon();
const postModule = {
  namespaced: true,
  state: () => ({
    post: {},
    posts: [],
  }),
  mutations: {
    getPostList(state, posts) {
      state.posts = posts;
    },
    getPostByID(state, post) {
      state.post = post;
    },
    createPost(state, post) {
      state.posts.push(post);
    },
    updatePost(state, post) {
      const index = state.posts.findIndex((update) => {
        return update.id === post.id;
      });
      console.log("update index", post.id);
      if (index !== -1) {
        state.posts[index] = post;
      }
    },
    AddPost(state, post) {
      state.post = post;
    },
    deletePost(state, id) {
      let index = state.posts.findIndex((searchpost) => searchpost.id === id);
      console.log("delete post index ", id);
      if (index !== -1) {
        state.posts.splice(index, 1);
      }
    },
  },
  actions: {
    getPostList({ commit }) {
      updateLoadingStatus({ loading: true });
      postAPI
        .getPostList()
        .then((response) => {
          console.log(response.data);
          commit("getPostList", response.data);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        })
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
    getPostByID({ commit }, id) {
      updateLoadingStatus({ loading: true });
      postAPI
        .getPostByID(id)
        .then((response) => {
          console.log(response.data);
          commit("getPostByID", response.data);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        })
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
    createPost({ commit }, post) {
      updateLoadingStatus({ loading: true });
      postAPI
        .createPost(post)
        .then((response) => {
          console.log(response.data);
          updateLoadingStatus({ loading: false });
          commit("createPost", response.data);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        });
    },
    updatePost({ commit }, post) {
      updateLoadingStatus({ loading: true });
      postAPI
        .updatePost(post)
        .then((response) => {
          console.log(response.data);
          updateLoadingStatus({ loading: false });
          commit("updatePost", post);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        });
    },
    addPost({ commit }, post) {
      commit("AddPost", post);
    },
    deletePost({ commit }, id) {
      updateLoadingStatus({ loading: true });
      postAPI
        .deletePost(id)
        .then((response) => {
          console.log(response.data);
          commit("deletePost", id);
        })
        .catch(() => {
          updateErrorStatus({ error: true });
        })
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
  },
  getters: {},
};

export default postModule;
