import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref, toRefs, reactive, watch } from "vue";
import useCommon from "../../util/useCommon";
import { useQuasar } from "quasar";

export default {
  name: "User List",
  setup() {
    const $q = useQuasar();
    const store = useStore();
    store.dispatch("userModule/getUserList");

    const { commonState, updateErrorStatus } = useCommon();

    let user = reactive({
      name: "",
      email: "",
      done: false,
    });

    const users = computed(() => {
      console.log("users :: ", store.state.userModule.users);
      return store.state.userModule.users;
    });

    const authUser = computed(() => {
      return store.state.authModule.loginUser;
    });

    const createUser = () => {
      if (user.name !== "" && user.email !== "") {
        store.dispatch("userModule/createUser", user);
        user.id = users.value.length + 1;
        show.value = false;
        $q.notify("User Added");
      }
      (user.name = ""), (user.email = "");
    };

    const deleteUser = (index) => {
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
        store.dispatch("userModule/deleteUser", deleteIndex.value);
        $q.notify("User Deleted");
      });
    };

    // const clear = () => {
    //   (user.name = ""), (user.email = "");
    // };

    watch(commonState.error, (newStatus) => {
      if (newStatus === true) {
        setTimeout(() => updateErrorStatus({ error: false }), 5000);
      }
    });
    const deleteIndex = ref(-1);

    const show = ref(false);

    return {
      users,
      authUser,
      commonState,
      // clear,
      createUser,
      deleteUser,
      ...toRefs(user),
    };
  },
};
