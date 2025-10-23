<script setup>
import { useRoute } from 'vue-router';
import {computed} from 'vue';
const route = useRoute();
const isCoffeePage = computed(() => route.name == 'catalog-coffee');
</script>

<template>

  <picture v-if="route.name == 'catalog-coffee'">
    <source media="(max-width: 767px)" srcset="../../images/background/bg-heading-corns-mobile.png">
    <source media="(max-width: 1348px)" srcset="../../images/background/bg-heading-corns-tablet.png">
    <source media="(max-width: 1903px)" srcset="../../images/background/bg-heading-corns-laptop.png">
    <img class="background__img background__img--catalog-hero-corns" src="../../images/background/bg-heading-corns-desktop.png" width="360" height="694" alt="Зёрна кофе под чашкой">
  </picture>

  <picture v-if="route.name == 'catalog-coffee'">
    <source media="(max-width: 767px)" srcset="../../images/background/bg-heading-cup-mobile.png">
    <source media="(max-width: 1348px)" srcset="../../images/background/bg-heading-cup-tablet.png">
    <source media="(max-width: 1903px)" srcset="../../images/background/bg-heading-cup-laptop.png">
    <img class="background__img background__img--catalog-hero-cup" src="../../images/background/bg-heading-cup-desktop.png" width="682" height="455" alt="Чашка кофе">
  </picture>

  <picture v-else-if="route.name == 'catalog-tea'">
    <source media="(max-width: 767px)" srcset="../../images/background/bg-tea-mobile.png">
    <source media="(max-width: 1348px)" srcset="../../images/background/bg-tea-tablet.png">
    <source media="(max-width: 1903px)" srcset="../../images/background/bg-tea-laptop.png">
    <img class="background__img background__img--catalog-hero-tea" src="../../images/background/bg-tea-desktop.png" width="819" height="655" alt="Чашка чая">
  </picture>

  <div class="background__div background__div--catalog-hero-top-wall"></div>

  <svg class="background__svg-vawe background__svg-vawe--catalog-hero" width="3720" height="568" aria-hidden="true">
    <use xlink:href="../../assets/bg-sprite.svg#bg-catalog-vawe-for-hero"></use>
  </svg>
  <svg class="background__svg-vawe-for-tablet background__svg-vawe--catalog-hero" width="1348" height="201" aria-hidden="true">
    <use xlink:href="../../assets/bg-sprite.svg#bg-catalog-vawe-for-hero-for-tablet"></use>
  </svg>

  <div class="background__div background__div--catalog-hero-bottom-wall"></div>

</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_background.scss";
.background {
  /*Для страницы каталога*/

  &__div--catalog-hero-top-wall {
    top: 0;
    height: 601px;
    background-color: $color-ucla-gold;

    @include vp-laptop {
      height: 430px;
    }

    @include vp-tablet {
      height: 628px;
    }

    @include vp-mobile {
      height: 309px;
    }
  }

  &__svg-vawe--catalog-hero {
    height: 568px;
    top: 600px;
    color: $color-ucla-gold;

    @include vp-laptop {
      height: 291px;
      top: 429px;
    }

    @include vp-tablet {
      height: 201px;
      top: 615px;
    }

    @include vp-mobile {
      height: 115px;
      top: 300px;
    }
  }

  &__div--catalog-hero-bottom-wall {
    top: 600px;
    bottom: 63px;
    background-color: $color-white;

    @include vp-laptop {
      top: 431px;
      bottom: 46px;
    }

    @include vp-tablet {
      top: 630px;
      bottom: 347px;
    }

    @include vp-mobile {
      top: 305px;
      bottom: 165px;
    }
  }

  &__img--catalog-hero-corns {
    width: 820px;
    height: 710px;
    top: 53px;
    left: calc(50% + 38px);
    rotate: 17deg;
    z-index: 1;

    @include vp-laptop {
      left: calc(50% + 315px);
      top: 54px;
    }

    @include vp-tablet {
      rotate: 0deg;
      width: 762px;
      height: 488px;
      left: calc(50% - 384px);
      top: 417px;
    }

    @include vp-mobile {
      width: 371px;
      height: 291px;
      left: calc(50% - 208px);
      top: 177px;  
    }
  }

  &__img--catalog-hero-cup {
    width: 682px;
    height: 455px;
    top: 120px;
    left: calc(50% + 138px);
    z-index: 2;

    @include vp-laptop {
      width: 483px;
      height: 322px;
      top: 85px;
      left: calc(50% + 96px);
    }

    @include vp-tablet {
      width: 558px;
      height: 401px;
      top: 410px;
      left: calc(50% - 301px);
    }

    @include vp-mobile {
      width: 306px;
      height: 205px;
      top: 196px;
      left: calc(50% - 168px);
    }
  }

  &__img--catalog-hero-tea {
    width: 819px;
    height: 655px;
    top: 250px;
    left: calc(50% + 263px);
    z-index: 2;

    @include vp-laptop {
      width: 578px;
      height: 463px;
      top: 177px;
      left: calc(50% + 185px);
    }

    @include vp-tablet {
      width: 670px;
      height: 572px;
      top: 273px;
      left: calc(50% - 286px);
    }

    @include vp-mobile {
      width: 327px;
      height: 279px;
      top: 134px;
      left: calc(50% - 139px);
    }
  }

  &__div--catalog-footer-wall {
    top: 30px;
    bottom: -1px;
    background-color: $color-white;
    width: 3720px;
    left: calc(50% - 1860px);

    @include vp-laptop {
      top: 30px;
      width: 100%;
      left: 0;
      right: 0;
    }

    @include vp-tablet {
      top: 44px;
    }

    @include vp-mobile {
      top: 23px;
    }
  }

  &__svg-vawe--catalog-back-footer {
    z-index: -6;
    height: 408px;
    top: 52px;
    color: $color-ucla-gold;

    @include vp-laptop {
      height: 209px;
      top: 32px;
    }

    @include vp-tablet {
      height: 196px;
      top: 51px;
    }

    @include vp-mobile {
      height: 112px;
      top: 25px;
    }
  }

  &__svg-vawe--catalog-front-footer {
    height: 407px;
    top: 30px;
    color: $color-cultured;
    z-index: -5;

    @include vp-laptop {
      height: 208px;
      top: 22px;
    }

    @include vp-tablet {
      top: 35px;
    }

    @include vp-mobile {
      top: -29px;
    }
  }

  &__img--catalog-footer-corns {
    width: 730px;
    height: 500px;
    top: 20px;
    left: calc(50% + 257px);
    z-index: -4;

    @include vp-laptop {
      width: 569px;
      height: 467px;
      left: calc(50% + 155px);
      top: -30px;
    }

    @include vp-tablet {
      width: 517px;
      height: 346px;
      left: calc(50% - 288px);
      top: 30px;
    }

    @include vp-mobile {
      width: 339px;
      height: 231px;
      left: calc(50% - 172px);
      top: 21px;
    }
  }

  &__img--catalog-footer-cup {
    width: 682px;
    height: 455px;
    left: calc(50% + 313px);
    top: 1px;
    z-index: -2;

    @include vp-laptop {
      width: 483px;
      height: 322px;
      left: calc(50% + 220px);
      top: 0;      
    }

    @include vp-tablet {
      width: 406px;
      height: 305px;
      left: calc(50% - 247px);
      top: 28px;
    }

    @include vp-mobile {
      width: 307px;
      height: 204px;
      left: calc(50% - 140px);
      top: 20px;
    }
  }
}
</style>