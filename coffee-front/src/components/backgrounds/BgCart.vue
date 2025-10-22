<script setup>
</script>

<template>
  <div class="background__div background__div--cart-top-wall"></div>

  <svg class="background__svg-vawe background__svg-vawe--cart-top" width="3720" height="568" aria-hidden="true">
    <use xlink:href="../../assets/bg-sprite.svg#bg-cart-top"></use>
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
.background {
  /* Модификаации для корзиины */
    &__div--cart-top-wall {
    top: 0;
    height: 500px;
    background-color: $color-cornsilk;

    @include vp-laptop {
    }

    @include vp-tablet {
      display: none;
    }

    @include vp-mobile {
    }
  }

  &__svg-vawe--cart-top {
    height: 546px;
    top: 500px;
    color: $color-cornsilk;

    @include vp-laptop {
    }

    @include vp-tablet {
      display: none;
    }

    @include vp-mobile {
    }
  }


  &__div--cart-middle-wall {
    top: 500px;
    bottom: 110px;
    background-color: $color-white;
    width: 3720px;
    left: calc(50% - 1860px);
    z-index: -6;

    @include vp-laptop {
    }

    @include vp-tablet {
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
      height: 209px;
      
    }

    @include vp-tablet {
      height: 200px;
      
    }

    @include vp-mobile {
    }
  }
}
</style>