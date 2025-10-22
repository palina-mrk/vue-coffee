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
    >-</button>
    <input 
      class="custom-counter__field"
      type="number" 
      :value="modelValue"
      @input="$emit('update:modelValue',$event.target.value)"  
    >
    <button
      class="custom-counter__btn custom-counter__btn--plus"
      type="button"
      @click="$emit('update:modelValue', modelValue + 1)"
    >+</button>
  </div>
</template>

<style lang="scss" scoped>
* {
  font-family: $ff-gilroy;
}
.custom-counter {
  position: relative;

  &__btn {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    display: flex;
    color: $color-black;
    font-family: $ff-gilroy;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    user-select: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &::before {
      content: "";
      width: 200%;
      height: 200%;
      top: -50%;
      left: -50%;
      position: absolute;
      cursor: pointer;
    }

    &--minus {
      left: 46px;
    }

    &--plus {
      right: 46px;
    }

    &[disabled] {
      color: $color-chinese-silver;
    }

    &[disabled]::before  {
      cursor: unset;
    }
  }

  &__field {
    margin: 0;
    padding: 15px 46px 11px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid $color-light-silver;
    background-color: $color-cultured;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: $ff-gilroy;
    color: $color-black;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none; /* Кнопки спрятаны */
    }
  }
}

</style>
