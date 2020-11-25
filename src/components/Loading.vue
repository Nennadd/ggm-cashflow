<template>
  <div class="loading">
    <h1>Loading...</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Loading",
  computed: {
    ...mapGetters({ loading: "getLoading" })
  },
  methods: {
    ...mapActions(["removeLoading"])
  }
  // mounted() {
  //   document.onreadystatechange = () => {
  //     if (document.readyState === "complete") {
  //       this.removeLoading();
  //     }
  //   };
  // }
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eaebf3;
  z-index: 99;
}
</style>
