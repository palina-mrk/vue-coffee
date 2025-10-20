<script setup>
import SliderCorns from '../sliders/SliderCorns.vue'

defineProps(['maxDegree'])
</script>

<template>
  <fieldset class="filter-form__corns-group">
    <legend class="filter-form__corns-groupname">Степень обжарки</legend>
    <!-- у группы чексбоксов д.б. одинаковый name и v-model -->
      <div 
        class="custom-checkbox-corns"
        v-for="degree in maxDegree"
      >
        <input 
          class="custom-checkbox-corns__field visually-hidden" :id="`coffee-roasting-${maxDegree + 1 - degree}`" 
          type="checkbox" 
          name="coffee-roasting" 
          :value="maxDegree + 1 - degree">
        <label 
          class="custom-checkbox-corns__label" 
          :for="`coffee-roasting-${maxDegree + 1 - degree}`">
          <slider-corns class="slider-corns--label"
          :count="maxDegree + 1 - degree"
          ></slider-corns>
        </label>
      </div>
  </fieldset>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/catalogs/_custom-checkbox-corns.scss";
* {
font-family: $ff-gilroy;
}
fieldset {
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 52px;
  margin: 0;
  padding: 0;
  width: max-content;

  @include vp-laptop {
    gap: 30px;
  }

  @include vp-tablet {
    gap: 40px;
  }

  @include vp-mobile {
    gap: 20px;
  }
}

legend {
  font-weight: 700;
  color: $color-black;
  font-size: 30px;
  line-height: 36px;
  margin: 0 0 46px;

  @include vp-laptop {
    font-size: 22px;
    line-height: 25px;
    margin: 0 0 25px;
  }

  @include vp-tablet {
    font-size: 32px;
    line-height: 39px;
    margin: 0 0 50px;
  }

  @include vp-mobile {
    font-size: 16px;
    line-height: 19px;
    margin: 0 0 24px;
  }
}

</style>
