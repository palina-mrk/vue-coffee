<script setup>
const props = defineProps(["rating"]);
import { computed } from "vue";
const count = computed(() => Number(props.rating.toFixed(0)));
</script>

<template>
  <ul class="slider-stars">
    <li
      v-for="n in count"
      class="slider-stars__item slider-stars__item--selected"
    >
      <svg class="slider-stars__svg" width="25" height="25" aria-hidden="true">
        <use xlink:href="../../assets/product-sprite.svg#icon-star"></use>
      </svg>
    </li>
    <li v-for="n in 5 - count" class="slider-stars__item">
      <svg class="slider-stars__svg" width="25" height="25" aria-hidden="true">
        <use xlink:href="../../assets/product-sprite.svg#icon-star"></use>
      </svg>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.slider-stars {
  display: flex;
  gap: 2px;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @include vp-laptop {
    gap: 1px;
  }

  @include vp-mobile {
    gap: 2px;
  }

  &__item {
    color: $color-antiflash-white-f0;
    display: flex;
  }

  &__svg {
    width: 25px;
    height: 25px;

    @include vp-laptop {
      width: 18px;
      height: 18px;
    }

    @include vp-mobile {
      width: 21px;
      height: 21px;
    }
  }

  &__item--selected {
    color: $color-ucla-gold;
  }
}

.slider-stars--main-mobile {
  @include vp-mobile {
    gap: 1px;
  }

  .slider-stars__svg {
    @include vp-mobile {
      width: 16px;
      height: 16px;
    }
  }
}

.slider-stars--tea {
  @include vp-tablet {
    gap: 2px;
  }

  .slider-stars__svg {
    @include vp-tablet {
      width: 21px;
      height: 21px;
    }
  }
}

.slider-stars--large {
  gap: 4px;

  @include vp-laptop {
    gap: 2px;
  }

  @include vp-tablet {
    gap: 10px;
  }

  @include vp-mobile {
    gap: 4px;
  }

  .slider-stars__svg {
    width: 34px;
    height: 34px;

    @include vp-laptop {
      width: 24px;
      height: 24px;
    }

    @include vp-tablet {
      width: 50px;
      height: 50px;
    }

    @include vp-mobile {
      width: 25px;
      height: 25px;
    }
  }
}

.slider-stars--review {
  gap: 4px;

  @include vp-laptop {
    gap: 2px;
  }

  @include vp-mobile {
    gap: 1px;
  }

  .slider-stars__svg {
    width: 34px;
    height: 34px;

    @include vp-laptop {
      width: 24px;
      height: 24px;
    }

    @include vp-tablet {
      width: 21px;
      height: 21px;
    }

    @include vp-mobile {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
