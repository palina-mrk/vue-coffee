<script setup>
const props = defineProps(["toggleName", "initialValues"]);
import { ref } from "vue";

const selected = ref("");
</script>

<template>
  <ul :class="['toggle', 'toggle--' + initialValues.length % 2 ? 'odd' : 'even']">
    <li class="toggle__item" v-for="item in initialValues">
      <input
        :checked="item == selected"
        class="toggle__field visually-hidden"
        :id="`toggle-${toggleName}-${item}`"
        type="radio"
        :name="`toggle-${toggleName}`"
        :value="item"
        @input="
          selected = $event.target.value;
          $emit('toggle-value', $event.target.value);
        "
      />
      <label :for="`toggle-${toggleName}-${item}`" class="toggle__label">
        <span class="toggle__inner">{{ item }}</span>
      </label>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
/* стилизация для страницы blog */

.toggle {
  background-color: transparent;
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: end;
  border: none;

  @include vp-laptop {
    gap: 15px;
  }

  @include vp-tablet {
    gap: 20px;
  }

  @include vp-mobile {
    gap: 10px;
  }

  &__item {
    margin: 0;
    padding: 0;
    width: calc(25% - 15px);

    @include vp-tablet {
      width: calc(50% - 10px);
    }

    @include vp-mobile {
      width: calc(50% - 5px);
    }
  }

  &__label {
    display: block;
    margin: 0;
    padding: 12px 10px 9px;
    border-color: $color-chinese-silver;
    background-color: $color-cultured-f6;
    color: $color-ucla-gold;
    border-style: solid;
    border-width: 1px;
    font-weight: 600;
    font-size: 20px;
    font-family: $ff-gilroy, sans-serif;
    line-height: 26px;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    @include vp-laptop {
      padding: 7px 6px 6px;
      border-radius: 4px;
      border-width: 0.7px;
      font-size: 14px;
      line-height: 17px;
    }

    @include vp-tablet {
      border-radius: 5px;
      border-width: 2px;
      padding: 21px 20px 17px;
      font-size: 25px;
      line-height: 28px;
    }

    @include vp-mobile {
      border-width: 1px;
      padding: 11px 12px 10px;
      font-size: 14px;
      line-height: 17px;
    }
  }

  &__field:checked ~ .toggle__label {
    background-color: $color-cornsilk;
    border-color: $color-ucla-gold;
  }

  &__field ~ .toggle__label:hover {
    color: $color-white;
    background-color: $color-ucla-gold;
    border-color: $color-ucla-gold;
  }
}

.toggle--odd {

  .toggle__item:first-child {
    @include vp-tablet {
      width: 100%;
    }
  }
}
</style>
