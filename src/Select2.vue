<template>
  <select>
    <slot></slot>
  </select>
</template>

<script>
export default {
  props: ["options", "value"],
  mounted() {
    var $el = window.$(this.$el);
    var select2 = $el.select2(this.options);

    $el.val(this.value).trigger("change.select2");

    select2.on("change", () => {
      let value = select2.val();

      this.$emit("input", value);
    });
  },
  watch: {
    value(value) {
      window
        .$(this.$el)
        .val(value)
        .trigger("change.select2");
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