<script setup>
defineProps(["count"]);
</script>

<template>
  <ul class="slider-corns">
    <li v-for="n in count" class="slider-corns__item">
      <svg
        class="slider-corns__svg"
        width="19"
        height="19"
        aria-hidden="true"
        id="icon-corn"
        viewBox="0 0 24 24"
        fill="none"
      >
        <use xlink:href="../../assets/product-sprite.svg#icon-corn"></use>
      </svg>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.slider-corns {
  display: flex;
  gap: 8px;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @include vp-laptop {
    gap: 6px;
  }

  @include vp-mobile {
    gap: 7px;
  }

  &__item {
    color: $color-dark-liver;
    display: flex;
  }

  &__svg {
    width: 19px;
    height: 19px;

    @include vp-laptop {
      width: 13px;
      height: 13px;
    }

    @include vp-mobile {
      width: 16px;
      height: 16px;
    }
  }
}

.product-card--main-mobile {
  .slider-corns {
    @include vp-mobile {
      gap: 5px;
    }
  }

  .slider-corns__svg {
    @include vp-mobile {
      width: 12px;
      height: 12px;
    }
  }
}

.slider-corns--label {
  gap: 10px;

  @include vp-laptop {
    gap: 7px;
  }

  @include vp-tablet {
    gap: 20px;
  }

  @include vp-mobile {
    gap: 10px;
  }

  .slider-corns__svg {
    width: 24px;
    height: 24px;

    @include vp-laptop {
      width: 17px;
      height: 17px;
    }

    @include vp-tablet {
      width: 40px;
      height: 40px;
    }

    @include vp-mobile {
      width: 20px;
      height: 20px;
    }
  }
}

.slider-corns--large {
  gap: 11px;

  @include vp-laptop {
    gap: 7px;
  }

  @include vp-tablet {
    gap: 20px;
  }

  @include vp-mobile {
    gap: 10px;
  }

  .slider-corns__svg {
    width: 28px;
    height: 28px;

    @include vp-laptop {
      width: 17px;
      height: 17px;
    }

    @include vp-tablet {
      width: 40px;
      height: 40px;
    }

    @include vp-mobile {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
