<script setup>
import BgCart from "../backgrounds/BgCart.vue";
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import ProductLarge from "../cards/ProductLarge.vue";
import { useRoute } from "vue-router";
const route = useRoute();

</script>

<template>
  <main>
    <section class="product-hero" style="min-height: 2000px;">
      <bg-cart></bg-cart>

      <div class="container">
        <div class="product-hero__wrapper">
          <custom-breadcrumbs
            class="product-hero__breadcrumbs-list"
          ></custom-breadcrumbs>
          <h1 class="visually-hidden">Карточка товара </h1>
          <product-large></product-large>
          <p>{{ route }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.product-hero {
  position: relative;
  width: 100%;
  padding: 201px 0 110px;
  margin: 0;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  overflow: hidden;
  height: 100%;

  @include vp-laptop {
    padding: 145px 0 110px;
  }

  @include vp-tablet {
    padding: 173px 0 0;
  }

  @include vp-mobile {
    padding: 100px 0 0;
  }


  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 37px;
    margin: 0 0 25px;

    @include vp-laptop {
      gap: 30px;
      margin: 0 0 20px;
    }

    @include vp-tablet {
      gap: 56px;
      margin: 0 0 30px;
    }

    @include vp-mobile {
      gap: 13px;
      margin: 0 0 30px;
    }
  }

  &__breadcrumbs-list {
    margin: 0;
  }

  &__bottom-forms {
    width: 100%;
    display: flex;
    gap: 20px;

    @include vp-tablet {
      flex-direction: column;
      gap: 90px;
      position: relative;
      width: calc($max-width-tablet + 68px);
      left: -34px;
    }

    @include vp-mobile {
      gap: 20px;
      width: calc($max-width-mobile + 36px);
      left: -18px;
    }
  }

  &__info-card {
    position: fixed;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;

    @include vp-tablet {
      top: 80px;
    }

    @include vp-mobile {
      top: 20px;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100vw;
      height: 100vh;
      left: 50%;
      transform: translateX(-50%);
      top: -250px;
      background-color: $color-quick-silver-25;
      z-index: -1;

      @include vp-tablet {
        top: -80px;
      }

      @include vp-mobile {
        top: -20px;
      }
    }
  }
}
</style>
