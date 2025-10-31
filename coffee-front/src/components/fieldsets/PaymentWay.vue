<script setup>
import { reactive } from "vue";
const props = defineProps(["inputData", "selectedValue"]);

const selectedValues = reactive([]);
</script>

<template>
  <div class="radio-group">
    <p class="radio-group__title">{{ inputData.legend }}:</p>

    <div class="radio-group__wrapper">
      <div class="radio-group__item" v-for="index in inputData.fieldsCount">
        <input
          class="radio-group__item-field visually-hidden"
          :id="`${inputData.name}-${inputData.values[index - 1]}`"
          type="radio"
          :name="`${inputData.name}`"
          v-model="selectedValues"
          @input="$emit('set-value', $event.target.value)"
          :value="inputData.values[index - 1]"
          :checked="selectedValue == inputData.values[index - 1]"
        />
        <label
          class="radio-group__item-label"
          :for="`${inputData.name}-${inputData.values[index - 1]}`"
        >
          <span class="radio-group__label-text">{{
            inputData.labelStrs[index - 1]
          }}</span>
          <span class="radio-group__label-price"
            >{{ inputData.labelPrices[index - 1] }} ₽</span
          >
        </label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.radio-group {
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 13px;

  @include vp-laptop {
    gap: 10px;
  }

  @include vp-tablet {
    gap: 25px;
  }

  @include vp-mobile {
    gap: 22px;
  }

  &__title,
  &__label-text,
  &__label-price {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    color: $color-raising-black;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 24px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 16px;
    }
  }

  &__label-price {
    font-weight: 700;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include vp-laptop {
      gap: 7px;
    }

    @include vp-tablet {
      gap: 20px;
    }

    @include vp-mobile {
      gap: 21px;
    }
  }

  &__item-label {
    display: flex;
    align-items: center;
    gap: 6px;
    position: relative;
    padding: 0 0 0 28px;
    cursor: pointer;
    user-select: none;

    @include vp-laptop {
      padding: 0 0 0 20px;
      gap: 4px;
    }

    @include vp-tablet {
      padding: 0 0 0 30px;
      gap: 3px;
    }

    @include vp-mobile {
      padding: 0 0 0 28px;
      gap: 4px;
    }

    &::before {
      content: "";
      background-color: $color-platinum;
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);

      @include vp-laptop {
        width: 12px;
        height: 12px;
      }

      @include vp-tablet {
        width: 16px;
        height: 16px;
      }
    }
  }

  &__item-field:checked ~ .radio-group__item-label::before {
    background-color: $color-ucla-gold;
  }
}
</style>
