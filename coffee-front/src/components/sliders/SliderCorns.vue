<script setup>
defineProps(['count'])
</script>

<template>
  <ul class="slider-corns">
    <li v-for="n in count" class="slider-corns__item">
      <svg class="slider-corns__svg" width="19" height="19" aria-hidden="true" id="icon-corn" viewBox="0 0 24 24" fill="none">
        <path d="M1.04723 20.2866C-1.25785 16.2226 0.3107 9.84864 5.07929 5.0797C10.4945 -0.333678 17.9822 -1.62425 21.8052 2.1972C21.8097 2.2022 21.8134 2.20787 21.8196 2.21295C21.0545 4.4385 18.618 9.17387 11.3145 11.734C4.62422 14.0805 2.04343 17.8112 1.04723 20.2866ZM22.8805 3.5884C22.301 4.93992 21.2924 6.70615 19.5547 8.44339C17.808 10.1905 15.3254 11.9064 11.8089 13.1396C4.67193 15.6418 2.67784 19.738 2.12147 21.723C2.14775 21.7495 2.17035 21.777 2.1959 21.8027C6.0185 25.6243 13.5065 24.3338 18.9214 18.9195C23.7396 14.1022 25.2891 7.64562 22.8805 3.5884Z" fill="currentColor"/>
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
</style>
