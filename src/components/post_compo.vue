<template>
<div id="post-list">
  <div class="reset-likes">
    <img @click="reRender(postList)" src="@/assets/images/resetlikes.png" alt="Reset likes" />
  </div>
  <section v-for="post in postList" :key="post.id" class="entry">
    <div class="entry-topbar">
      <div>
        <img src="@/assets/images/me.png" alt="autor image" />
      </div>
      <div class="entry-authorName"><p>{{ post.authorName }}</p></div>
      <div class="entry-datetext">
        <p v-html="convertDate(post.createdAt)"></p>
      </div>
    </div>
    <img v-if="post.image" :src="getImgUrl(post.image)" alt="Tornado" />
    <div v-if="post.title" class="entry-title">
      <p>{{ post.title }}</p>
    </div>
    <div class="entry-text">
      <p>{{ post.body }}</p>
    </div>
    <div class="entry-react">
      <img @click="post.likes++" src="@/assets/images/like-icon-png-0.jpg" alt="I like it!" />
      <div class="entry-likenumber">{{ post.likes }} likes</div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: "posts_compo",
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
    },
    reRender(list) {
      list.forEach((post) => post.likes = 0);
    },
    convertDate(dateString) {

    let monthNames = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    let date = new Date(dateString);

    var month = date.getMonth();
    var day = date.getDate();
    // add "strings" to date
    if (day % 10 == 1) {
        day = day + "st";
    } else if (day % 10 == 2) {
        day = day + "nd";
    } else if (day % 10 == 3) {
        day = day + "rd";
    } else {
        day = day + "th";
    }
    var year = date.getYear();

    return monthNames[month] + " " + day + " " + (1900 + year);

    }
  },
};
</script>


<style scoped>

.reset-likes {
  text-align: center;
  cursor: pointer;
}

.reset-likes img {
  max-height: 40px;
}

.entry-topbar {
    display: flex;
    justify-content: space-between;
    height: 40px;
}

.entry-topbar img {
    margin: 3px 10px;
    height: 75%;
}

.entry-authorName p {
  margin-top: 9px;
  font-weight: 600;
}

.entry-datetext p {
    margin: 9px 10px;
    font-size: 10pt;
}

.entry>img {
    width: 100%;
}

.entry-text, .entry-title {
    margin-left: 10px;
}

.entry-title {
    font-size: 14pt;
    font-weight: bold;
}

.entry-text a,
a:visited,
a:active {
    color: #1778bd;
    text-decoration: none;
}

.entry-text a:hover {
    color: #c5c5c5;
}

.entry-react img {
    margin: 5px 5px 5px 10px;
    height: 30px;
    cursor: pointer;
}

.entry-likenumber {
  position: relative;
  margin: -27px auto 5px 50px;
}

#post-list {
  margin-top: 60px;
}


</style>
