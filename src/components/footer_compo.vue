<template>
  <div class="footer">
    <footer>
       &copy; 2021 by Awesome Posts Company (Hannes, Hannes, Henri)
     </footer>
    <router-link to="/contactus">Contact Us</router-link>
  </div>
</template>

<script>
export default {
  name: "footercompo"
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
