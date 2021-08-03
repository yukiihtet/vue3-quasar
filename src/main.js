import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Quasar, Dialog, Notify } from "quasar";
import quasarUserOptions from "./quasar-user-options";

createApp(App)
  .use(quasarUserOptions)
  .use(store)
  .use(router)
  .use(Quasar, {
    plugins: {
      Dialog,
      Notify,
    },
  })
  .mount("#app");
