<script setup>
import { ref, reactive } from "vue";

const selectedValues = ref([]);
const labels = reactive([
  "Турка",
  "Френч-пресс",
  "Мока",
  "Эспрессо",
  "Воронка",
  "Аэропресс",
  "Чашка",
  "Автомат",
]);
const values = reactive([
  "turk",
  "french-press",
  "mocha",
  "espresso",
  "funnel",
  "aeropress",
  "cup",
  "machine",
]);
const length = ref(8);
</script>

<template>
  <fieldset class="fieldset__group">
    <legend class="fieldset__groupname visually-hidden">
      Способ приготовления
    </legend>

    <div class="custom-checkbox-card" v-for="i in length">
      <input
        class="custom-checkbox-card__field visually-hidden"
        :id="`coffee-preparation-${values[i - 1]}`"
        type="radio"
        name="coffee-preparation"
        :value="`${labels[i - 1]}`"
        v-model="selectedValues"
        @input="$emit('set-value', $event.target.value)"
      />
      <label
        :for="`coffee-preparation-${values[i - 1]}`"
        class="custom-checkbox-card__label"
      >
        <span class="custom-checkbox-card__label-text">{{
          labels[i - 1]
        }}</span>
        <svg
          class="custom-checkbox-card__label-svg"
          width="85"
          height="85"
          aria-hidden="true"
        >
          <use
            v-bind="{
              'xlink:href':
                '../src/assets/filter-sprite.svg#icon-' + values[i - 1],
            }"
          ></use>
        </svg>
      </label>
    </div>
  </fieldset>
</template>

<style lang="scss" scoped>
.fieldset__group {
  font-family: $ff-gilroy, sans-serif;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  gap: 20px;
  border: none;
  justify-content: space-between;
  width: 100%;

  @include vp-laptop {
    gap: 15px;
  }

  @include vp-tablet {
    flex-wrap: wrap;
    gap: 20px;
    width: 700px;
    justify-content: start;
  }

  @include vp-mobile {
    gap: 10px;
    width: 340px;
  }
}

.custom-checkbox-card {
  &__label {
    display: flex;
    padding: 28px 20px 35px;
    gap: 20px;
    height: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    background-color: $color-white;
    border-radius: 20px;
    box-shadow: 0 0 30px 0 $color-spanish-gray-c95-25;
    font-family: $ff-gilroy, sans-serif;
    width: 189px;
    min-height: 190px;
    cursor: pointer;

    @include vp-laptop {
      width: 134px;
      min-height: 134px;
      box-shadow: 0 0 21px 0 $color-spanish-gray-c95-25;
      padding: 20px 20px 23px;
      border-radius: 14px;
      gap: 7px;
    }

    @include vp-tablet {
      width: 220px;
      min-height: 220px;
      box-shadow: 0 0 61px 0 $color-spanish-gray-c95-25;
      padding: 20px 17px 30px;
      border-radius: 20px;
      gap: 2px;
      justify-content: space-between;
    }

    @include vp-mobile {
      width: 106px;
      min-height: 110px;
      box-shadow: 0 0 30px 0 $color-spanish-gray-c95-25;
      padding: 10px 10px 15px;
      border-radius: 10px;
      gap: 1px;
      justify-content: space-between;
    }
  }

  &__label-text {
    color: $color-black;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      font-size: 24px;
      line-height: 29px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 14px;
    }
  }

  &__label-svg {
    color: $color-dark-liver;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 85px;
    max-height: 85px;

    @include vp-laptop {
      max-width: 47px;
      max-height: 67px;
    }

    @include vp-tablet {
      width: 120px;
      height: 120px;
      max-width: unset;
      max-height: unset;
    }

    @include vp-mobile {
      width: 60px;
      height: 60px;
    }
  }

  &__field:checked ~ .custom-checkbox-card__label {
    background-color: $color-ucla-gold;
    color: $color-white;

    .custom-checkbox-card__label-svg,
    .custom-checkbox-card__label-text {
      color: $color-white;
    }
  }
}
</style>
