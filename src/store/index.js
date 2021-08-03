import { createStore } from "vuex";
import commonModule from "./modules/common";
import authModule from "./modules/auth";
import countryModule from "./modules/country";
import weatherModule from "./modules/weather";
import userModule from "./modules/user";
import postModule from "./modules/post";
const store = createStore({
  modules: {
    commonModule,
    authModule,
    countryModule,
    weatherModule,
    userModule,
    postModule,
  },
});

export default store;
