<!-- <template>
  <div id="comp-list-two">
    <p class="item" v-for="post in postList" :key="post.id">
      <span class="author"> <b>Author:</b> {{ post.authorName }} </span>
      <span class="book"> <b>Date:</b> {{ post.createdAt }} </span> <br />
      <span class="goodreads"> </span>
      <span class="price"> ID:{{ post.body }} </span>
      <button v-on:click="post.likes++">I like this post</button><br />
      <span class="likes">Number of likes: {{ post.likes }}</span
      ><br />
      <button v-on:click="post.likes = 0">Reset likes</button>
      <button v-on:click="IncreasePrice">Increase price</button>
      <button v-on:click="DecreasePrice">Decrease price</button>
      {{ likes }}
    </p>
  </div>
</template> -->
<template>
<div id="comp-list-two">
  <section v-for="post in postList" :key="post.id" class="entry">
    <div class="entry-topbar">
      <div>
        <img src="@/assets/images/me.png" alt="Me" />
      </div>
      <div class="entry-datetext">
        <p>{{ post.createdAt }}</p>
      </div>
    </div>
    <img v-if="post.image" :src="getImgUrl(post.image)" alt="Tornado" />
    <div class="entry-text">
      <p>{{ post.body }}</p>
    </div>
    <div class="entry-react">
      <img @click="post.likes++" src="@/assets/images/like-icon-png-0.jpg" alt="I like it!" />
      Number of likes: {{ post.likes }}
      <span @click="post.likes = 0">reset</span>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: "product_compo_2",
  data: function () {
    return {};
  },
  computed: {
    postList() {
      return this.$store.state.postList;
    },
    postListsale() {
      return this.$store.getters.postListsale;
    },
  },
  methods: {
    IncreasePrice: function () {
      this.$store.dispatch("IncreasePriceAct");
    },
    DecreasePrice() {
      this.$store.dispatch("DecreasePriceAct");
    },
    getImgUrl(fn) {
      return require('../assets/images/' + fn);
    }
  },
};
</script>


<style scoped>
.item {
  background: rgb(128, 183, 235);
  margin-bottom: 5px;
  padding: 3px 5px;
}
#comp-list-two {
  background: #1862c9;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#comp-list-two ul {
  padding: 0;
  list-style-type: none;
}
#comp-list-two li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #860ce8;
  display: block;
}
</style>
