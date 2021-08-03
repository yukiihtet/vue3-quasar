import countryAPI from "../../api/country/country";
import useCommon from "../../util/useCommon";
const { updateLoadingStatus, updateErrorStatus } = useCommon();
const countryModule = {
  namespaced: true,
  state: () => ({
    countries: {},
  }),
  mutations: {
    getCountryList(state, capitalData) {
      state.countries = capitalData;
    },
    getCountryData(state, countries) {
      state.countries = countries;
    },
  },
  actions: {
    getCountryList({ commit }, capital) {
      updateLoadingStatus({ loading: true });
      countryAPI
        .getCountryList(capital)
        .then((response) => {
          console.log("countries response :: ", response);
          commit("getCountryList", response.data);
        })
        .catch(() => updateErrorStatus({ error: true }))
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
    getCountryData({ commit }) {
      updateLoadingStatus({ loading: true });
      countryAPI
        .getCountryData()
        .then((response) => {
          console.log(response);
          commit("getCountryData", response.data);
        })
        .catch(() => updateErrorStatus({ error: true }))
        .finally(() => {
          updateLoadingStatus({ loading: false });
        });
    },
  },
};

export default countryModule;
