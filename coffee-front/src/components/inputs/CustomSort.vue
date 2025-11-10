<script setup>
const props = defineProps(["sortFields", "defaultLabel"]);
import { ref, defineEmits } from "vue";

const isShown = ref(false);

const emit = defineEmits();
function setField(sortField) {
  isShown.value = false;
  emit("set-field", sortField);
}
</script>

<template>
  <div :class="{ 'sort-input': true, 'sort-input--show-list': isShown }">
    <button
      class="sort-input__open-button btn btn--linked"
      type="button"
      @click="isShown = true"
      for="sort-input"
    >
      Сортировка
    </button>

    <ul class="sort-input__list">
      <li class="sort-input__chosen-item">
        <span class="sort-input__chosen-text">{{ defaultLabel }}</span>
        <button
          class="sort-input__close-button btn btn--iconed"
          @click="isShown = false"
        >
          <svg class="btn__icon" width="13" height="13" aria-hidden="true">
            <use xlink:href="../../assets/btn-sprite.svg#close-sort-btn"></use>
          </svg>
        </button>
      </li>
      <li
        class="sort-input__field"
        v-for="sortField in sortFields"
        :key="'sort-' + sortField.value"
      >
        <button
          class="sort-input__field-button btn btn--field"
          type="button"
          @click="setField(sortField)"
        >
          {{ sortField.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: transparent;
  user-select: none;
  cursor: pointer;
  border: none;

  &__icon {
    width: 13px;
    height: 13px;

    @include vp-tablet {
      width: 21px;
      height: 21px;
    }

    @include vp-tablet {
      width: 13px;
      height: 13px;
    }
  }
}

.btn--linked {
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: $color-black;
  text-decoration: underline;
  border-radius: 30px;
  padding: 11px 30px 10px;

  @include vp-laptop {
    font-size: 14px;
    line-height: 16px;
    padding: 7px 18px 6px;
    border-radius: 18px;
  }

  @include vp-tablet {
    font-size: 20px;
    line-height: 26px;
    border-radius: 25px;
    padding: 9px 20px 8px;
  }

  @include vp-mobile {
    font-size: 18px;
    line-height: 21px;
    padding: 7px 20px 7px;
    border-radius: 20px;
  }

  &:hover {
    background-color: $color-ghost-white;
    color: $color-ucla-gold;
  }
}

.btn--iconed {
  color: $color-black;
  position: relative;

  &:hover {
    color: $color-ucla-gold;
  }

  &::before {
    content: "";
    position: absolute;
    left: -50%;
    top: -50%;
    right: -50%;
    bottom: -50%;
    cursor: pointer;
  }
}

.btn--field {
  width: 100%;
  height: 100%;
  color: $color-black;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  padding: 10px 30px;
  text-align: left;
  justify-content: start;

  @include vp-tablet {
    font-size: 20px;
    line-height: 26px;
  }

  @include vp-mobile {
    font-size: 16px;
    line-height: 21px;
  }

  &:hover {
    background-color: $color-lotion;
  }
}

.sort-input {
  position: relative;
  display: flex;
  align-items: start;
  justify-content: start;

  &__list {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    z-index: 3;
    list-style-type: none;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 0px $color-granite-gray-25;
    flex-direction: column;
    align-items: start;
    background-color: $color-white;
    display: none;

    @include vp-mobile {
      box-shadow: 0px 0px 20px 0px $color-granite-gray-25;
    }
  }

  &__chosen-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 20px 20px 18px 30px;
    margin: 0;
    width: 100%;
    border-bottom: $color-bright-gray solid 1px;

    @include vp-tablet {
      padding: 17px 20px 10px 30px;
    }
    @include vp-mobile {
      padding: 17px 20px 8px 30px;
    }
  }

  &__chosen-text {
    color: $color-ucla-gold;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    min-width: 190px;

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
      min-width: 250px;
    }

    @include vp-mobile {
      font-size: 16px;
      line-height: 21px;
      min-width: 190px;
    }
  }

  &__field {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
  }
}

.sort-input--show-list {
  .sort-input__list {
    display: flex;
  }
}
</style>
