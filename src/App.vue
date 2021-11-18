<template>
  <div id="app">

    <!-- Header component -->
    <headercompo />

    <!-- Middle routed part -->
    <router-view />

    <!-- Footer component 
    <footercompo v-if="isNotInContactUs()"/> -->
    <footercompo/>
  </div>
</template>


<script>
import headercompo from "@/components/header_compo.vue";
import footercompo from "@/components/footer_compo.vue";

export default {
  name: "App",
  components: {
    footercompo,
    headercompo
  },
  methods: {
    isNotInContactUs() {
      return this.$router.history.current["path"] !== "/contactus";
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
