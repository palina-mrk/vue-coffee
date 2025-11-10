<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <template v-if="route.name == 'home' || route.name == 'catalogs'">
    <div class="background__div background__div--footer-wall"></div>

    <svg
      class="background__svg-vawe background__svg-vawe--footer"
      width="3720"
      height="408"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/bg-sprite.svg#bg-footer-vawe"></use>
    </svg>

    <svg
      class="background__svg-vawe-for-tablet background__svg-vawe--footer"
      width="1348"
      height="190"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-footer-vawe-for-tablet"
      ></use>
    </svg>

    <picture>
      <source
        media="(max-width: 767px)"
        srcset="../../images/background/bg-footer-corns-mobile.png"
      />
      <source
        media="(max-width: 1348px)"
        srcset="../../images/background/bg-footer-corns-tablet.png"
      />
      <source
        media="(max-width: 1903px)"
        srcset="../../images/background/bg-footer-corns-laptop.png"
      />
      <img
        class="background__img background__img--footer-corns"
        src="../../images/background/bg-footer-corns-desktop.png"
        width="769"
        height="659"
        alt="Зёрна кофе под чашкой"
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
        class="background__img background__img--footer-cup"
        src="../../images/background/bg-heading-cup-desktop.png"
        width="682"
        height="455"
        alt="Чашка кофе"
      />
    </picture>
  </template>

  <template v-else-if="route.name == 'blog'">
    <div class="background__div background__div--blog-footer-wall"></div>

    <svg
      class="background__svg-vawe background__svg-blog-vawe--footer"
      width="3720"
      height="408"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/bg-sprite.svg#bg-footer-vawe"></use>
    </svg>

    <svg
      class="background__svg-vawe-for-tablet background__svg-blog-vawe--footer"
      width="1348"
      height="192"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/bg-sprite.svg#bg-cart-top-for-tablet"></use>
    </svg>

    <div class="background__div background__div--blog-footer-bottom-wall"></div>

    <picture>
      <source
        media="(max-width: 767px)"
        srcset="../../images/background/bg-footer-corns-mobile.png"
      />
      <source
        media="(max-width: 1348px)"
        srcset="../../images/background/bg-footer-corns-tablet.png"
      />
      <source
        media="(max-width: 1903px)"
        srcset="../../images/background/bg-footer-corns-laptop.png"
      />
      <img
        class="background__img background__img--footer-corns"
        src="../../images/background/bg-footer-corns-desktop.png"
        width="769"
        height="659"
        alt="Зёрна кофе под чашкой"
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
        class="background__img background__img--footer-cup"
        src="../../images/background/bg-heading-cup-desktop.png"
        width="682"
        height="455"
        alt="Чашка кофе"
      />
    </picture>
  </template>

  <template v-else-if="route.name == 'contacts'">
    <div class="background__div background__div--catalog-footer-wall"></div>

    <svg
      class="background__svg-vawe background__svg-vawe--catalog-back-footer"
      width="3720"
      height="408"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/bg-sprite.svg#bg-footer-vawe"></use>
    </svg>

    <svg
      class="background__svg-vawe-for-tablet background__svg-vawe--catalog-back-footer"
      width="1348"
      height="190"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-catalog-back-for-footer-for-tablet"
      ></use>
    </svg>

    <svg
      class="background__svg-vawe background__svg-vawe--contacts-front-footer"
      width="3720"
      height="407"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-catalog-front-for-footer"
      ></use>
    </svg>

    <svg
      class="background__svg-vawe-for-tablet background__svg-vawe--contacts-front-footer"
      width="1348"
      height="190"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-catalog-front-for-footer-for-tablet"
      ></use>
    </svg>

    <div class="background__div background__div--contacts-footer-wall"></div>

    <picture>
      <source
        media="(max-width: 767px)"
        srcset="../../images/background/bg-footer-corns-mobile.png"
      />
      <source
        media="(max-width: 1348px)"
        srcset="../../images/background/bg-footer-corns-tablet.png"
      />
      <source
        media="(max-width: 1903px)"
        srcset="../../images/background/bg-footer-corns-laptop.png"
      />
      <img
        class="background__img background__img--catalog-footer-corns"
        src="../../images/background/bg-footer-corns-desktop.png"
        width="769"
        height="659"
        alt="Зёрна кофе под чашкой"
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
        class="background__img background__img--catalog-footer-cup"
        src="../../images/background/bg-heading-cup-desktop.png"
        width="682"
        height="455"
        alt="Чашка кофе"
      />
    </picture>
  </template>

  <template v-else>
    <div class="background__div background__div--catalog-footer-wall"></div>

    <svg
      class="background__svg-vawe background__svg-vawe--catalog-back-footer"
      width="3720"
      height="408"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/bg-sprite.svg#bg-footer-vawe"></use>
    </svg>

    <svg
      class="background__svg-vawe-for-tablet background__svg-vawe--catalog-back-footer"
      width="1348"
      height="190"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-catalog-back-for-footer-for-tablet"
      ></use>
    </svg>

    <svg
      class="background__svg-vawe background__svg-vawe--catalog-front-footer"
      width="3720"
      height="407"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-catalog-front-for-footer"
      ></use>
    </svg>

    <svg
      class="background__svg-vawe-for-tablet background__svg-vawe--catalog-front-footer"
      width="1348"
      height="190"
      aria-hidden="true"
    >
      <use
        xlink:href="../../assets/bg-sprite.svg#bg-catalog-front-for-footer-for-tablet"
      ></use>
    </svg>

    <picture>
      <source
        media="(max-width: 767px)"
        srcset="../../images/background/bg-footer-corns-mobile.png"
      />
      <source
        media="(max-width: 1348px)"
        srcset="../../images/background/bg-footer-corns-tablet.png"
      />
      <source
        media="(max-width: 1903px)"
        srcset="../../images/background/bg-footer-corns-laptop.png"
      />
      <img
        class="background__img background__img--catalog-footer-corns"
        src="../../images/background/bg-footer-corns-desktop.png"
        width="769"
        height="659"
        alt="Зёрна кофе под чашкой"
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
        class="background__img background__img--catalog-footer-cup"
        src="../../images/background/bg-heading-cup-desktop.png"
        width="682"
        height="455"
        alt="Чашка кофе"
      />
    </picture>
  </template>
</template>

<style lang="scss" scoped>
@import "@/scss/global/_background.scss";
</style>
