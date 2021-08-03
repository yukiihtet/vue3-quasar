import { toRefs, reactive } from "vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  setup() {
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
        alert("Wrong email or password");
      }
    };

    return {
      ...toRefs(auth),
      login,
    };
  },
};
