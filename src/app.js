import MainContent from "./views/mainContent/MainContent.vue";
import Login from "./views/auth/Login.vue";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import useCommon from "./util/useCommon";
import { date } from "quasar";

export default {
  name: "LayoutDefault",
  setup() {
    const store = useStore();
    const router = useRouter();
    const { commonState } = useCommon();
    let loginState = computed(() => {
      return store.state.authModule.isLogin;
    });
    const todayDate = computed(() => {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd D MMMM");
    });

    const auth = computed(() => {
      return store.state.authModule.loginUser;
    });

    const title = ref("default");

    router.beforeEach((to) => {
      title.value = to.name;
    });

    const logout = () => {
      store.dispatch("authModule/logout", false);
      router.push({ name: "Login" });
    };

    return {
      leftDrawerOpen: ref(false),
      loginState,
      todayDate,
      auth,
      title,
      logout,
      commonState,
    };
  },
  components: {
    MainContent,
    Login,
  },
};
