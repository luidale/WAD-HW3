<template>
  <div class="header">
      <div id="nav">
      <!--<router-link :to="{ name: 'login' }"> Log In </router-link> | -->
      <router-link to="/login"> Log In </router-link> |
      <router-link to="/">Posts</router-link> |
      <router-link to="/contactus">Contact Us</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "headercompo"
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
