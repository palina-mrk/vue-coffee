<script setup>
import { computed } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();

import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();

const details = computed(() => catalogStore.isLoaded ? catalogStore.getFullInfo(Number(route.params.productID)).details : []);

const arabicaStrings = computed(() => 
details.value.reduce((acc, detail) => 
  (detail.kind == 'Арабика') ?  [...acc, detail.variety + ', ' + detail.geography] : acc,
  [])
);

const robustaStrings = computed(() => 
details.value.reduce((acc, detail) => 
  detail.kind == 'Робуста' ? [...acc, detail.processing.toLowerCase() + ' ' + detail.geography] : acc, []));

const processingKinds = computed(() => 
details.value.reduce((acc, detail) => 
  detail.kind == 'Робуста' ? [...acc, detail.processing.toLowerCase()] : acc, []));

const kind = computed(() => catalogStore.isLoaded ? catalogStore.getKind(Number(route.params.productID)).toLowerCase() : "");

const detailsCount = computed(() => (robustaStrings.value.length > 0) + (arabicaStrings.value.length > 0) + (processingKinds.value.length > 0) + 1);


const roastingDegree = computed(() => catalogStore.isLoaded ? catalogStore.getFullInfo(Number(route.params.productID)).roastingDegree : []);
</script>

<template>
  <div 
  v-if="catalogStore.isLoaded" class="details-card" >
    <h3 class="details-card__heading">Характеристики</h3>
    <ul class="details-card__list">
      <li 
        class="details-card__item"
        v-if="arabicaStrings.length">
        <p class="details-card__item-title">Арабика:</p>
        <ul class="details-card__item-lines"
        v-for="arabicaString in arabicaStrings">
          <li class="details-card__item-line">{{ arabicaString }}</li>
        </ul>
      </li>
      <li 
        class="details-card__item"
        v-if="robustaStrings.length"
        >
        <p class="details-card__item-title">Робуста:</p>
        <span class="details-card__item-str">{{ robustaStrings.join(', ') }}</span>
      </li>
      <li 
        class="details-card__item"
        v-if="processingKinds.length"
        >
        <p class="details-card__item-title">Способ обработки:</p>
        <span class="details-card__item-str">{{ processingKinds.join(', ') }}</span>
      </li>
      <li 
        class="details-card__item">
        <p class="details-card__item-title">Вид кофе:</p>
        <span class="details-card__item-str">{{ kind }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.details-card {
  padding: 60px 80px 55px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
  border-radius: 20px;
  border: none;
  background-color: $color-white;
  gap: 50px;

  @include vp-laptop {
    padding: 40px 56px 46px;
    box-shadow: 0px 0px 22px 0px $color-spanish-gray-c95-25;
    border-radius: 14px;
    gap: 30px;
  }

  @include vp-tablet {
    padding: 41px 35px 50px;
    box-shadow: 0px 0px 61px 0px $color-spanish-gray-c95-25;
    gap: 40px;
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
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      gap: unset;
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
    text-transform: capitalize;

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
