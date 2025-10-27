<script setup>
import RoastingBlock from "../subforms/RoastingBlock.vue";
import DetailsBlock from "../subforms/DetailsBlock.vue";
import PreparationBlock from "../subforms/PreparationBlock.vue";
import { useRoute } from "vue-router";
import { ref, reactive } from "vue";
const route = useRoute();

const roastingDegrees = ref({});
const otherDetails = reactive({
  geography: {},
  acidity: {},
  processing: {},
  actions: {},
  kind: {},
});
const preparationWay = ref("");

function updateValues(object, value) {
  if (object[value]) delete object[value];
  else object[value] = true;
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
      <details-block
        class="filter-form__words-block"
        @toggle-value="updateValues(otherDetails[$event.name], $event.value)"
      >
      </details-block>

      <!-- Способ приготовления -->
      <preparation-block
        class="filter-form__cards-group"
        @set-value="preparationWay = $event"
      ></preparation-block>

      <!--p>{{preparationWay}}</p>

      <p>{{ otherDetails }}</p>

      <p>{{ roastingDegrees }}</p-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  font-family: $ff-gilroy;
}
.filter-form {
  display: flex;
  flex-direction: column;
  gap: 70px;

  @include vp-laptop {
    gap: 48px;
  }

  @include vp-tablet {
    gap: 51px;
  }

  @include vp-mobile {
    gap: 35px;
  }

  &__inner {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    color: $color-black;

    @include vp-laptop {
      gap: 15px 20px;
    }

    @include vp-tablet {
      flex-direction: column;
      gap: 20px;
    }

    @include vp-mobile {
      gap: 10px;
    }
  }
}
</style>
