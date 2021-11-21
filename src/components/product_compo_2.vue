<template>
<div id= "comp-list-two">
 <p class="item" v-for="post in postList" :key="post.id">
 <span class="author"> <b>Author:</b> {{post.authorName}} </span>
 <span class="book"> <b>Date:</b> {{post.createdAt}} </span> <br>
 <span class="goodreads"> </span>
 <span class="price"> ID:{{post.body}} </span>
 <button v-on:click="post.likes++">I like this post</button><br>
<span class="likes">Number of likes: {{post.likes}}</span><br>
<button v-on:click="post.likes = 0">Reset likes</button>
 </p>
</div>
</template>
<script>
export default {
name: "product_compo_2",
data: function() {
return {
}},
computed: {

    
postList(){
return this.$store.state.postList
}
},
methods: {
}
}
</script>


<style scoped>

.item{
 background: rgb(128, 183, 235);
 margin-bottom: 5px;
 padding: 3px 5px;}
#comp-list-two{
 background: #1862c9;
 box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
 margin-bottom: 30px;
 padding: 10px 20px;
}
#comp-list-two ul{
 padding: 0;
 list-style-type: none;
}
#comp-list-two li{
 margin-right: 10px;
 margin-top: 10px;
 padding: 20px;
 background: rgba(255,255,255,0.7);
}
.price{
 font-weight: bold;
 color: #860CE8;
 display: block;
}
</style>
