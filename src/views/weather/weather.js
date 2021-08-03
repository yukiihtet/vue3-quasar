import useCommon from "../../util/useCommon";
import { onMounted, ref, watch } from "vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { WEATHER_ICON } from "../../const/Constants";

export default {
  setup() {
    const { commonState, updateErrorStatus } = useCommon();
    const store = useStore();

    const city = ref("Naypyidaw");

    onMounted(() => {
      searchWeatherByCity();
    });

    const searchWeatherByCity = () => {
      store.dispatch("weatherModule/getWeatherByCity", city.value);
    };

    let weather = computed(() => {
      return store.state.weatherModule.weather;
    });

    const weatherICON = computed(() => {
      if (store.state.weatherModule.weather.weather !== undefined) {
        return `${WEATHER_ICON}${store.state.weatherModule.weather.weather[0].icon}@2x.png`;
      } else {
        return "";
      }
    });

    let searchKeyword = ref("");

    const searchCity = () => {
      store.dispatch("weatherModule/getWeatherByCity", searchKeyword.value);
    };

    const clearSearch = () => {
      searchKeyword.value = "";
      searchWeatherByCity();
    };

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
      weather,
      searchWeatherByCity,
      weatherICON,
      searchKeyword,
      searchCity,
      clearSearch,
      commonState,
    };
  },
};
