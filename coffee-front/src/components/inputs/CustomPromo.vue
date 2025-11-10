<script setup>
const props = defineProps(["modelValue", "inputData"]);
</script>

<template>
  <div class="custom-input">
    <label
      class="custom-input__label visually-hidden"
      :for="inputData.id"
    ></label>
    <input
      class="custom-input__field"
      type="text"
      :value="modelValue"
      :name="inputData.name"
      :id="inputData.id"
      :placeholder="inputData.placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="custom-input__info custom-input__info--accept">{{
      `Скидка -${inputData.promoSale}% по промокоду “${inputData.userPromo}”`
    }}</span>
    <span class="custom-input__info custom-input__info--error">{{
      inputData.error
    }}</span>
    <svg
      class="custom-input__icon custom-input__icon--accept"
      width="15"
      height="13"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/cart-sprite.svg#icon-accept"></use>
    </svg>
    <svg
      class="custom-input__icon custom-input__icon--error"
      width="15"
      height="13"
      aria-hidden="true"
    >
      <use xlink:href="../../assets/cart-sprite.svg#icon-error"></use>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.custom-input {
  font-family: $ff-gilroy, sans-serif;
  display: flex;
  position: relative;

  &__field {
    margin: 0;
    padding: 23px 68px 23px 60px;
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
      padding: 16px 50px 16px 40px;
      border-width: 0.7px;
      border-radius: 4px;
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      border: none;
      background-color: $color-antiflash-white-f3;
      padding: 22px 70px 22px 50px;
      font-size: 20px;
      line-height: 26px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 18px;
      padding: 16px 45px 16px 30px;
    }

    &::placeholder {
      color: $color-silver-sand-c4;

      @include vp-tablet {
        color: $color-chinese-silver;
      }
    }
  }

  &__info {
    position: absolute;
    right: 0;
    bottom: -26px;
    color: $color-ucla-gold;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 10px;
      line-height: 11px;
      bottom: -16px;
    }

    @include vp-tablet {
      font-size: 12px;
      line-height: 14px;
      bottom: -17px;
    }

    @include vp-mobile {
      font-size: 10px;
      line-height: 12px;
      bottom: -15px;
    }
  }

  &__icon {
    position: absolute;
    color: $color-white;
    pointer-events: none;
    width: 25px;
    height: 25px;
    padding: 6px;
    right: 23px;
    top: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-ucla-gold;
    border-radius: 50%;

    @include vp-laptop {
      right: 15px;
      top: 12px;
    }

    @include vp-tablet {
      width: 28px;
      height: 28px;
      padding: 6px;
      right: 22px;
      top: 21px;
    }

    @include vp-mobile {
      width: 21px;
      height: 21px;
      padding: 4px;
      right: 13px;
      top: 14px;
    }
  }

  &__info--error,
  &__icon--error,
  &__info--accept,
  &__icon--accept {
    display: none;
  }
}

.custom-input--error {
  .custom-input__info--error,
  .custom-input__icon--error {
    display: flex;
  }

  .custom-input__info--accept,
  .custom-input__icon--accept {
    display: none;
  }
}

.custom-input--accept {
  .custom-input__info--error,
  .custom-input__icon--error {
    display: none;
  }

  .custom-input__info--accept,
  .custom-input__icon--accept {
    display: flex;
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
