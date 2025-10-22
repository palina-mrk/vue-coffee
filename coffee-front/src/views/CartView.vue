<script setup>
import MainHeader from "./MainHeader.vue";
import CartBody from "./CartBody.vue";
import CatalogFooter from "./CatalogFooter.vue";
</script>

<template>
  <MainHeader></MainHeader>
  <CartBody></CartBody>
  <CatalogFooter></CatalogFooter>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_btn.scss";
* {
  font-family: $ff-gilroy;
}
</style>
