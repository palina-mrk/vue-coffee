<script setup>
import { ref, reactive } from 'vue';
defineProps(['maxDegree'])

const selectedValues = ref([])
const labels = reactive(['Турка','Френч-пресс','Мока','Эспрессо','Воронка','Аэропресс','Чашка','Автомат'])
const values = reactive(['turk','french-press','mocha','espresso','funnel','aeropress','cup','machine'])
const length = ref(8)
</script>

<template>
  <fieldset class="fieldset__group">
    <legend class="fieldset__groupname visually-hidden">Способ приготовления</legend>

    <div 
      class="custom-checkbox-card"
      v-for="i in length"
    >
      <input 
        class="custom-checkbox-card__field visually-hidden" 
        :id="`coffee-preparation-${values[i - 1]}`" 
        type="radio" 
        name="coffee-preparation" 
        :value="`${labels[i - 1]}`"
        v-model="selectedValues"
        @input="$emit('set-value', $event.target.value)">
      <label 
        :for="`coffee-preparation-${values[i - 1]}`"  class="custom-checkbox-card__label">
        <span class="custom-checkbox-card__label-text">{{ labels[i - 1] }}</span>
        <svg class="custom-checkbox-card__label-svg" width="85" height="85" aria-hidden="true">
          <use v-bind="{'xlink:href': '../src/assets/filter-sprite.svg#icon-' + values[i - 1]}"></use>
        </svg>
      </label>
    </div>
  </fieldset>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/catalogs/_custom-checkbox-card.scss";
* {
font-family: $ff-gilroy;
}

.fieldset__group {
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
</style>
