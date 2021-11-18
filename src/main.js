import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '../res/css/style.css'
//import '../res/js/script.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
