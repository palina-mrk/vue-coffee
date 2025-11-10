<script setup>
import { computed } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();

import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();

const details = computed(() =>
  catalogStore.isLoaded
    ? catalogStore.getFullInfo(Number(route.params.productID)).details
    : [],
);

const arabicaStrings = computed(() =>
  details.value.reduce(
    (acc, detail) =>
      detail.kind == "Арабика"
        ? [...acc, detail.variety + ", " + detail.geography]
        : acc,
    [],
  ),
);

const robustaStrings = computed(() =>
  details.value.reduce(
    (acc, detail) =>
      detail.kind == "Робуста"
        ? [...acc, detail.processing.toLowerCase() + " " + detail.geography]
        : acc,
    [],
  ),
);

const processingKinds = computed(() =>
  details.value.reduce(
    (acc, detail) =>
      detail.kind == "Робуста"
        ? [...acc, detail.processing.toLowerCase()]
        : acc,
    [],
  ),
);

const kind = computed(() =>
  catalogStore.isLoaded
    ? catalogStore.getKind(Number(route.params.productID)).toLowerCase()
    : "",
);

const acidity = computed(() =>
  catalogStore.isLoaded
    ? catalogStore.getFullInfo(Number(route.params.productID)).hue.acidity
    : "",
);
</script>

<template>
  <div v-if="catalogStore.isLoaded" class="details-card">
    <h3 class="details-card__heading">Характеристики</h3>
    <ul class="details-card__list">
      <li class="details-card__item" v-if="arabicaStrings.length">
        <p class="details-card__item-title">Арабика:</p>

        <ul class="details-card__item-sublist">
          <li
            class="details-card__item-subline"
            v-for="arabicaString in arabicaStrings"
          >
            {{ arabicaString }}
          </li>
        </ul>
      </li>
      <li class="details-card__item" v-if="robustaStrings.length">
        <p class="details-card__item-title">Робуста:</p>
        <span class="details-card__item-str">{{
          robustaStrings.join(", ")
        }}</span>
      </li>
      <li class="details-card__item" v-if="processingKinds.length">
        <p class="details-card__item-title">Способ обработки:</p>
        <span class="details-card__item-str">{{
          processingKinds.join(", ")
        }}</span>
      </li>

      <li class="details-card__item" v-else>
        <p class="details-card__item-title">Кислинка:</p>
        <span class="details-card__item-str">{{
          acidity > 6 ? "высокая" : acidity > 3 ? "средняя" : "низкая"
        }}</span>
      </li>

      <li class="details-card__item">
        <p class="details-card__item-title">Вид кофе:</p>
        <span class="details-card__item-str">{{ kind }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.details-card {
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
  border-radius: 20px;
  border: none;
  background-color: $color-white;

  @include vp-laptop {
    padding: 45px 95px 40px 55px;
    box-shadow: 0px 0px 22px 0px $color-spanish-gray-c95-25;
    border-radius: 14px;
  }

  @include vp-tablet {
    padding: 50px 35px 70px;
    box-shadow: 0px 0px 61px 0px $color-spanish-gray-c95-25;
    border-radius: 10px;
    gap: 25px;
  }

  @include vp-mobile {
    box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
    padding: 32px 15px 29px;
    gap: 15px;
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
      font-size: 25px;
      line-height: 32px;
    }

    @include vp-mobile {
      font-size: 18px;
      line-height: 23px;
    }
  }

  &__list {
    margin: auto 0 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;

    @include vp-tablet {
      margin: 0;
    }
  }

  &__item {
    margin: 0;
    padding: 10px 1px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 71px;
    position: relative;

    @include vp-laptop {
      min-height: 51px;
      padding: 4px 1px;
    }

    @include vp-tablet {
      min-height: 74px;
      padding: 7px 1px;
    }

    @include vp-mobile {
      min-height: 36px;
      padding: 4px 1px;
    }

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: $color-philippine-silver-b2;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  &__item-sublist {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: end;
    text-align: right;
    max-width: 70%;
  }

  &__item-subline,
  &__item-title,
  &__item-line,
  &__item-str {
    margin: 0;
    padding: 0;
    font-size: 25px;
    line-height: 32px;
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;

    @include vp-laptop {
      font-size: 18px;
      line-height: 23px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__item-title {
    font-weight: 700;
  }

  &__item-subline,
  &__item-line,
  &__item-str {
    font-weight: 500;
    text-align: right;
  }
}
</style>
