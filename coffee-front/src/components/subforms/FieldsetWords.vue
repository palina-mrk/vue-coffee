<script setup>
import { ref } from 'vue';
const props = defineProps(['name','legend','labels','values','fieldsCount'])

const selectedValues = ref([])
</script>

<template>
  
  <fieldset class="fieldset">

    <legend class="fieldset__name">{{ legend }}</legend>
    <div
      v-for="index in fieldsCount" 
      class="custom-checkbox-words">
      <input 
        class="custom-checkbox-words__field visually-hidden" 
        :id="`coffee-${name}-${values[index - 1]}`" 
        type="checkbox" 
        :name="`coffee-${name}`" 
        v-model="selectedValues"
        @input="$emit('toggle-value', $event.target.value)"
        :value="values[index - 1]">
      <label 
        :for="`coffee-${name}-${values[index - 1]}`" class="custom-checkbox-words__label"
        >{{ labels[index - 1] }}</label>
      </div>
      
  </fieldset>

</template>

<style lang="scss" scoped>
@import "@/scss/blocks/catalogs/_custom-checkbox-words.scss";
* {
font-family: $ff-gilroy;
}

.fieldset {
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  padding: 0;
  margin: 0;

  @include vp-laptop {
    gap: 15px;
  }

  @include vp-tablet {
    gap: 31px;
    max-width: 250px;
  }

  @include vp-mobile {
    gap: 16px;
    max-width: 125px;
  }
}

.fieldset__name {
  font-weight: 700;
  color: $color-black;
  font-size: 25px;
  line-height: 30px;
  margin: 0 0 30px;
  max-width: 200px;

  @include vp-laptop {
    font-size: 18px;
    line-height: 22px;
    margin: 0 0 20px;
    max-width: 100px;
  }

  @include vp-tablet {
    font-size: 32px;
    line-height: 39px;
    margin: 0 0 42px 6px;
    max-width: 180px;
  }

  @include vp-mobile {
    font-size: 16px;
    line-height: 19px;
    margin: 0 0 23px;
    max-width: 110px;
  }
}

</style>
