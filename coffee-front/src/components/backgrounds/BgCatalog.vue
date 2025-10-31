<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <picture v-if="route.name == 'coffee'">
    <source
      media="(max-width: 767px)"
      srcset="../../images/background/bg-heading-corns-mobile.png"
    />
    <source
      media="(max-width: 1348px)"
      srcset="../../images/background/bg-heading-corns-tablet.png"
    />
    <source
      media="(max-width: 1904px)"
      srcset="../../images/background/bg-heading-corns-laptop.png"
    />
    <img
      class="background__img background__img--catalog-hero-corns"
      src="../../images/background/bg-heading-corns-desktop.png"
      width="360"
      height="694"
      alt="Зёрна кофе под чашкой"
    />
  </picture>

  <picture v-if="route.name == 'coffee'">
    <source
      media="(max-width: 767px)"
      srcset="../../images/background/bg-heading-cup-mobile.png"
    />
    <source
      media="(max-width: 1348px)"
      srcset="../../images/background/bg-heading-cup-tablet.png"
    />
    <source
      media="(max-width: 1904px)"
      srcset="../../images/background/bg-heading-cup-laptop.png"
    />
    <img
      class="background__img background__img--catalog-hero-cup"
      src="../../images/background/bg-heading-cup-desktop.png"
      width="682"
      height="455"
      alt="Чашка кофе"
    />
  </picture>

  <picture v-else-if="route.name == 'tea'">
    <source
      media="(max-width: 767px)"
      srcset="../../images/background/bg-tea-mobile.png"
    />
    <source
      media="(max-width: 1348px)"
      srcset="../../images/background/bg-tea-tablet.png"
    />
    <source
      media="(max-width: 1904px)"
      srcset="../../images/background/bg-tea-laptop.png"
    />
    <img
      class="background__img background__img--catalog-hero-tea"
      src="../../images/background/bg-tea-desktop.png"
      width="819"
      height="655"
      alt="Чашка чая"
    />
  </picture>

  <picture v-else-if="route.name == 'vending'">
    <source
      media="(max-width: 767px)"
      srcset="../../images/background/bg-vending-mobile.png"
    />
    <source
      media="(max-width: 1348px)"
      srcset="../../images/background/bg-vending-tablet.png"
    />
    <source
      media="(max-width: 1904px)"
      srcset="../../images/background/bg-vending-laptop.png"
    />
    <img
      class="background__img background__img--catalog-hero-vending"
      src="../../images/background/bg-vending-desktop.png"
      width="448"
      height="520"
      alt="Кофемашина"
    />
  </picture>

  <picture v-else-if="route.name == 'healthy'">
    <source
      media="(max-width: 767px)"
      srcset="../../images/background/bg-healthy-mobile.png"
    />
    <source
      media="(max-width: 1348px)"
      srcset="../../images/background/bg-healthy-tablet.png"
    />
    <source
      media="(max-width: 1904px)"
      srcset="../../images/background/bg-healthy-laptop.png"
    />
    <img
      class="background__img background__img--catalog-hero-healthy"
      src="../../images/background/bg-healthy-desktop.png"
      width="518"
      height="364"
      alt="Тарелка каши"
    />
  </picture>

  <div
    class="background__div background__div--catalog-hero-top-wall-healthy"
  ></div>

  <svg
    class="background__svg-vawe background__svg-vawe--catalog-hero-healthy"
    width="3720"
    height="568"
    aria-hidden="true"
  >
    <use xlink:href="../../assets/bg-sprite.svg#bg-catalog-vawe-for-hero"></use>
  </svg>
  <svg
    class="background__svg-vawe-for-tablet background__svg-vawe--catalog-hero-healthy"
    width="1348"
    height="201"
    aria-hidden="true"
  >
    <use
      xlink:href="../../assets/bg-sprite.svg#bg-catalog-vawe-for-hero-for-tablet"
    ></use>
  </svg>

  <div
    class="background__div background__div--catalog-hero-bottom-wall-healthy"
  ></div>
</template>

<style lang="scss" scoped>
@import "@/scss/global/_background.scss";
</style>
