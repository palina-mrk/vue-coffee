<script setup>
import { ref } from "vue";
const props = defineProps([
  "name",
  "legend",
  "labels",
  "values",
  "fieldsCount",
]);

const selectedValues = ref([]);
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset__name">{{ legend }}</legend>
    <div v-for="index in fieldsCount" class="custom-checkbox-words">
      <input
        class="custom-checkbox-words__field visually-hidden"
        :id="`${name}-${values[index - 1]}`"
        type="checkbox"
        :name="`${name}`"
        v-model="selectedValues"
        @input="$emit('toggle-value', $event.target.value)"
        :value="values[index - 1]"
      />
      <label
        :for="`${name}-${values[index - 1]}`"
        class="custom-checkbox-words__label"
        >{{ labels[index - 1] }}</label
      >
    </div>
  </fieldset>
</template>

<style lang="scss" scoped>
.custom-checkbox-words {
  &__label {
    position: relative;
    padding: 0 0 0 45px;
    display: block;
    color: $color-black;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    font-family: $ff-gilroy, sans-serif;
    cursor: pointer;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
      padding: 0 0 0 32px;
    }

    @include vp-tablet {
      font-size: 24px;
      line-height: 29px;
      padding: 0 0 0 60px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 14px;
      padding: 0 0 0 30px;
    }

    &::before {
      content: "";
      background-color: $color-platinum;
      position: absolute;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      left: 0;
      top: 50%;
      transform: translateY(calc(-50% - 1px));

      @include vp-laptop {
        width: 17px;
        height: 17px;
        transform: translateY(calc(-50% - 1.5px));
      }

      @include vp-tablet {
        width: 40px;
        height: 40px;
        transform: translateY(calc(-50% - 2.5px));
      }

      @include vp-mobile {
        width: 20px;
        height: 20px;
        transform: translateY(calc(-50% - 1px));
      }
    }
  }

  &__field:checked ~ .custom-checkbox-words__label::before {
    background-color: $color-ucla-gold;
  }
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
  font-family: $ff-gilroy, sans-serif;
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
