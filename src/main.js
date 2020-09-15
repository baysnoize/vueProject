import Vue from "vue";
import App from "./App.vue";

// import { TokenD } from '@tokend/js-sdk' // import Token

// let sdk = await TokenD.create('https://backend.tokend.com') // создание переменной для импорта


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
