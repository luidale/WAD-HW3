<template>
  <div class="Posts">
    <h2>Our Posts page</h2>
    <product_compo_2> </product_compo_2>
     <button v-on:click="IncreasePrice"> Increase price </button>
 <button v-on:click="DecreasePrice"> Decrease price </button>
  </div>
  <!--<footer_compo></footer_compo>-->
</template>

<script>
import product_compo_2 from "@/components/product_compo_2.vue";

export default {
name: "Posts",
 components: { product_compo_2 },
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


//import footer_compo from "@/components/footer_compo.vue";
</script>








