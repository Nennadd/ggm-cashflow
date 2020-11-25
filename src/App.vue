<template>
  <div id="app">
    <Header id="header" />
    <nav>
      <router-link to="/" exact>Dashboard</router-link>
      <router-link :to="{ name: 'SupplierOrders' }"
        >Supplier Orders</router-link
      >
      <router-link to="/supplier-sellout">Supplier Sellout</router-link>
    </nav>
    <main>
      <Loading v-if="loading" />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Loading from "@/components/Loading.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Header,
    Loading
  },
  computed: {
    ...mapGetters({ loading: "getLoading" })
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");
* {
  box-sizing: border-box;
}
body {
  font-size: calc(12px + (19 - 13) * ((100vw - 320px) / (1600 - 320)));
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto auto 3rem;
  grid-template-areas:
    "header header header header header header header"
    "nav main main main main main main"
    "footer footer footer footer footer footer footer";
  min-height: 100vh;
}
#header {
  grid-area: header;
}
nav {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  background: #3a3a3a;
  min-height: 90vh;
  grid-area: nav;

  a {
    display: block;
    padding: 0.5rem 0;
    font-weight: bold;
    color: #eee;
    text-decoration: none;

    &.router-link-active {
      color: aqua;
    }
  }
}
main {
  position: relative;
  grid-area: main;
  background-color: #eaebf3;
}
footer {
  grid-area: footer;
  background: #3a3a3a;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
