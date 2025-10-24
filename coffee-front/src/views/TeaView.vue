<script setup>
import MainHeader from "./MainHeader.vue";
import MainBody from "./MainBody.vue";
import MainFooter from "./MainFooter.vue";
</script>

<template>
  <MainHeader></MainHeader>
  <h1 style="height: 1000px; color: 'black'; padding-top: 100px">Чай</h1>
  <MainFooter></MainFooter>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_btn.scss";
* {
  font-family: $ff-gilroy;
}
</style>
