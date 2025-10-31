<script setup>
import { ref, reactive } from "vue";

const selectedValues = reactive([]);
const labels = reactive([
  "Черный чай",
  "Травяной чай",
  "Зелёный чай",
  "Матча",
  "Молочный улунг",
  "Пуэр",
  "Кофейные напитки",
]);
const values = reactive([
  "black-tea",
  "herbal-tea",
  "green-tea",
  "matcha",
  "milk-oolong",
  "pu-erh",
  "coffee-drinks",
]);
const length = ref(7);

const imageVariant = (label) => {
  switch (label) {
    case "Черный чай":
    case "Травяной чай":
      return "black";
    case "Зелёный чай":
    case "Матча":
      return "green";
    case "Молочный улунг":
    case "Пуэр":
      return "milk";
    case "Кофейные напитки":
      return "drinks";
    default:
      return null;
  }
};
</script>

<template>
  <div class="filter__group">
    <h2 class="filter__groupname visually-hidden">Фильтр чая</h2>

    <div class="custom-checkbox-card" v-for="i in length">
      <input
        class="custom-checkbox-card__field visually-hidden"
        :id="`tea-filter-${values[i - 1]}`"
        type="checkbox"
        name="tea-filter"
        :value="`${labels[i - 1]}`"
        v-model="selectedValues"
        @input="$emit('toggle-value', $event.target.value)"
      />
      <label
        :for="`tea-filter-${values[i - 1]}`"
        class="custom-checkbox-card__label"
      >
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="../../images/tea-card/tea-mobile.png"
          />
          <source
            media="(max-width: 1348px)"
            srcset="../../images/tea-card/tea-tablet.png"
          />
          <source
            media="(max-width: 1903px)"
            :srcset="`../../src/images/tea-card/tea-${imageVariant(labels[i - 1])}-laptop.png`"
          />
          <img
            class="custom-checkbox-card__label-img"
            :src="`../../src/images/tea-card/tea-${imageVariant(labels[i - 1])}-desktop.png`"
            width="150"
            height="200"
            alt="Карточка вида чая"
          />
        </picture>
        <span class="custom-checkbox-card__label-text">{{
          labels[i - 1]
        }}</span>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter__group {
  background-color: transparent;
  display: flex;
  padding: 0;
  margin: 0;
  gap: 30px 20px;
  border: none;
  height: 670px;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  font-family: $ff-gilroy, sans-serif;

  @include vp-laptop {
    height: 475px;
    gap: 21px 20px;
  }

  @include vp-tablet {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-start;
    height: unset;
  }

  @include vp-mobile {
    gap: 10px;
  }
}

.custom-checkbox-card {
  &__label {
    display: flex;
    padding: 30px 30px 35px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-color: $color-white;
    border-radius: 20px;
    box-shadow: 0 0 30px 0 $color-spanish-gray-c95-25;
    width: 400px;
    height: 320px;
    cursor: pointer;

    @include vp-laptop {
      padding: 20px 20px 29px;
      width: 280px;
      height: 227px;
      box-shadow: 0 0 21px 0 $color-spanish-gray-c95-25;
      border-radius: 14px;
    }

    @include vp-tablet {
      width: 220px;
      height: 220px;
      box-shadow: 0 0 61px 0 $color-spanish-gray-c95-25;
      padding: 8px 30px;
      gap: 15px;
      border-radius: 10px;
      flex-direction: column-reverse;
      justify-content: center;
    }

    @include vp-mobile {
      width: 106px;
      height: 110px;
      box-shadow: 0 0 30px 0 $color-spanish-gray-c95-25;
      padding: 4px;
      gap: 1px;
    }
  }

  &__label-text {
    color: $color-black;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    font-family: $ff-gilroy, sans-serif;
    text-align: center;

    @include vp-laptop {
      font-size: 18px;
      line-height: 21px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 24px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 15px;
    }
  }

  &__label-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 200px;

    @include vp-laptop {
      width: 101px;
      height: 141px;
    }

    @include vp-tablet {
      width: 98px;
      height: 139px;
    }

    @include vp-mobile {
      width: 48px;
      height: 68px;
    }
  }

  &__field:checked ~ .custom-checkbox-card__label {
    background-color: $color-ucla-gold;
    color: $color-white;

    .custom-checkbox-card__label-text {
      color: $color-white;
    }
  }
}
</style>
