<script setup>
import { computed } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();

import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();

const tastes = computed(() =>
  catalogStore.isLoaded
    ? catalogStore.getFullInfo(Number(route.params.productID)).taste
    : [],
);
</script>

<template>
  <div v-if="catalogStore.isLoaded" class="taste-card">
    <h3 class="taste-card__heading">Вкус</h3>
    <ul class="taste-card__list">
      <li class="taste-card__item" v-for="taste in tastes">
        <div class="taste-card__item-icon">
          <svg
            class="taste-card__item-svg"
            width="37"
            height="42"
            aria-hidden="true"
          >
            <use xlink:href="../../assets/product-sprite.svg#icon-taste"></use>
          </svg>
        </div>
        <span class="taste-card__item-str">{{ taste }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.taste-card {
  padding: 60px 80px 55px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
  border-radius: 20px;
  border: none;
  background-color: $color-white;
  gap: 50px;

  @include vp-laptop {
    padding: 45px 56px 46px;
    box-shadow: 0px 0px 22px 0px $color-spanish-gray-c95-25;
    border-radius: 14px;
    gap: 30px;
  }

  @include vp-tablet {
    padding: 43px 35px 48px;
    box-shadow: 0px 0px 61px 0px $color-spanish-gray-c95-25;
    gap: 35px;
    border-radius: 10px;
  }

  @include vp-mobile {
    box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
    padding: 19px 15px 21px;
    gap: 20px;
  }

  &__heading {
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 700;
    font-size: 30px;
    line-height: 39px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 22px;
      line-height: 27px;
    }

    @include vp-tablet {
      font-size: 30px;
      line-height: 39px;
    }

    @include vp-mobile {
      font-size: 18px;
      line-height: 23px;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: start;

    @include vp-laptop {
      gap: 20px;
    }

    @include vp-tablet {
      gap: 5px;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  &__item {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 50px;

    @include vp-laptop {
      gap: 30px;
    }

    @include vp-tablet {
      gap: 20px;
    }

    @include vp-mobile {
      gap: 10px;
    }
  }

  &__item-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    background-color: $color-ucla-gold;
    border-radius: 50%;
    padding: 14px 14px 14px 18px;
    margin: 0;

    @include vp-laptop {
      width: 50px;
      height: 50px;
      padding: 10px 4px 10px 8px;
    }

    @include vp-tablet {
      width: 61px;
      height: 61px;
      padding: 12px 12px 12px 16px;
    }

    @include vp-mobile {
      width: 30px;
      height: 30px;
      padding: 6px 6px 6px 8px;
    }
  }

  &__item-svg {
    width: 37px;
    height: 42px;
    color: $color-black;

    @include vp-laptop {
      width: 27px;
      height: 30px;
    }

    @include vp-tablet {
      width: 33px;
      height: 37px;
    }

    @include vp-mobile {
      width: 16px;
      height: 18px;
    }
  }

  &__item-str {
    font-weight: 500;
    font-size: 25px;
    line-height: 32px;
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    width: min-content;

    @include vp-laptop {
      font-size: 18px;
      line-height: 23px;
    }

    @include vp-tablet {
      font-size: 24px;
      line-height: 33px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
