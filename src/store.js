import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: [30, 40, 50],
      likeClick: [false, false, false],
      more: {},
    };
  },
  mutations: {
    changeName(state) {
      state.name = "park";
    },
    increaseAge(state, payload) {
      state.age += payload;
    },
    like(state, i) {
      if (state.likeClick[i] === false) {
        state.likes[i]++;
        state.likeClick[i] = true;
      } else {
        state.likes[i]--;
        state.likeClick[i] = false;
      }
    },
    setMore(state, data){
      state.more = data;
    }
  },
  //ajax하는곳
  //또는 오래걸리는 작업들
  actions: {
    getData(context) {
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then((result) => {
          console.log(result.data);
          context.commit("setMore", result.data);
        });
    },
  },
});

export default store;
