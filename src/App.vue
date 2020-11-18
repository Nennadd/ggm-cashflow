<template>
  <div id="app">
    <Header />
    <div id="main">
      <div id="nav">
        <router-link to="/">Home</router-link>
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
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#main {
  display: grid;
  grid-template-columns: 15rem 1fr;
}
#nav {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  background: #444;

  a {
    display: block;
    padding: 0.5rem 0;
    font-weight: bold;
    color: #eee;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
