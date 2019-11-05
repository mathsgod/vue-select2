<template>
  <select>
    <slot></slot>
  </select>
</template>

<script>
export default {
  props: ["options", "value"],
  mounted() {
    var vm = this;
    window
      .$(this.$el)
      // init select2
      .select2(this.options)
      .val(this.value)
      .trigger("change")
      // emit event on change.
      .on("change", function() {
        vm.$emit("input", this.value);
      });
  },
  watch: {
    value(value) {
      window
        .$(this.$el)
        .val(value)
        .trigger("change");
    },
    options(options) {
      window.$(this.$el).select2(options);
    },
    destroyed: function() {
      window
        .$(this.$el)
        .off()
        .select2("destroy");
    }
  }
};
</script>