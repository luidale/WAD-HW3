<template>
  <footer class="footer">
       &copy; 2021 by Awesome Posts Company (Hannes, Hannes, Henri)<br>
     <p>
       <router-link to="/contactus"><b>Contact us</b></router-link>
     </p>
  </footer>
</template>

<script>
export default {
  name: "footercompo"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.footer {
  background-color: #cfddec;
  text-align: center;
  margin: 0px auto 0px auto;
  padding: 20px;
}

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
  color: rgb(0, 0, 0);
  text-decoration: none;
}

/* visited link */
a:visited {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: black;
  text-decoration: underline;
}

/* selected link */
a:active {
  color: rgb(154, 157, 197);
  text-decoration: underline;
}

</style>
