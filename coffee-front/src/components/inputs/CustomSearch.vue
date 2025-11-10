<template>
  <div class="custom-search">
    <input
      class="custom-search__field"
      type="search"
      name="search-field"
      placeholder="Поиск по&nbsp;товарам"
    />
    <svg class="custom-search__icon" width="36" height="35" aria-hidden="true">
      <use xlink:href="../../assets/header-sprite.svg#icon-search"></use>
    </svg>
    <button class="custom-search__btn" @click="$emit('close-search')">
      <svg
        class="custom-search__btn-icon"
        width="36"
        height="35"
        aria-hidden="true"
      >
        <use xlink:href="../../assets/header-sprite.svg#icon-close"></use>
      </svg>
      <span class="custom-search__btn-text">Отменить</span>
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.custom-search {
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: space-between;

  @include vp-tablet {
    padding-right: 120px;
  }

  @include vp-mobile {
    padding-right: 70px;
  }

  &__field {
    margin: 0;
    padding: 19px 82px 15px;
    box-shadow: 0px 0px 20px 0px $color-spanish-gray-25;
    width: 100%;
    border: none;
    border-radius: 30px;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: $color-chinese-black;

    @include vp-laptop {
      padding: 13px 72px 7px;
      font-size: 16px;
      line-height: 21px;
    }

    @include vp-tablet {
      padding: 22px 22px 22px 84px;
      font-size: 20px;
      border-radius: 26px;
    }

    @include vp-mobile {
      padding: 9px 7px 5px 47px;
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__field::placeholder {
    color: $color-silver-sand-c4;
  }

  &__field::-webkit-search-cancel-button {
    display: none;
  }

  &__icon {
    width: 34px;
    height: 34px;
    position: absolute;
    left: 28px;
    top: 50%;
    transform: translateY(-50%);
    color: $color-silver-sand-c4;

    @include vp-laptop {
      width: 25px;
      height: 25px;
    }

    @include vp-mobile {
      width: 12px;
      height: 12px;
      left: 19px;
    }
  }

  &__btn {
    display: flex;
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: $color-ucla-gold;

    @include vp-laptop {
      right: 20px;
    }

    @include vp-tablet {
      right: -50px;
      border-radius: 20px;
    }

    @include vp-mobile {
      right: -40px;
      border-radius: 15px;
    }

    &:hover {
      color: $color-raising-black;

      @include vp-tablet {
        color: $color-ucla-gold;
        background-color: $color-bright-gray;
      }
    }
  }

  &__btn-icon {
    display: flex;
    width: 20px;
    height: 20px;

    @include vp-tablet {
      width: 15px;
      height: 15px;
    }

    @include vp-tablet {
      display: none;
    }
  }

  &__btn-text {
    display: none;
    font-family: $ff-gilroy, sans-serif;

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
      border-radius: 20px;
      padding: 5px 18px 3px;
      display: flex;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 16px;
      border-radius: 16px;
      padding: 5px 15px 3px;
    }
  }
}
</style>
