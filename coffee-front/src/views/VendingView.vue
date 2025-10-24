<script setup>
import MainHeader from "./MainHeader.vue";
import MainBody from "./MainBody.vue";
import CatalogFooter from "./.CatalogFooter.vue";
</script>

<template>
  <MainHeader></MainHeader>
  <h1 style="height: 1000px; color: 'black'; padding-top=100px;">Продукция для вендинга</h1>
  <CatalogFooter></CatalogFooter>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_btn.scss";
* {
  font-family: $ff-gilroy;
}
</style>
