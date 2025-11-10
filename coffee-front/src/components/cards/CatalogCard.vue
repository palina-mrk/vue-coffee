<script setup>
const props = defineProps(["page", "title"]);
</script>

<template>
  <div class="catalog-card">
    <div class="catalog-card__image-wrapper">
      <picture>
        <source
          media="(max-width: 767px)"
          :srcset="`../../src/images/catalog-card/catalog-${page}-desktop.png`"
        />
        <source
          media="(max-width: 1348px)"
          :srcset="`../../src/images/catalog-card/catalog-${page}-desktop.png`"
        />
        <source
          media="(max-width: 1903px)"
          :srcset="`../../src/images/catalog-card/catalog-${page}-desktop.png`"
        />
        <img
          class="catalog-card__image"
          :src="`../../src/images/catalog-card/catalog-${page}-desktop.png`"
          width="295"
          height="212"
          :alt="`Карточка каталога ${page}`"
        />
      </picture>
    </div>
    <h3 class="catalog-card__title">{{ title }}</h3>
    <router-link
      class="catalog-card__button btn btn--size-m"
      :to="{ name: page }"
      >Купить</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
.catalog-card {
  padding: 60px 35px 142px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 30px 0px $color-philippine-gray-20;
  font-family: $ff-gilroy, sans-serif;
  min-height: 539px;
  width: 400px;
  border-radius: 20px;
  background-color: $color-white;
  gap: 50px;

  @include vp-laptop {
    padding: 50px 23px 76px;
    box-shadow: 0px 0px 21.25px 0px $color-philippine-gray-20;
    border-radius: 14px;
    min-height: 381px;
    width: 280px;
    gap: 35px;
  }

  @include vp-tablet {
    padding: 0 60px 124px;
    box-shadow: 0px 0px 37.5px 0px $color-philippine-gray-20;
    border-radius: 12px;
    width: 340px;
    min-height: 412px;
    gap: 23px;
    justify-content: end;
  }

  @include vp-mobile {
    padding: 0 15px 60px;
    box-shadow: 0px 0px 30px 0px $color-philippine-gray-20;
    border-radius: 10px;
    width: 194px;
    min-height: 269px;
    gap: 27px;
  }

  &__image-wrapper {
    height: 250px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @include vp-laptop {
      height: 160px;
    }

    @include vp-tablet {
      height: 200px;
      align-items: end;
    }

    @include vp-mobile {
      height: 150px;
    }
  }

  &__picture {
    max-height: 100%;
  }

  &__image {
    max-height: 100%;
    width: 100%;
    overflow: hidden;
  }

  &__title {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    margin: auto auto 0;

    @include vp-laptop {
      font-size: 18px;
      line-height: 23px;
      max-width: 200px;
      min-height: 45px;
    }

    @include vp-tablet {
      font-size: 22px;
      line-height: 27px;
      max-width: 265px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 17px;
      max-width: unset;
    }
  }

  &__button {
    display: none;
  }
}

.catalog-card:hover {
  position: relative;
  padding: 60px 35px 65px;
  gap: 48px;

  @include vp-laptop {
    padding: 42px 23px 47px;
    gap: 35px;
  }

  @include vp-tablet {
    padding: 5px 40px 41px;
    width: 460px;
    height: 442px;
    gap: 10px;
  }

  @include vp-mobile {
    padding: 5px 20px 30px;
    width: 272px;
    height: 330px;
    gap: 5px;
  }

  .catalog-card__image-wrapper {
    position: absolute;
    top: -32px;
    width: 100%;

    @include vp-laptop {
      top: -20px;
    }

    @include vp-tablet {
      position: unset;
    }

    @include vp-mobile {
      top: 0;
      width: 200px;
    }
  }

  .catalog-card__image {
    @include vp-tablet {
      position: absolute;
      bottom: 192px;
      left: 50%;
      transform: translateX(-50%);
      height: 270px;
      object-fit: contain;
      object-position: bottom center;
      z-index: 1;
    }

    @include vp-mobile {
      height: 220px;
      bottom: 145px;
    }
  }

  .catalog-card__title {
    font-family: $ff-gilroy, sans-serif;
    font-size: 30px;
    line-height: 1.2;

    @include vp-laptop {
      font-size: 21px;
      line-height: 25px;
    }

    @include vp-tablet {
      font-size: 22px;
      line-height: 27px;
      max-width: unset;
    }

    @include vp-mobile {
      font-size: 18px;
      line-height: 23px;
    }
  }

  .catalog-card__button {
    display: flex;
    width: 100%;
  }
}

.btn--size-m {
  align-items: center;
  justify-content: center;
  color: $color-white;
  background-color: $color-ucla-gold;
  font-weight: 700;
  font-family: $ff-gilroy, sans-serif;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  user-select: none;
  font-size: 25px;
  line-height: 30px;
  padding: 18px 17px 12px;
  margin: 0;
  width: 100%;

  @include vp-laptop {
    font-size: 18px;
    line-height: 22px;
    padding: 10px 10px 9px;
    border-radius: 3px;
  }

  @include vp-tablet {
    font-size: 25px;
    line-height: 30px;
    padding: 21px 21px 19px;
    border-radius: 5px;
  }

  @include vp-mobile {
    font-size: 18px;
    line-height: 22px;
    padding: 15px 14px 13px;
  }

  &:hover {
    background-color: $color-mustard-yellow;
  }
}
</style>
