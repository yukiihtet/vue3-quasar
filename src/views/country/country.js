import { ref, watch } from "vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

import useCommon from "../../util/useCommon";

export default {
  setup() {
    const store = useStore();
    store.dispatch("countryModule/getCountryData");

    const { commonState, updateErrorStatus } = useCommon();

    let countries = computed(() => {
      return store.state.countryModule.countries;
    });

    let searchKeyword = ref("");

    const searchCapital = () => {
      store.dispatch("countryModule/getCountryList", searchKeyword.value);
    };

    const clearSearch = () => {
      searchKeyword.value = "";
      store.dispatch("countryModule/getCountryData");
    };

    const authUser = computed(() => {
      return store.state.authModule.loginUser;
    });
    watch(
      () => {
        return { ...commonState };
      },
      (newValue) => {
        if (newValue.error === true) {
          setTimeout(() => {
            updateErrorStatus({ error: false });
          }, 4000);
        }
      }
    );

    return {
      countries,
      searchKeyword,
      searchCapital,
      clearSearch,
      commonState,
      authUser,
    };
  },
};
