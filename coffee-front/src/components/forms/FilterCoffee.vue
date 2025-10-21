<script setup>
import RoastingBlock from '../subforms/RoastingBlock.vue'
import DetailsBlock from '../subforms/DetailsBlock.vue'
import { useRoute } from 'vue-router';
import {ref} from 'vue'
const route = useRoute();

const roastingDegrees = ref({})

function updateValues(object, value) {
  if(object[value]) 
    delete object[value];
  else 
    object[value] = true;
}
</script>

<template>
  <div class="filter-form">
    <div class="filter-form__inner">
      <!-- Степень обжарки roasting-->
      <roasting-block
        class="filter-form__corns-block"
        :maxDegree="5"
        @toggle-value="updateValues(roastingDegrees, $event)"
      ></roasting-block>
      
      <!-- Особые свойства details -->
      <details-block class="filter-form__words-block">
      </details-block>
      
      <!-- Способ приготовления -->
      <fieldset class="filter-form__cards-group">
        <legend class="filter-form__cards-groupname visually-hidden">Способ приготовления</legend>

        <div class="custom-checkbox-card">
          <input class="custom-checkbox-card__field visually-hidden" id="coffee-preparation-turk" type="checkbox" name="coffee-preparation" value="turk">
          <label for="coffee-preparation-turk" class="custom-checkbox-card__label">
            <span class="custom-checkbox-card__label-text">Турка</span>
            <svg class="custom-checkbox-card__label-svg" width="82" height="77" aria-hidden="true">
              <use xlink:href="./images/filter-form/filter-sprite.svg#icon-turk"></use>
            </svg>
          </label>
        </div>

        <div class="custom-checkbox-card">
          <input class="custom-checkbox-card__field visually-hidden" id="coffee-preparation-french-press" type="checkbox" name="coffee-preparation" value="french-press">
          <label for="coffee-preparation-french-press" class="custom-checkbox-card__label">
            <span class="custom-checkbox-card__label-text">Френч-пресс</span>
            <svg class="custom-checkbox-card__label-svg" width="67" height="79" aria-hidden="true">
              <use xlink:href="./images/filter-form/filter-sprite.svg#icon-french-press"></use>
            </svg>
          </label>
        </div>

        <div class="custom-checkbox-card">
          <input class="custom-checkbox-card__field visually-hidden" id="coffee-preparation-mocha" type="checkbox" name="coffee-preparation" value="mocha">
          <label for="coffee-preparation-mocha" class="custom-checkbox-card__label">
            <span class="custom-checkbox-card__label-text">Мока</span>
            <svg class="custom-checkbox-card__label-svg" width="67" height="79" aria-hidden="true">
              <use xlink:href="./images/filter-form/filter-sprite.svg#icon-mocha"></use>
            </svg>
          </label>
        </div>

        <div class="custom-checkbox-card">
          <input class="custom-checkbox__field visually-hidden" id="coffee-preparation-espresso" type="checkbox" name="coffee-preparation" value="espresso">
          <label for="coffee-preparation-espresso" class="custom-checkbox-card__label">
            <span class="custom-checkbox-card__label-text">Эспрессо</span>
            <svg class="custom-checkbox-card__label-svg" width="76" height="79" aria-hidden="true">
              <use xlink:href="./images/filter-form/filter-sprite.svg#icon-espresso"></use>
            </svg>
          </label>
        </div>

        <div class="custom-checkbox-card">
          <input class="custom-checkbox-card__field visually-hidden" id="coffee-preparation-funnel" type="checkbox" name="coffee-preparation" value="funnel">
          <label for="coffee-preparation-funnel" class="custom-checkbox-card__label">
            <span class="custom-checkbox-card__label-text">Воронка</span>
            <svg class="custom-checkbox-card__label-svg" width="54" height="72" aria-hidden="true">
              <use xlink:href="./images/filter-form/filter-sprite.svg#icon-funnel"></use>
            </svg>
          </label>
        </div>

        <div class="custom-checkbox-card">
          <input class="custom-checkbox-card__field visually-hidden" id="coffee-preparation-aeropress" type="checkbox" name="coffee-preparation" value="aeropress">
          <label for="coffee-preparation-aeropress" class="custom-checkbox-card__label">
            <span class="custom-checkbox-card__label-text">Аэропресс</span>
            <svg class="custom-checkbox-card__label-svg" width="41" height="83" aria-hidden="true">
              <use xlink:href="./images/filter-form/filter-sprite.svg#icon-aeropress"></use>
            </svg>
          </label>
        </div>

        <div class="custom-checkbox-card">
          <input class="custom-checkbox-card__field visually-hidden" id="coffee-preparation-cup" type="checkbox" name="coffee-preparation" value="cup">
          <label for="coffee-preparation-cup" class="custom-checkbox-card__label">
            <span class="custom-checkbox-card__label-text">Чашка</span>
            <svg class="custom-checkbox-card__label-svg" width="67" height="66" aria-hidden="true">
              <use xlink:href="./images/filter-form/filter-sprite.svg#icon-cup"></use>
            </svg>
          </label>
        </div>

        <div class="custom-checkbox-card">
          <input class="custom-checkbox-card__field visually-hidden" id="coffee-preparation-machine" type="checkbox" name="coffee-preparation" value="machine">
          <label for="coffee-preparation-machine" class="custom-checkbox-card__label">
            <span class="custom-checkbox-card__label-text">Автомат</span>
            <svg class="custom-checkbox-card__label-svg" width="64" height="84" aria-hidden="true">
              <use xlink:href="./images/filter-form/filter-sprite.svg#icon-machine"></use>
            </svg>
          </label>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/catalogs/_filter-form.scss";
@import "@/scss/blocks/catalogs/_custom-checkbox-card.scss";
* {
  font-family: $ff-gilroy;
}
</style>
