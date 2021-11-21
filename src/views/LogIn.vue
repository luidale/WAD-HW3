<template>
		<div class="login-container">
            <div class='icon-holder'>
                <img src="@/assets/images/postit.png" alt="Notes">
            </div>
			<div class="textHolder">
                <br>
				
				Welcome to  postIt! <br>
			</div>
            <div class="textHolder">
			<a href="#">Create an Account </a><br>
             </div>
			<div class="textHolder">
				Or<br>
			</div>
			<div class="textHolder2">
				Please Log In<br>
			</div>

			<div class = textHolder>
			<form action="index.html" method="post">
				<input type="text" name="email" placeholder="Email"/><br>
				<input type="password" name="password" placeholder="Password"/><br>
				<div class="buttonHolder">
					<input type="submit" value="Log In"/>
				</div>
			</form>
			</div>
			<a class ="forgotten-password" href="#">Forgot password </a><br>
		</div>
</template>

<script>
console.log("Loading login page");
</script>


<style scoped>
.login {
  margin-top: 140px;
  text-align: center;
}
</style>
