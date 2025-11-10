<script setup>
defineProps(["place"]);
</script>

<template>
  <div
    v-if="place == 'top'"
    class="background__div background__div--product-top-wall"
  ></div>

  <svg
    v-if="place == 'top'"
    class="background__svg-vawe background__svg-vawe--product-top"
    width="3720"
    height="568"
    aria-hidden="true"
  >
    <use xlink:href="../../assets/bg-sprite.svg#bg-cart-top"></use>
  </svg>

  <svg
    v-if="place == 'top'"
    class="background__svg-vawe-for-tablet background__svg-vawe--product-top"
    width="1348"
    height="192"
    aria-hidden="true"
  >
    <use xlink:href="../../assets/bg-sprite.svg#bg-cart-top-for-tablet"></use>
  </svg>

  <div
    v-if="place == 'top'"
    class="background__div background__div--product-middle-wall background__div--product-middle-wall--for-top"
  ></div>

  <div
    v-if="place == 'middle'"
    class="background__div background__div--product-middle-wall background__div--product-middle-wall--for-middle"
  ></div>

  <svg
    v-if="place == 'bottom'"
    class="background__svg-vawe background__svg-vawe--product-bottom"
    width="3720"
    height="384"
    aria-hidden="true"
  >
    <use xlink:href="../../assets/bg-sprite.svg#bg-cart-bottom"></use>
  </svg>

  <svg
    v-if="place == 'bottom'"
    class="background__svg-vawe-for-tablet background__svg-vawe--product-bottom"
    width="1348"
    height="201"
    aria-hidden="true"
  >
    <use
      xlink:href="../../assets/bg-sprite.svg#bg-cart-bottom-for-tablet"
    ></use>
  </svg>
</template>

<style lang="scss" scoped>
@import "@/scss/global/_background.scss";
</style>
