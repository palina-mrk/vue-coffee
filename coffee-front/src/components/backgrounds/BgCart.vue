<script setup>
</script>

<template>
  <div class="background__div background__div--cart-top-wall"></div>

  <svg class="background__svg-vawe background__svg-vawe--cart-top" width="3720" height="568" aria-hidden="true">
    <use xlink:href="../../assets/bg-sprite.svg#bg-cart-top"></use>
  </svg>

  <svg class="background__svg-vawe-for-tablet background__svg-vawe--cart-top" width="1348" height="192" aria-hidden="true">
    <use xlink:href="../../assets/bg-sprite.svg#bg-cart-top-for-tablet"></use>
  </svg>

  <svg class="background__svg-vawe background__svg-vawe--cart-bottom" width="3720" height="384" aria-hidden="true">
    <use xlink:href="../../assets/bg-sprite.svg#bg-cart-bottom"></use>
  </svg>

  <div class="background__div background__div--cart-middle-wall"></div>

  <svg class="background__svg-vawe-for-tablet background__svg-vawe--cart-bottom" width="1348" height="201" aria-hidden="true">
    <use xlink:href="../../assets/bg-sprite.svg#bg-cart-bottom-for-tablet"></use>
  </svg>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_background.scss";
/*
.background {

  &__div {
    position: absolute;
    left: 0;
    right: 0;
    z-index: -6;
  }

  &__svg-vawe {
    display: flex;
    position: absolute;
    z-index: -4;
    min-width: 100%;
    width: 3720px;
    left: 50%;
    transform: translateX(-50%);

    @include vp-laptop {
      width: 1904px;
      min-width: unset;
    }

    @include vp-tablet {
      display: none;
    }
  }

  &__svg-vawe-for-desktop {
    @include vp-laptop {
      display: none;
    }
  }

  &__svg-vawe-for-laptop {
    @include vp-laptop {
      display: flex;
      position: absolute;
      z-index: -4;
      width: 1904px;
      left: 50%;
      transform: translateX(-50%);
    }

    @include vp-tablet {
      display: none;
    }
  }

  &__svg-vawe-for-tablet {
    display: none;
    position: absolute;
    z-index: -2;
    left: 50%;
    transform: translateX(-50%);
  
    @include vp-tablet {
      width: 1348px;
      display: flex;
    }

    @include vp-mobile {
      width: 767px;
    }
  }

  /* Модификации для корзиины 
  &__div--cart-top-wall {
    top: 0;
    height: 481px;
    background-color: $color-cornsilk;

    @include vp-laptop {
      height: 340px;
    }

    @include vp-tablet {
      height: 335px;
    }

    @include vp-mobile {
    }
  }

  &__svg-vawe--cart-top {
    height: 546px;
    top: 480px;
    color: $color-cornsilk;

    @include vp-laptop {
      top: 339px;
      color: black;
      height: 288px; 
    }

    @include vp-tablet {
      height: 199px;
      top: 334px;
    }

    @include vp-mobile {
    }
  }


  &__div--cart-middle-wall {
    top: 485px;
    bottom: 110px;
    background-color: $color-white;
    width: 3720px;
    left: calc(50% - 1860px);
    z-index: -6;

    @include vp-laptop {
      width: 100%;
      left: 0;
      right: 0;
      top: 340px;
    }

    @include vp-tablet {
      top: 337px;
    }

    @include vp-mobile {
    }
  }

  &__svg-vawe--cart-bottom {
    height: 384px;
    bottom: 110px;
    color: $color-cultured;
    background-color: $color-white;

    @include vp-laptop {
      height: 195px;
    }

    @include vp-tablet {
      display: none;
    }

    @include vp-mobile {
    }
  }
}*/
</style>