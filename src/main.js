// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./polyfill";
// import cssVars from 'css-vars-ponyfill'
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App";
import router from "./router/index";
import axios from "axios";
import VueAxios from "vue-axios";

// todo
// cssVars()

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
/* eslint-disable no-new */
window.a = new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: {
    App
  },
  data: {
    identity: 1
  }
});
