<script setup>
import MainHeader from "./MainHeader.vue";
import CatalogHero from "./CatalogHero.vue";
import CatalogInner from "./CatalogInner.vue";
import CatalogFooter from "./CatalogFooter.vue";
</script>

<template>
  <MainHeader></MainHeader>
  <CatalogHero></CatalogHero>
  <CatalogInner></CatalogInner>
  <CatalogFooter></CatalogFooter>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_btn.scss";
* {
  font-family: $ff-gilroy;
}
</style>
