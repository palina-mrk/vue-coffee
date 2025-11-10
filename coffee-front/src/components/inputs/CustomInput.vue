<script setup>
defineProps(["modelValue", "inputData"]);
import { ref } from "vue";

const isError = ref(false);
</script>

<template>
  <div :class="{ 'custom-input': true, 'custom-input--error': isError }">
    <label
      class="custom-input__label visually-hidden"
      :for="inputData.id"
    ></label>
    <input
      class="custom-input__field"
      :type="inputData.type ? inputData.type : 'text'"
      :value="modelValue"
      :name="inputData.name"
      :id="inputData.id"
      :placeholder="inputData.placeholder"
      @input="
        isError = $event.target.value.length == 0;
        $emit('update:modelValue', $event.target.value);
      "
      @focus="isError = false"
    />
    <span class="custom-input__info">{{
      inputData.error ? inputData.error : ""
    }}</span>
  </div>
</template>

<style lang="scss" scoped>
.custom-input {
  font-family: $ff-gilroy, sans-serif;
  display: flex;
  gap: 3px;
  align-items: end;
  position: relative;
  width: 100%;

  &__field {
    margin: 0;
    padding: 23px 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-color: $color-cultured-f6;
    background-color: $color-lotion;
    border-radius: 5px;
    color: $color-raising-black;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      padding: 15px 40px;
      border-width: 0.7px;
      border-radius: 4px;
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      border: none;
      background-color: $color-antiflash-white-f3;
      padding: 22px 50px;
      font-size: 20px;
      line-height: 26px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 18px;
      padding: 16px 30px;
    }

    &::placeholder {
      color: $color-silver-sand-c4;

      @include vp-tablet {
        color: $color-chinese-silver;
      }
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none; /* Кнопки спрятаны */
    }
  }

  &__info {
    position: absolute;
    right: 0;
    bottom: -18px;
    color: $color-ucla-gold;
    font-weight: 500;
    font-size: 16px;
    font-family: $ff-gilroy, sans-serif;
    line-height: 19px;
    text-align: right;
    display: none;

    @include vp-laptop {
      font-size: 10px;
      line-height: 11px;
      bottom: -14px;
    }

    @include vp-tablet {
      z-index: 1;
      font-size: 12px;
      line-height: 14px;
      bottom: -10px;
    }

    @include vp-mobile {
      font-size: 10px;
      line-height: 12px;
      bottom: -10px;
    }
  }
}

.custom-input--error {
  .custom-input__info {
    display: flex;
  }

  .custom-input__field {
    @include vp-tablet {
      padding: 22px 50px 18px;
      margin: 0 0 4px;
    }

    @include vp-mobile {
      padding: 16px 30px 12px;
      margin: 0 0 4px;
    }
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
}
</style>
