<template>
  <header class="header">
    <nav>
      <div class="leftIcon">
        <img src="@/assets/images/postit.png" alt="Notes" />
      </div>
      <div class="search-container">
        <input type="text" /><button>Search</button>
      </div>
      <div class="dropdown">
        <img
          @click="clickFunction()"
          class="dropbtn"
          src="@/assets/images/me.png"
          alt="Me"
        />
        <div id="myDropdown" class="dropdown-content">
          <a>Dumb User<br />john.doe@example.com</a>
        </div>
      </div>
    </nav>
    <div id="navigate">
      <router-link to="/login">Log In</router-link> &nbsp; &nbsp; &nbsp;
      <router-link to="/">Posts</router-link> &nbsp; &nbsp; &nbsp;
      <router-link to="/contactus">Contact Us</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "headercompo",
  methods: {
    clickFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background-color: #ffffff;
  position: fixed;
  min-width: 100%;
  min-height: 100px;
}

nav {
  display: flex;
  background-color: #ffffff;
  min-width: 100%;
}

nav:hover {
  background-color: #eeeeee;
  box-shadow: 2px 2px 50px #eeeeee;
}


nav div img {
  height: 100%;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  box-sizing: border-box;
  height: 30px;
  width: 15%;
  margin: 0;
  padding: 5px;
  border: 1px solid #115a98;
  color: white;
  cursor: pointer;
  background-color: #115a98;
}


#navigate {
  margin-top: 60px;
  text-align: center;
  font-size: 14pt;
}

#navigate a:link,:visited,:active {
  text-decoration: none;
  font-weight: bold;
}

#navigate a:hover {
  text-decoration: underline;
}

.dropbtn {

    border: none;
    cursor: pointer;
    height: 30px;
    float:right;
  }
  
  .dropdown {
    float: right;
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffffff;
    min-width: 160px;
    min-height: 70px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    right: 0;
    top:50px;
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .show {display: block;}
</style>
