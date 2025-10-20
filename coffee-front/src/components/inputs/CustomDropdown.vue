<script setup>
const props = defineProps(["weightVariants", "defaultValue"]);
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
      <span class="custom-dropdown__chosen-text">{{ currentValue }} г.</span>
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
@import "@/scss/blocks/_custom-dropdown.scss";
* {
  font-family: $ff-gilroy;
}
</style>
