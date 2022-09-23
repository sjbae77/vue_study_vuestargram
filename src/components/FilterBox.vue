<template>
  <div
    class="filter-item"
    :class="filter"
    :style="`background-image:url(${fileUrl})`"
    @click="fire"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  methods: {
    fire(){
        this.emitter.emit("boxClick", this.filter);
    }
  },
  props: {
    fileUrl: String,
    filter: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>