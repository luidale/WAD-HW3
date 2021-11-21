<template>
  <div id="app">
    <!-- Header component -->
    <headercompo />

    <div class="body-container">

    <!-- Middle routed part -->
    <router-view />

    </div>

    <!-- Footer component 
    <footercompo v-if="isNotInContactUs()"/> -->
    <footercompo />
  </div>
</template>


<script>
import headercompo from "@/components/header_compo.vue";
import footercompo from "@/components/footer_compo.vue";

export default {
  name: "App",
  components: {
    footercompo,
    headercompo,
  },
  mounted: function () {
    // Attach event listener to the root vue element
    this.$el.addEventListener("click", this.onClick);
    // Or if you want to affect everything
    // document.addEventListener('click', this.onClick)
  },
  beforeDestroy: function () {
    this.$el.removeEventListener("click", this.onClick);
    // document.removeEventListener('click', this.onClick)
  },
  methods: {
    isNotInContactUs() {
      return this.$router.history.current["path"] !== "/contactus";
    },
    onClick: function (ev) {
      //console.log(ev.offsetX, ev.offsetY)
      if (!ev.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">

* {
    font-family: 'Open Sans', sans-serif;
}

html,
body {
    margin: 0;
    padding: 0;
    background-color: #1778bd;
}

.body-container {
    background-color: #ffffff;
    width: 800px;
    margin: auto;
    padding: 10px;
    min-height: 100vh;
    margin-top: 100px;
}

section.entry {
    width: 650px;
    margin: 20px auto 30px auto;
    box-shadow: 2px 2px 15px #c5c5c5;
    padding: 5px 0px 10px 0px;
    background-color: #ffffff;
}

div.main-begin {
    margin-top: 80px;
}

/* #app {
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
} */

div.login-container {
	display: flex;
	flex-direction: column;
    width: 400px;
    height: 450px;
    box-shadow: 2px 2px 15px #c5c5c5;
    padding: 5px 0px 10px 0px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -175px;     /* Half of height */
    margin-left: -200px;     /* Half of width */
}

div:first-of-type + div.textHolder {
    font-weight: bolder;
    font-size: 13pt;
  }

.login-container a,
a:visited,
a:active {
    color: #1778bd;
    text-decoration: none;
}

.icon-holder{
    position: absolute;
    text-align: left;  
    float: left;  
    align-items: left;
}

.icon-holder img{
    height: 80px;
    padding: 10px;
    align-items: left;
}

a.forgotten-password {
    color: #1778bd;
	font-size: 10pt;
    text-align: center;
    text-decoration: underline;
}

.login-container input {
    padding:5px 15px;
	margin-top: 5px;
    margin-bottom: 5px;
}
.login-container input[type=submit] {
    padding:5px 15px; 
    background:#115a98; 
	color: white;

}
.buttonHolder {
	text-align: center;
}
.textHolder {
	text-align: center;
    padding: 13px;
}

.textHolder a{
    text-decoration: underline;
}

.textHolder ~ .textHolder2 {
    text-align: center;
    font-size: 13pt;
    font-weight: bolder;
    padding: 5px
}

</style>
