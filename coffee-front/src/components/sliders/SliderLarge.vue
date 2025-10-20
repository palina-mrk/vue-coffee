<script setup>
const props = defineProps(["count","selected"]);
</script>

<template>
  <ul class="slider-large">
    <li v-for="n in count" :class="{'slider-large__point': true, 'slider-large__point--brown': n == selected}"></li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_slider-large.scss";
</style>
