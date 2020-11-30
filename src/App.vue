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
    ...mapGetters({ loading: "getLoading", socket: "getSocket" })
  },
  mounted() {
    this.socket.onopen = () => {
      console.log("Client Connected !");
      this.socket.send(JSON.stringify({ message: "Cao" }));
    };

    this.socket.onmessage = event => console.log(event.data);

    this.socket.onclose = () => {
      console.log("Connection Closed !");
    };
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");
$dark-gray: #999;
$medium-gray: #aaa;
* {
  box-sizing: border-box;
}
body {
  font-size: calc(12px + (19 - 13) * ((100vw - 320px) / (1600 - 320)));
  padding: 0;
  margin: 0;
}
button {
  outline-style: none;
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
  padding: 4rem 0;
  min-height: 90vh;
  grid-area: nav;
  background-color: $dark-gray;

  a {
    display: block;
    padding: 0.6rem 0 0.6rem 1rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    border: none;
    // border-bottom: 1px solid #888;

    &.router-link-active {
      color: #fff;
      background-color: #aaa;
      transition: all 0.5s linear;
    }
  }
}
main {
  position: relative;
  grid-area: main;
  background-color: $medium-gray;
}
footer {
  grid-area: footer;
  background: $dark-gray;
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
