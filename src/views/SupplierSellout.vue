<template>
  <div>
    <h1>Supplier Sellout</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SupplierSellout",
  methods: {
    ...mapActions(["removeLoading"])
  },
  mounted() {
    this.removeLoading();
  }
};
</script>

<style lang="scss" scoped></style>
