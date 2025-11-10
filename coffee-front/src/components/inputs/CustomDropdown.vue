<script setup>
const props = defineProps(["weightVariants", "weightUnit", "defaultValue"]);
import { ref, defineEmits } from "vue";

const currentValue = ref(props.defaultValue);
const isClicked = ref(false);

function showVariants() {
  isClicked.value = true;
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
    :class="{ 'custom-dropdown': true, 'custom-dropdown--clicked': isClicked }"
  >
    <button
      class="custom-dropdown__field custom-dropdown__field--main"
      type="button"
      @click="showVariants"
    >
      <span class="custom-dropdown__chosen-text"
        >{{ currentValue }} {{ weightUnit ? weightUnit : "г" }}.</span
      >
      <svg
        class="custom-dropdown__icon"
        width="12"
        height="5"
        aria-hidden="true"
      >
        <use xlink:href="../../assets/product-sprite.svg#icon-down-arrow"></use>
      </svg>
    </button>
    <ul class="custom-dropdown__list">
      <li class="custom-dropdown__item" v-for="weight in weightVariants">
        <button
          class="custom-dropdown__field"
          type="button"
          @click="setValue(weight)"
        >
          {{ weight }} г.
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.custom-dropdown {
  position: relative;

  &__field {
    margin: 0;
    padding: 5px 13px 2px 30px;
    width: 100%;
    height: 100%;
    user-select: none;
    cursor: pointer;
    display: flex;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 19px;
    line-height: 25px;
    color: $color-black;
    border: none;
    background: none;
    align-items: center;
    justify-content: space-between;

    @include vp-laptop {
      padding: 5px 18px 2px 19px;
      font-size: 12px;
      line-height: 19px;
    }

    @include vp-tablet {
      padding: 6px 20px 3px;
      font-size: 16px;
      line-height: 22px;
    }

    @include vp-mobile {
      padding: 5px 9px 3px 20px;
      font-size: 14px;
      line-height: 22px;
    }

    &:hover {
      color: $color-ucla-gold;
    }

    &--main {
      padding: 6px 13px 2px 30px;
      display: flex;
      align-items: center;
      border: 1px solid $color-ucla-gold;
      background-color: $color-cornsilk;
      border-radius: 5px;

      @include vp-laptop {
        border-radius: 4px;
        border: 0.7px solid $color-ucla-gold;
        padding: 4px 16px 2px 19px;
      }

      @include vp-tablet {
        border: 1px solid $color-ucla-gold;
        padding: 6px 20px 2px;
      }

      @include vp-mobile {
        padding: 6px 9px 2px 20px;
      }
    }
  }

  &__icon {
    color: $color-black;
    width: 16px;
    height: 7px;

    @include vp-laptop {
      width: 11px;
      height: 5px;
    }

    @include vp-tablet {
      width: 10px;
      height: 5px;
    }
  }

  &__list {
    position: absolute;
    width: 100%;
    bottom: -8px;
    transform: translateY(100%);
    padding: 6px 0 2px;
    margin: 0;
    border: 1px solid $color-ucla-gold;
    border-radius: 5px;
    background-color: $color-cornsilk;
    list-style-type: none;
    flex-direction: column;
    display: none;

    @include vp-laptop {
      bottom: -4px;
      border-radius: 4px;
      border: 0.7px solid $color-ucla-gold;
      padding: 5px 0 2px;
    }

    @include vp-tablet {
      bottom: -6px;
      border: 1px solid $color-ucla-gold;
    }
  }
}

.custom-dropdown--clicked {
  .custom-dropdown__list {
    display: flex;
  }
}

.custom-dropdown--main-mobile {
  .custom-dropdown__field--main {
    font-family: $ff-gilroy, sans-serif;

    @include vp-mobile {
      padding: 4px 10px 2px 17px;
      font-size: 12px;
      line-height: 14px;
    }
  }

  .custom-dropdown__field--main {
    @include vp-mobile {
      padding: 4px 10px 2px 17px;
      border-radius: 3px;
    }
  }

  .custom-dropdown__icon {
    @include vp-mobile {
      width: 8px;
      height: 4px;
    }
  }

  .custom-dropdown__list {
    @include vp-mobile {
      bottom: -4px;
      border-radius: 3px;
      padding: 4px 0 2px;
    }
  }
}
</style>
