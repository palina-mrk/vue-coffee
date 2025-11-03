<script setup>
import { ref, reactive } from "vue";

const selectedValues = ref([]);
const labels = reactive([
  "Гранулированный кофе",
  "Гранулированный какао",
  "Гранулированный цикорий",
  "Гранулированные кофейные напитки",
  "Зерновой кофе",
  "Кофе порошкообразный",
  "Сухое молоко гранулированное",
]);
const values = reactive([
  "granulated-coffee",
  "granulated-cocoa",
  "granulated-chicory",
  "granulated-coffee-drinks",
  "bean-coffee",
  "powdered-coffee",
  "granulated-milk-powder",
]);
const length = ref(7);
</script>

<template>
  <div class="filter__group">
    <h2 class="filter__groupname visually-hidden">Фильтр чая</h2>

    <div class="custom-checkbox-card" v-for="i in length">
      <input
        class="custom-checkbox-card__field visually-hidden"
        :id="`vending-filter-${values[i - 1]}`"
        type="checkbox"
        name="vending-filter"
        :value="`${labels[i - 1]}`"
        v-model="selectedValues"
        @input="$emit('toggle-value', $event.target.value)"
      />
      <label
        :for="`vending-filter-${values[i - 1]}`"
        class="custom-checkbox-card__label"
      >
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="../../images/vending-card/vending-product-mobile.png"
          />
          <source
            media="(max-width: 1348px)"
            srcset="../../images/vending-card/vending-product-tablet.png"
          />
          <source
            media="(max-width: 1903px)"
            srcset="../../images/vending-card/vending-product-laptop.png"
          />
          <img
            class="custom-checkbox-card__label-img"
            src="../../images/vending-card/vending-product-desktop.png"
            width="331"
            height="175"
            alt="Карточка вида товара для вендинга"
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
    height: 468px;
    gap: 20px;
  }

  @include vp-tablet {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    justify-content: flex-start;
    height: unset;
  }

  @include vp-mobile {
    gap: 10px 18px;
  }
}

.custom-checkbox-card {
  &__label {
    display: flex;
    padding: 20px 34px 25px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-color: $color-white;
    border-radius: 20px;
    box-shadow: 0 0 30px 0 $color-spanish-gray-c95-25;
    width: 400px;
    height: 320px;
    cursor: pointer;
    gap: 40px;

    @include vp-laptop {
      padding: 15px 23px;
      width: 280px;
      height: 224px;
      box-shadow: 0 0 21px 0 $color-spanish-gray-c95-25;
      border-radius: 14px;
      gap: 32px;
    }

    @include vp-tablet {
      width: 340px;
      height: 224px;
      box-shadow: 0 0 61px 0 $color-spanish-gray-c95-25;
      padding: 30px 30px 23px;
      gap: 17px;
      border-radius: 10px;
      flex-direction: column-reverse;
      justify-content: end;
    }

    @include vp-mobile {
      width: 160px;
      height: 110px;
      box-shadow: 0 0 30px 0 $color-spanish-gray-c95-25;
      padding: 10px 9px;
      gap: 3px;
    }
  }

  &__label-text {
    color: $color-black;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    font-family: $ff-gilroy, sans-serif;
    text-align: center;
    min-height: 40px;

    @include vp-laptop {
      font-size: 18px;
      line-height: 21px;
      min-height: 30px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 24px;
      min-height: 36px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 15px;
      min-height: 22px;
    }
  }

  &__label-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 331px;
    height: 175px;
    border-radius: 20px;

    @include vp-laptop {
      width: 234px;
      height: 123px;
      border-radius: 14px;
    }

    @include vp-tablet {
      width: 262px;
      height: 116px;
      border-radius: 10px;
    }

    @include vp-mobile {
      width: 128px;
      height: 57px;
      border-radius: 5px;
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
