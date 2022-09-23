<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <p>{{ name }} {{ age }}  {{ likes }} </p>


  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기버튼</button>

  
  <button @click="$store.commit('changeName')">이름 변경 버튼</button>
  <button @click="increaseAge(10)">나이 추가 버튼</button>

  <Container :data="data" :step="step" :fileUrl="fileUrl" @write="write = $event" />

  <!-- <button v-if="step == 0" @click="more">더보기</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import data from "./assets/data";
import Container from "./components/Container.vue";
import {mapState, mapMutations} from "vuex";
// import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      data: data,
      btnCount: 0,
      step: 0,
      fileUrl: "",
      write: "",
      sltFilter: "",
      counter: 0,
    };
  },
  mounted(){
    this.emitter.on("boxClick", (a)=>{
      this.sltFilter = a
    })
  },
  
  components: {
    Container,
  },
  computed: {
    ...mapState(['name', 'age', 'likes']),
    ...mapState({ 작명 : "name", })
  },
  methods: {
    ...mapMutations(['setMore', 'like', 'increaseAge']),

    // more() {
    //   axios
    //     .get(`https://codingapple1.github.io/vue/more${this.btnCount}.json`)
    //     .then((result) => {
    //       this.data.push(result.data);
    //       this.btnCount++;
    //     });
    // },
    upload(e) {
      let file = e.target.files;
      console.log(file[0]);
      this.fileUrl = URL.createObjectURL(file[0]);
      this.step = 1;
    },
    publish() {
      let myPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.fileUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.write,
        filter: this.sltFilter,
      };
      this.data.unshift(myPost);
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>