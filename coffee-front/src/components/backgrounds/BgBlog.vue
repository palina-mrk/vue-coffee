<script setup>
defineProps(["place"]);
</script>

<template>
  <div
    v-if="place == 'top'"
    class="background__div background__div--product-middle-wall background__div--product-middle-wall--for-middle"
  ></div>

  <div
    v-if="place == 'middle'"
    class="background__div background__div--questions-top-wall"
  ></div>

  <svg
    v-if="place == 'middle'"
    class="background__svg-vawe background__svg-vawe--questions"
    width="3720"
    height="400"
    aria-hidden="true"
  >
    <use xlink:href="../../assets/bg-sprite.svg#bg-advantages-vawe"></use>
  </svg>

  <svg
    v-if="place == 'middle'"
    class="background__svg-vawe-for-tablet background__svg-vawe--questions"
    width="1348"
    height="216"
    aria-hidden="true"
  >
    <use
      xlink:href="../../assets/bg-sprite.svg#bg-advantages-vawe-for-tablet"
    ></use>
  </svg>

  <div
    v-if="place == 'middle'"
    class="background__div background__div--questions-wall"
  ></div>

  <svg
    v-if="place == 'middle'"
    class="background__svg-vawe background__svg-vawe--questions-bottom"
    width="3720"
    height="408"
    aria-hidden="true"
  >
    <use xlink:href="../../assets/bg-sprite.svg#bg-footer-vawe"></use>
  </svg>

  
</template>

<style lang="scss" scoped>
@import "@/scss/global/_background.scss";
</style>
