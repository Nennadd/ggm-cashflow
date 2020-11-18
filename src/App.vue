<template>
  <div id="app">
    <Header />
    <div id="main">
      <div id="nav">
        <router-link to="/">Dashboard</router-link>
        <router-link to="/supplier-orders">Supplier Orders</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
body {
  font-size: calc(12px + (19 - 13) * ((100vw - 320px) / (1600 - 320)));
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
}
#main {
  display: grid;
  grid-template-columns: 13rem 1fr;
}
#nav {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  background: #3a3a3a;
  min-height: 90vh;

  a {
    display: block;
    padding: 0.5rem 0;
    font-weight: bold;
    color: #eee;
    text-decoration: none;

    &.router-link-exact-active {
      // color: #42b983;
      color: aqua;
    }
  }
}
</style>
