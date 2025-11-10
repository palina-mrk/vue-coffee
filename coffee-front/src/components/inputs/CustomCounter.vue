<script setup>
const props = defineProps(["modelValue"]);
</script>

<template>
  <div class="custom-counter">
    <button
      class="custom-counter__btn custom-counter__btn--minus"
      type="button"
      :disabled="modelValue < 2"
      @click="$emit('update:modelValue', modelValue - 1)"
    >
      -
    </button>
    <input
      class="custom-counter__field"
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button
      class="custom-counter__btn custom-counter__btn--plus"
      type="button"
      @click="$emit('update:modelValue', modelValue + 1)"
    >
      +
    </button>
  </div>
</template>

<style lang="scss" scoped>
.custom-counter {
  position: relative;
  font-family: $ff-gilroy, sans-serif;

  &__btn {
    margin: 0;
    padding: 10px;
    background-color: transparent;
    border: none;
    display: flex;
    color: $color-black;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 25px;
    line-height: 40px;
    user-select: none;
    position: absolute;
    cursor: pointer;
    top: 0;

    @include vp-laptop {
      padding: 8px;
      font-size: 18px;
      line-height: 20px;
    }

    @include vp-tablet {
      padding: 10px;
      font-size: 20px;
      line-height: 24px;
      top: 6px;
    }

    @include vp-mobile {
      padding: 13px;
      font-size: 20px;
      line-height: 24px;
      top: 0;
    }

    &--minus {
      left: 8px;

      @include vp-laptop {
        left: 7px;
      }

      @include vp-tablet {
        left: 15px;
      }

      @include vp-mobile {
        left: 4px;
      }
    }

    &--plus {
      right: 8px;

      @include vp-laptop {
        right: 7px;
      }

      @include vp-tablet {
        right: 15px;
      }

      @include vp-mobile {
        right: 4px;
      }
    }

    &:hover {
      color: $color-ucla-gold;
    }

    &[disabled] {
      color: $color-chinese-silver;
      cursor: unset;
    }
  }

  &__field {
    margin: 0;
    padding: 15px 46px 11px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-color: $color-light-silver;
    background-color: $color-cultured;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    @include vp-laptop {
      padding: 11px 45px 9px;
      border-width: 0.7px;
      border-radius: 4px;
      font-size: 14px;
      line-height: 15px;
    }

    @include vp-tablet {
      padding: 15px 60px 12px;
      border-width: 1px;
      border-color: $color-ucla-gold;
      border-radius: 5px;
      background-color: $color-cornsilk;
      font-size: 20px;
      line-height: 23px;
    }

    @include vp-mobile {
      font-size: 18px;
      padding: 14px 50px 10px;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none; /* Кнопки спрятаны */
    }
  }
}
</style>
