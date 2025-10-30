<script setup>
defineProps(["section"]);
</script>

<template>
  <template v-if="section == 'overview'">
    <svg
      class="background__svg-puddle background__svg-puddle--right"
      width="1453"
      height="1750"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/bg-sprite.svg#bg-puddle-right"></use>
    </svg>

    <svg
      class="background__svg-puddle background__svg-puddle--left"
      width="1230"
      height="1380"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/bg-sprite.svg#bg-puddle-left"></use>
    </svg>
    <svg
      class="background__svg-puddle background__svg-puddle--left-for-laptop"
      width="819"
      height="934"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-puddle-left-for-laptop"
      ></use>
    </svg>

    <picture>
      <source
        media="(max-width: 767px)"
        srcset="../../images/background/bg-heading-corns-mobile.png"
      />
      <source
        media="(max-width: 1348px)"
        srcset="../../images/background/bg-heading-corns-tablet.png"
      />
      <source
        media="(max-width: 1903px)"
        srcset="../../images/background/bg-heading-corns-laptop.png"
      />
      <img
        class="background__img background__img--heading-corns"
        src="../../images/background/bg-heading-corns-desktop.png"
        width="900"
        height="773"
        alt="Зёрна кофе под чашкой"
      />
    </picture>

    <picture>
      <source
        media="(max-width: 767px)"
        srcset="../../images/background/bg-corns-left-mobile.png"
      />
      <source
        media="(max-width: 1348px)"
        srcset="../../images/background/bg-corns-left-tablet.png"
      />
      <source
        media="(max-width: 1903px)"
        srcset="../../images/background/bg-corns-left-laptop.png"
      />
      <img
        class="background__img background__img--left-corns"
        src="../../images/background/bg-corns-left-desktop.png"
        width="360"
        height="694"
        alt="Зёрна кофе слева"
      />
    </picture>

    <picture>
      <source
        media="(max-width: 767px)"
        srcset="../../images/background/bg-heading-cup-mobile.png"
      />
      <source
        media="(max-width: 1348px)"
        srcset="../../images/background/bg-heading-cup-tablet.png"
      />
      <source
        media="(max-width: 1903px)"
        srcset="../../images/background/bg-heading-cup-laptop.png"
      />
      <img
        class="background__img background__img--cup"
        src="../../images/background/bg-heading-cup-desktop.png"
        width="744"
        height="496"
        alt="Чашка кофе"
      />
    </picture>

    <div class="background__div background__div--cup-shadow"></div>

    <svg
      class="background__svg-vawe background__svg-vawe--overview"
      width="2627"
      height="288"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/bg-sprite.svg#bg-overview-vawe"></use>
    </svg>

    <svg
      class="background__svg-vawe-for-tablet background__svg-vawe--overview"
      width="1348"
      height="216"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-overview-vawe-for-tablet"
      ></use>
    </svg>
  </template>
  <template v-else-if="section == 'advantages'">
    <svg
      class="background__svg-vawe background__svg-vawe--advantages"
      width="3720"
      height="400"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/bg-sprite.svg#bg-advantages-vawe"></use>
    </svg>

    <svg
      class="background__svg-vawe-for-tablet background__svg-vawe--advantages"
      width="1348"
      height="216"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-advantages-vawe-for-tablet"
      ></use>
    </svg>

    <div class="background__div background__div--advantages-wall"></div>
  </template>
  <template v-else-if="section == 'technology'">
    <picture>
      <source
        media="(max-width: 767px)"
        srcset="../../images/background/bg-coffeemachine-mobile.png"
      />
      <source
        media="(max-width: 1348px)"
        srcset="../../images/background/bg-coffeemachine-tablet.png"
      />
      <img
        class="background__img background__img--technology"
        src="../../images/background/bg-coffeemachine.png"
        width="900"
        height="773"
        alt="Машина для перемолки кофе"
      />
    </picture>

    <div class="background__div background__div--technology-shadow"></div>

    <svg
      class="background__svg-vawe background__svg-vawe--technology-first"
      width="2627"
      height="288"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-technology-first-vawe"
      ></use>
    </svg>

    <svg
      class="background__svg-vawe-for-tablet background__svg-vawe--technology-first"
      width="1348"
      height="236"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-technology-first-vawe-for-tablet"
      ></use>
    </svg>

    <svg
      class="background__svg-vawe background__svg-vawe--technology-second"
      width="3298"
      height="298"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-technology-second-vawe"
      ></use>
    </svg>

    <svg
      class="background__svg-vawe-for-tablet background__svg-vawe--technology-second"
      width="1348"
      height="138"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-technology-second-vawe-for-tablet"
      ></use>
    </svg>
  </template>
  <template v-else-if="section == 'news'">
    <svg
      class="background__svg-vawe background__svg-vawe--news"
      width="2627"
      height="288"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/bg-sprite.svg#bg-news-vawe"></use>
    </svg>

    <div class="background__div background__div--news-wall"></div>
  </template>
  <template v-else-if="section == 'instagram'">
    <div class="background__div background__div--instagram-top-wall"></div>

    <svg
      class="background__svg-vawe background__svg-vawe--instagram"
      width="3720"
      height="664"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/bg-sprite.svg#bg-instagram-ellipse"></use>
    </svg>

    <svg
      class="background__svg-vawe-for-tablet background__svg-vawe--instagram"
      width="2627"
      height="288"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-instagram-ellipse-for-tablet"
      ></use>
    </svg>

    <div class="background__div background__div--instagram-bottom-wall"></div>

    <svg
      class="background__svg-vawe-for-tablet background__svg-vawe--instagram-bottom"
      width="2627"
      height="288"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-instagram-bottom-vawe-for-tablet"
      ></use>
    </svg>
  </template>
</template>

<style lang="scss" scoped>
@import "@/scss/global/_background.scss";
</style>
