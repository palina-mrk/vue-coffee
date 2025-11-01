<script setup>
const props = defineProps(["toggleName", "initialValues", "selected"]);
</script>

<template>
  <ul class="toggle">
    <li class="toggle__item" v-for="item in initialValues">
      <input
        :checked="item.value == selected"
        class="toggle__field visually-hidden"
        :id="`toggle-${toggleName}-${item.value}`"
        type="radio"
        :name="`toggle-${toggleName}`"
        :value="`${item.value}`"
        @input="$emit('toggle-value', $event.target.value)"
      />
      <label :for="`toggle-${toggleName}-${item.value}`" class="toggle__label">
        <span class="toggle__inner">{{ item.label }}</span>
      </label>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
/* стилизация для страницы contacts */

.toggle {
  background-color: transparent;
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  gap: 20px;
  border: none;

  @include vp-laptop {
    gap: 15px;
  }

  @include vp-tablet {
    gap: 20px;
    flex-direction: column;
  }

  @include vp-mobile {
    gap: 10px;
  }

  &__item {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  &__label {
    display: block;
    height: 100%;
    margin: 0;
    padding: 15px;
    border-color: $color-chinese-silver;
    background-color: $color-cultured-f6;
    color: $color-ucla-gold;
    border-style: solid;
    border-width: 1px;
    font-weight: 600;
    font-size: 25px;
    font-family: $ff-gilroy, sans-serif;
    line-height: 30px;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    @include vp-laptop {
      padding: 10px;
      border-radius: 4px;
      font-size: 18px;
      line-height: 21px;
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

/* стилизация для карточки заказов */

.toggle--size-m {
  @include vp-laptop {
    gap: 20px;
  }

  @include vp-tablet {
    flex-direction: row;
  }

  @include vp-mobile {
    flex-direction: column;
    gap: 10px;
  }

  .toggle__label {
    padding: 10px;
    font-size: 20px;
    line-height: 23px;

    @include vp-laptop {
      border-radius: 4px;
      padding: 7px;
      font-size: 14px;
      line-height: 15px;
    }

    @include vp-tablet {
      border-radius: 2px;
      padding: 10px;
      font-size: 12px;
      line-height: 14px;
    }

    @include vp-mobile {
      border-radius: 5px;
      padding: 11px;
      font-size: 14px;
      line-height: 17px;
    }
  }
}
</style>
