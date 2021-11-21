<template>
  <div class="footer">
    <footer>
       &copy; 2021 by Awesome Posts Company (Hannes, Hannes, Henri)<br>
     </footer>
     <p>
       <router-link to="/contactus">Contact us</router-link>
     </p>
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
/* unvisited link */
a:link {
  color: red;
}

/* visited link */
a:visited {
  color: white;
}

/* mouse over link */
a:hover {
  color: black;
}

/* selected link */
a:active {
  color: white;
}

</style>
