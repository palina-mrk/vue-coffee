<script setup>
import BgCart from "../backgrounds/BgCart.vue";
import TasteCard from "../cards/TasteCard.vue";
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import ProductLarge from "../cards/ProductLarge.vue";
import { useRoute } from "vue-router";
const route = useRoute();

import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();
import {computed} from 'vue';

const category = computed(() => catalogStore.isLoaded ? catalogStore.getFullInfo(Number(route.params.productID)).category : "");
</script>

<template>
  <main>
    <section class="product-hero">
      <bg-cart></bg-cart>

      <div class="container">
        <div class="product-hero__wrapper">
          <custom-breadcrumbs
            class="product-hero__breadcrumbs-list"
          ></custom-breadcrumbs>
          <h1 class="visually-hidden">Карточка товара </h1>
          <product-large></product-large>
          <div class="product-hero__coffee-details" v-if="category == 'coffee'">
            <taste-card class="product-hero__coffee-taste"></taste-card>
          </div>
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

  &__coffee-details {
    display: flex;
    gap: 20px;

    @include vp-tablet {
      flex-direction: column;
    }
  }

  &__coffee-taste {
    width: 400px;

    @include vp-laptop {
      width: 280px;
    }

    @include vp-tablet {
      width: 100%;
    }
  }
}
</style>
