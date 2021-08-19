import { useStore } from "vuex";
//import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { toRefs, reactive, ref } from "vue";
import { useQuasar } from "quasar";

export default {
  name: "CreatePost",

  setup() {
    const $q = useQuasar();
    const store = useStore();
    const $router = useRouter();
    // const $route = useRoute();
    let post = reactive({
      title: "",
      body: "",
    });

    const createPost = () => {
      if (post.title !== "" && post.body !== "") {
        store.dispatch("postModule/createPost", post);
        show.value = false;
        $q.notify("Post Added");
        $router.push("Post");
      }
      (post.title = ""), (post.body = "");
    };

    const show = ref(false);
    return {
      createPost,
      ...toRefs(post),
    };
  },
};
