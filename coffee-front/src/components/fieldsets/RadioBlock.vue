<script setup>
import { ref } from "vue";
const props = defineProps([
  "name",
  "labels",
  "values",
  "fieldsCount",
  "selectedValue",
]);

const selected = ref(props.selectedValue);
</script>

<template>
  <div class="radio-block">
    <div v-for="index in fieldsCount" class="custom-radio">
      <input
        class="custom-radio__field visually-hidden"
        :id="`${name}-${values[index - 1]}`"
        type="radio"
        :name="`${name}`"
        v-model="selected"
        @input="$emit('set-value', $event.target.value)"
        :value="values[index - 1]"
      />
      <label
        :for="`${name}-${values[index - 1]}`"
        class="custom-radio__label"
        >{{ labels[index - 1] }}</label
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-radio {
  &__label {
    position: relative;
    padding: 0 0 0 45px;
    margin: 0;
    display: block;
    color: $color-black;
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    font-family: $ff-gilroy, sans-serif;
    cursor: pointer;

    @include vp-laptop {
      font-size: 22px;
      line-height: 22px;
      padding: 0 0 0 33px;
    }

    &::before {
      content: "";
      background-color: $color-platinum;
      position: absolute;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);

      @include vp-laptop {
        width: 18px;
        height: 18px;
      }
    }
  }

  &__field:checked ~ .custom-radio__label::before {
    background-color: $color-ucla-gold;
  }
}

.radio-block {
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.radio-block--healthy {
  .custom-radio__label {
    padding: 0 0 0 35px;

    @include vp-laptop {
      padding: 0 0 0 28px;
    }
  }

  .custom-radio__label::before {
    width: 23px;
    height: 23px;

    @include vp-laptop {
      width: 17px;
      height: 17px;
      transform: translateY(calc(-1px - 50%));
    }
  }
}
</style>
