import Vue from "vue/dist/vue.js";
import select2 from "./Select2.vue";

Vue.config.productionTip = false;
new Vue({
  el: "#div1",
  components: {
    select2: select2
  },
  data: {
    selected: "",
    options: {}
  }, mounted() {

  }, methods: {
    changeToBanana() {
      this.selected = "banana";
    }
  }

});
