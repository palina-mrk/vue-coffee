<script setup>
const props = defineProps(["labels", "values", "fieldsCount", "selectedValue"]);
import { ref, computed, defineEmits } from "vue";

const currentValue = ref(props.selectedValue);
const isClicked = ref(false);
const currentLabel = computed(
  () =>
    props.labels[
      props.values.findIndex((value) => value == currentValue.value)
    ],
);

function showVariants() {
  isClicked.value = !isClicked.value;
}

const emit = defineEmits();
function setValue(newValue) {
  currentValue.value = newValue;
  isClicked.value = false;
  emit("set-value", newValue);
}
</script>

<template>
  <div
    :class="{ 'large-dropdown': true, 'large-dropdown--clicked': isClicked }"
  >
    <button
      class="large-dropdown__field large-dropdown__field--main"
      type="button"
      @click="showVariants"
    >
      <span class="large-dropdown__chosen-text">{{ currentLabel }}</span>
      <svg
        class="large-dropdown__icon"
        width="12"
        height="5"
        aria-hidden="true"
      >
        <use xlink:href="../../assets/product-sprite.svg#icon-down-arrow"></use>
      </svg>

      <svg
        class="large-dropdown__icon large-dropdown__icon--rotated"
        width="12"
        height="5"
        aria-hidden="true"
      >
        <use xlink:href="../../assets/product-sprite.svg#icon-down-arrow"></use>
      </svg>
    </button>
    <ul class="large-dropdown__list">
      <li class="large-dropdown__item" v-for="index in fieldsCount">
        <button
          class="large-dropdown__field"
          type="button"
          @click="setValue(values[index - 1])"
        >
          {{ labels[index - 1] }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.large-dropdown {
  position: relative;

  &__field {
    margin: 0;
    padding: 21px 40px 18px 50px;
    width: 100%;
    user-select: none;
    cursor: pointer;
    display: flex;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
    color: $color-black;
    border: none;
    background: none;
    align-items: center;
    justify-content: space-between;

    @include vp-mobile {
      padding: 11px 20px 10px;
      font-size: 14px;
      line-height: 16px;
    }

    &:hover {
      color: $color-ucla-gold;

      .large-dropdown__icon {
        color: $color-ucla-gold;
      }
    }

    &--main {
      padding: 21px 39px 17px 49px;
      border: 1px solid $color-ucla-gold;
      background-color: $color-cornsilk;
      border-radius: 5px;

      @include vp-mobile {
        border-radius: 4px;
        padding: 10px 19px 9px;
      }
    }
  }

  &__icon {
    color: $color-black;
    width: 20px;
    height: 8px;

    @include vp-mobile {
      width: 10px;
      height: 5px;
    }
  }

  &__icon--rotated {
    rotate: 180deg;
    display: none;
  }

  &__list {
    position: absolute;
    width: 100%;
    bottom: -13px;
    transform: translateY(100%);
    padding: 0;
    margin: 0;
    border: 1px solid $color-ucla-gold;
    border-radius: 5px;
    background-color: $color-cornsilk;
    list-style-type: none;
    flex-direction: column;
    z-index: 1;
    display: none;

    @include vp-mobile {
      border-radius: 4px;
    }
  }
}

.large-dropdown--clicked {
  .large-dropdown__list {
    display: flex;
  }

  .large-dropdown__icon {
    display: none;
  }

  .large-dropdown__icon--rotated {
    display: flex;
  }
}
/*
.large-dropdown--main-mobile {
  .large-dropdown__field--main {
  font-family: $ff-gilroy, sans-serif;
  
    @include vp-mobile {
      padding: 4px 10px 2px 17px;
      font-size: 12px;
      line-height: 14px;
    }
  }

  .large-dropdown__field--main {
    @include vp-mobile {
      padding: 4px 10px 2px 17px;
      border-radius: 3px;
    }
  }

  .large-dropdown__icon {
    @include vp-mobile {
      width: 8px;
      height: 4px;
    }
  }

  .large-dropdown__list {
    @include vp-mobile {
      bottom: -4px;
      border-radius: 3px;
      padding: 4px 0 2px;
    }
  }
}*/
</style>
