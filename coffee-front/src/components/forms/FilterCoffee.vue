<script setup>
import RoastingBlock from "../fieldsets/RoastingBlock.vue";
import DetailsBlock from "../fieldsets/DetailsBlock.vue";
import PreparationBlock from "../toggles/PreparationBlock.vue";
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
        @toggle-value="$emit('set-roasting', $event)"
      ></roasting-block>

      <!-- Особые свойства details -->
      <details-block
        class="filter-form__words-block"
        @toggle-value="$emit('set-details', $event)"
      >
      </details-block>

      <!-- Способ приготовления -->
      <preparation-block
        class="filter-form__cards-group"
        @set-value="$emit('set-preparation', $event)"
      ></preparation-block>

      <!--p>{{preparationWay}}</p>

      <p>{{ otherDetails }}</p>
      @toggle-value="updateValues(roastingDegrees, $event)"
     @toggle-value="updateValues(otherDetails[$event.name], $event.value)"
     @set-value="preparationWay = $event"
      
      <p>{{ roastingDegrees }}</p-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-form {
  display: flex;
  flex-direction: column;
  font-family: $ff-gilroy, sans-serif;
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

  &__corns-block,
  &__words-block {
    height: 575px;

    @include vp-laptop {
      height: 393px;
    }

    @include vp-tablet {
      height: unset;
    }
  }

  &__words-block {
    @include vp-tablet {
      height: 1300px;
    }

    @include vp-mobile {
      height: 650px;
    }
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
