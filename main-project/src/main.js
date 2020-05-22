import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);

import App from "./App.vue";

Vue.config.productionTip = false;

import { hub } from "@/lib/hub";
import { provide } from "@vue/composition-api";

new Vue({
  setup() {
    hub.init();
    provide("HUB", hub);
  },
  render: (h) => h(App),
}).$mount("#app");
