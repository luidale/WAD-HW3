import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { "postList": [{
  
    authorName: "Peeter Paks",
    createdAt: "2021-09-23",
    id: 10,
    body: "I think it's going to rain",
    image: "tornado.jpg",
    likes: 0
  },
  {
  
    authorName: "Toomas Toop",
    createdAt: "2021-09-20",
    id: 9,
    body: "Which weighs more, a pound of feathers or a pound of bricks?",
    hashTags: ["mysteriesoflife"],
    likes: 0
  },
  {
    authorName: "Karl Karm",
    createdAt: "2021-09-5",
    id: 8,
    body: "Ain't I sexy",
    likes: 0
  },
  {
    authorName: "Viktor Vintpüss",
    createdAt: "2021-09-4",
    id: 7,
    title: "Girlfriend wanted",
    body: "I like books and flossing",
    image: "girlfriend.jpg",
    likes: 0
  },
  {
    authorName: "Kalle Kallistaja",
    createdAt: "2021-09-2",
    id: 6,
    title: "Question",
    body: "42",
    hashTags: [
        "bestjoke",
        "meaningoflife"
    ],
    likes: 0
  },
  {
    authorName: "Jaan Jalgratas",
    createdAt: "2021-08-25",
    id: 5,
    title: "No sunglasses",
    body: "Do not act cool by any means",
    image: "cool.jpg",
    likes: 0
  },
  {
    authorName: "Kaupo Kaup",
    createdAt: "2021-08-21",
    id: 4,
    title: "Wifi",
    body: "What is the password?",
    image: "wifi.jpg",
    likes: 0
  },
  {
    authorName: "Tarmo Tark",
    createdAt: "2021-08-15",
    id: 3,
    title: "DJ Bobo",
    body: "There is a party",
    image: "party.jpg",
    hashTags: [
        "europop",
        "music",
        "horses"
    ],
    likes: 0
  },
  {
    authorName: "Ott Seljak",
    createdAt: "2021-08-10",
    id: 2,
    title: "Suncream",
    body: "Beer",
    image: "suncream.jpg",
    likes: 0
  },
  {
    authorName: "Jüri Toru",
    createdAt: "2021-08-09",
    id: 1,
    title: "Diet",
    body: "Quick results",
    image: "glasses.jpg",
    likes: 0
  }
  ]
   },
   getters: {}
  ,

  mutations: {},
  actions: {}
,
  modules: {},
});