import { toRefs, reactive, ref } from "vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default {
  name: "Login",
  setup() {
    const $q = useQuasar();
    const auth = reactive({
      email: "",
      password: "",
      check: false,
    });
    const store = useStore();
    const router = useRouter();
    const loginState = computed(() => {
      return store.state.authModule.isLogin;
    });
    const login = () => {
      console.log("Account Name", auth);
      store.dispatch("authModule/login", auth);
      if (loginState.value === true) {
        console.log("success login");

        router.push({ name: "Country" });
      } else {
        $q.notify("Wrong Email or Password!");
      }
    };

    return {
      isPassword: ref(true),
      // password: ref(""),
      ...toRefs(auth),
      loginState,
      icon: ref(false),
      login,
    };
  },
};
