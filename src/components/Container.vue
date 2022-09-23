<template>
  <div v-if="step === 0">
    <Post :data="data[i]" :idx="[i]" v-for="(a, i) in data" :key="i" />
  </div>

  <!-- 필터선택페이지 -->
  <div v-if="step === 1">
    <div class="upload-image" :class="sltFilter" :style="`background-image:url(${fileUrl})`"></div>
    <div class="filters">
      <FilterBox
        :fileUrl="fileUrl"
        :filter="filter"
        v-for="filter in filters"
        :key="filter"
      >
        {{ filter }}
      </FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="step === 2">
    <div class="upload-image" :class="sltFilter" :style="`background-image:url(${fileUrl})`"></div>
    <div class="write">
      <textarea class="write-box" @input="$emit('write', $event.target.value)">
        write!
      </textarea>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  name: "Container",
  data() {
    return {
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      sltFilter :"",
    };
  },
  mounted(){
    this.emitter.on("boxClick", (a)=>{
      this.sltFilter = a
    })
  },

  components: {
    Post,
    FilterBox,
  },
  props: {
    data: Array,
    step: Number,
    fileUrl: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>