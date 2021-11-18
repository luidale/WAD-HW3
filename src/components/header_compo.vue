<template>
  <div class="header">
    <nav>
      <div>
        <img src="../../res/images/postit.png" alt="Notes">
      </div>
      <div class="search-container">
        <input type="text"><button>Search</button>
      </div>
      <div class="dropdown">
        <img @click="clickFunction()" class="dropbtn" src ="../../res/images/me.png" alt="Me">
        <div id="myDropdown" class="dropdown-content">
          <a>Dumb User<br>john.doe@example.com</a>
        </div>
      </div>
    </nav>
    <div id="nav">
      <router-link to="/login"> Log In </router-link> |
      <router-link to="/">Posts</router-link> |
      <router-link to="/contactus">Contact Us</router-link>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: "headercompo",
  methods: {    
    clickFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
