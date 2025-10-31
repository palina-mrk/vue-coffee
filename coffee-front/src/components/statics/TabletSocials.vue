<script setup></script>

<template>
  <ul class="socials">
    <li class="socials__item">
      <a class="socials__link" href="tel:+74012375343">
        <svg class="socials__icon" width="53" height="53" aria-hidden="true">
          <use xlink:href="../../assets/header-sprite.svg#icon-phone"></use>
        </svg>
      </a>
    </li>
    <li class="socials__item">
      <a
        class="socials__link socials__link--filled"
        @click.prevent="$emit('to-instagram')"
      >
        <svg class="socials__icon" width="102" height="102" aria-hidden="true">
          <use xlink:href="../../assets/header-sprite.svg#icon-instagram"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.socials {
  display: flex;
  align-items: center;
  font-family: $ff-gilroy, sans-serif;
  justify-content: center;
  gap: 41px;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @include vp-mobile {
    gap: 20px;
  }

  &__link {
    display: flex;
    color: $color-white;
    width: 92px;
    height: 92px;
    background-color: $color-ucla-gold;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @include vp-mobile {
      width: 50px;
      height: 50px;
    }

    &:hover {
      color: $color-raising-black;
      border: 4px solid $color-raising-black;

      @include vp-tablet {
        border: 3px solid $color-raising-black;
      }

      @include vp-mobile {
        border: 2px solid $color-raising-black;
      }
    }
  }

  &__icon {
    width: 53px;
    height: 53px;

    @include vp-mobile {
      width: 26px;
      height: 26px;
    }
  }

  &__link--filled {
    background-color: $color-white;
    color: $color-ucla-gold;

    &:hover {
      background-color: $color-raising-black;
      color: $color-ucla-gold;
    }

    .socials__icon {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
