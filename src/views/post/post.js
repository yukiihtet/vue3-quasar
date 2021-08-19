import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref, watch, reactive, toRefs } from "vue";
import useCommon from "../../util/useCommon";
import { useRoute, useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default {
  name: "Post List",
  setup() {
    let post = reactive({
      title: "",
      body: "",
    });
    const store = useStore();
    const $q = useQuasar();
    const route = useRoute();
    const $router = useRouter();
    store.dispatch("postModule/getPostList");

    const { commonState, updateErrorStatus } = useCommon();

    const posts = computed(() => {
      return store.state.postModule.posts;
    });

    const authUser = computed(() => {
      return store.state.authModule.loginUser;
    });

    const getPostDetail = () => {
      store.dispatch("postModule/getPostByID", route.params.id);
    };
    // const editPost = (post) => {
    //   store.dispatch("postModule/addPost", post);
    //   $router.push({ name: "CreatePost", params: { isEdit: true } });
    // };

    const editPost = (edit) => {
      show.value = true;
      post.id = edit.id;
      post.title = edit.title;
      post.body = edit.body;
      isEdit.value = true;
      console.log("post", edit);
    };
    const updatePost = () => {
      store.dispatch("postModule/updatePost", post);
      show.value = false;
      $q.notify("Post updated");
    };

    const deletePost = (index) => {
      $q.dialog({
        title: "Confirm",
        message: "Really Delete?",
        ok: {
          push: true,
          color: "negative",
        },
        cancel: {
          push: true,
          color: "grey",
        },
        persistent: true,
      }).onOk(() => {
        deleteIndex.value = index;
        store.dispatch("postModule/deletePost", deleteIndex.value);

        $q.notify("Post Deleted");
        show.value = false;
        edit.value = false;
      });
    };
    const deleteIndex = ref(-1);

    const show = ref(false);
    const edit = ref(false);

    watch(commonState.error, (newStatus) => {
      if (newStatus === true) {
        setTimeout(() => updateErrorStatus({ error: false }), 5000);
      }
    });
    const isEdit = ref(false);
    return {
      posts,
      authUser,
      show,
      updatePost,
      commonState,
      getPostDetail,
      editPost,
      isEdit,
      deletePost,
      ...toRefs(post),
    };
  },
};
