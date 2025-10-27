<script setup>
const props = defineProps(["count", "selected"]);
</script>

<template>
  <ul class="slider-large">
    <li
      v-for="n in count"
      :class="{
        'slider-large__point': true,
        'slider-large__point--brown': n == selected,
      }"
    ></li>
  </ul>
</template>

<style lang="scss" scoped>
.slider-large {
  display: flex;
  gap: 30px;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @include vp-laptop {
    gap: 20px;
  }

  @include vp-tablet {
    gap: 30px;
  }

  @include vp-mobile {
    gap: 16px;
  }

  &__point {
    background-color: $color-white;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    @include vp-laptop {
      width: 14px;
      height: 14px;
    }

    @include vp-tablet {
      width: 25px;
      height: 25px;
      background-color: $color-bright-gray;
    }

    @include vp-mobile {
      width: 13px;
      height: 13px;
    }
  }

  &__point--brown {
    background-color: $color-bistre;

    @include vp-tablet {
      background-color: $color-ucla-gold;
    }
  }
}
</style>
