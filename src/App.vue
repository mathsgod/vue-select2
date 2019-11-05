<template>

  <div id="app">
    <select is="select2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>
</template>

<script>
import Select2 from "./Select2.vue";

export default {
  name: "app",
  components: {
    Select2
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
