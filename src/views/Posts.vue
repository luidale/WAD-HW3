<template>
  <div class="Posts">
    <h2>Our Posts page</h2>
    <posts_compo> </posts_compo>
  </div>
</template>

<script>
import posts_compo from "@/components/post_compo.vue";

export default {
name: "Posts",
 components: { posts_compo },
 data(){
 return{
 }
 },
methods: {
  IncreasePrice: function() {
 this.$store.dispatch("IncreasePriceAct")
 },
DecreasePrice() {
 this.$store.dispatch("DecreasePriceAct")
 }


}}

</script>








