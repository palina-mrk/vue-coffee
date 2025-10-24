<script setup>
import MainHeader from "./MainHeader.vue";
import ContactsBody from "./ContactsBody.vue";
import MainFooter from "./MainFooter.vue";
</script>

<template>
  <MainHeader></MainHeader>
  <ContactsBody></ContactsBody>
  <MainFooter></MainFooter>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_btn.scss";
* {
  font-family: $ff-gilroy;
}
</style>
