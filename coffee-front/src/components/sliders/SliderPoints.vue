<script setup>
defineProps(["count"]);
</script>

<template>
  <ul class="slider-points">
    <li
      v-for="n in count"
      class="slider-points__item slider-points__item--selected"
    ></li>
    <li v-for="n in 10 - count" class="slider-points__item"></li>
  </ul>
</template>

<style lang="scss" scoped>
.slider-points {
  display: flex;
  gap: 3px;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @include vp-laptop {
    gap: 2px;
  }

  @include vp-mobile {
    gap: 3px;
  }

  &__item {
    background-color: $color-antiflash-white-f0;
    width: 10px;
    height: 10px;
    border-radius: 50%;

    @include vp-laptop {
      width: 7px;
      height: 7px;
    }

    @include vp-mobile {
      width: 8px;
      height: 8px;
    }
  }

  &__item--selected {
    background-color: $color-ucla-gold;
  }
}

.product-card--main-mobile {
  .slider-points {
    @include vp-mobile {
      gap: 2px;
    }
  }

  .slider-points__item {
    @include vp-mobile {
      width: 6px;
      height: 6px;
    }
  }
}

.slider-points--large {
  gap: unset;
  justify-content: space-between;
  width: 180px;

  @include vp-laptop {
    width: 136px;
  }

  @include vp-tablet {
    width: 205px;
  }

  @include vp-mobile {
    width: 102px;
  }

  .slider-points__item {
    width: 14px;
    height: 14px;

    @include vp-laptop {
      width: 10px;
      height: 10px;
    }

    @include vp-tablet {
      width: 16px;
      height: 16px;
    }

    @include vp-mobile {
      width: 8px;
      height: 8px;
    }
  }
}
</style>
