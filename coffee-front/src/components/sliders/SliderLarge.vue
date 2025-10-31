<script setup>
const props = defineProps(["linkNames"]);
import { useRoute } from "vue-router";
const route = useRoute();
import { computed } from "vue";
const selectedName = computed(() => route.name);
</script>

<template>
  <ul class="slider-large">
    <li v-for="linkName in linkNames">
      <router-link
        :to="{ name: linkName }"
        class="slider-large__point"
        :class="{ 'slider-large__point--brown': linkName == selectedName }"
      ></router-link>
    </li>
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
    display: block;
    background-color: $color-white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;

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
