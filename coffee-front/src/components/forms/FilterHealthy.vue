<script setup>
import { ref, reactive } from 'vue';

const selectedValues = ref([])
const labels = reactive(['Цикорий и корень цикория','Напитки для здоровья','Ячменные напитки','Протеиновые смеси','Толокняные каши'])
const values = reactive(['chicory-and-chicory-root', 'healthy-drinks', 'barley-drinks', 'protein-mixtures', 'bearberry-porridge'])
const length = ref(5)
</script>

<template>
  <div class="filter__group">
    <h2 class="filter__groupname visually-hidden">Фильтр чая</h2>

    <div 
      class="custom-checkbox-card"
      v-for="i in length"
    >
      <input 
        class="custom-checkbox-card__field visually-hidden" 
        :id="`healthy-filter-${values[i - 1]}`" 
        type="checkbox" 
        name="healthy-filter" 
        :value="`${labels[i - 1]}`"
        v-model="selectedValues">
      <label 
        :for="`healthy-filter-${values[i - 1]}`"  class="custom-checkbox-card__label">
        <picture>
          <source media="(max-width: 767px)" srcset="../../images/healthy-card/healthy-mobile.png">
          <source media="(max-width: 1348px)" srcset="../../images/healthy-card/healthy-tablet.png">
          <source media="(max-width: 1903px)" srcset="../../images/healthy-card/healthy-product-laptop.png">
          <img class="custom-checkbox-card__label-img" src="../../images/healthy-card/healthy-product-desktop.png" width="331" height="175" alt="Карточка вида товара для вендинга">
        </picture>
        <span class="custom-checkbox-card__label-text">{{ labels[i - 1] }}</span>
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
  font-family: $ff-gilroy;

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
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    font-family: $ff-gilroy sans-serif;
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
