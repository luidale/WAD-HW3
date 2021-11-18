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
  mounted: function () {
    // Attach event listener to the root vue element
    this.$el.addEventListener('click', this.onClick)
    // Or if you want to affect everything
    // document.addEventListener('click', this.onClick)
  },
  beforeDestroy: function () {
    this.$el.removeEventListener('click', this.onClick)
    // document.removeEventListener('click', this.onClick)
  },
  methods: {
    isNotInContactUs() {
      return this.$router.history.current["path"] !== "/contactus";
    }, 
    onClick: function (ev) {
    //console.log(ev.offsetX, ev.offsetY)
      if (!ev.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
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
  padding: 10px;
  padding-top: 60px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.header {
  background-color: #ffffff;
}
.header:hover {
    background-color: #eeeeee;
    box-shadow: 2px 2px 50px #eeeeee;
}
</style>
