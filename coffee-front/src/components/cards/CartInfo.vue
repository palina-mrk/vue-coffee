<script setup>
import LogoPersonal from "../navigation/LogoPersonal.vue";

defineProps(["message", "note"]);
</script>

<template>
  <div class="info-card">
    <div class="info-card__images-block">
      <picture class="info-card__picture-back">
        <source
          media="(max-width: 768px)"
          srcset="../../images/personal/password-corns-mobile.png"
        />
        <source
          media="(max-width: 1904px)"
          srcset="../../images/personal/password-corns-laptop.png"
        />
        <img
          class="info-card__image-back"
          src="../../images/personal/password-corns-desktop.png"
          width="504"
          height="334"
          alt="Зёрна кофе под чашкой"
        />
      </picture>

      <picture class="info-card__picture-front">
        <source
          media="(max-width: 768px)"
          srcset="../../images/personal/password-coffee-mobile.png"
        />
        <source
          media="(max-width: 1904px)"
          srcset="../../images/personal/password-coffee-laptop.png"
        />
        <img
          class="info-card__image-front"
          src="../../images/personal/password-coffee-desktop.png"
          width="460"
          height="306"
          alt="Чашка кофе"
        />
      </picture>
    </div>

    <div class="info-card__content-block">
      <logo-personal
        class="info-card__logo"
        @leave-page="$emit('close-form')"
        @click="$emit('close-form')"
      ></logo-personal>
      <button
        class="info-card__btn-close btn-icon"
        type="button"
        @click="$emit('close-form')"
        aria-label="Закрыть"
      >
        <svg class="btn-icon__svg" width="26" height="26" aria-hidden="true">
          <use xlink:href="../../assets/cart-sprite.svg#icon-cross"></use>
        </svg>
      </button>

      <div class="info-card__info">
        <p class="info-card__summary">{{ message }}</p>
        <p class="info-card__note">{{ note }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-black;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 0;
  cursor: pointer;
  color: $color-black;
  width: 33px;
  height: 33px;

  @include vp-laptop {
    width: 23px;
    height: 23px;
  }

  @include vp-tablet {
    width: 18px;
    height: 18px;
  }

  @include vp-mobile {
    width: 15px;
    height: 15px;
  }

  &__svg {
    display: flex;
    width: 100%;
    height: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    width: 200%;
    height: 200%;
    left: -50%;
    top: -50%;
    z-index: -1;
  }

  &:hover::before {
    background-color: $color-bright-gray;
  }
}

.info-card {
  display: flex;
  border-radius: 30px;
  min-height: 470px;
  box-shadow: 0 0 50px 0 $color-spanish-gray;

  @include vp-laptop {
    border-radius: 21px;
    min-height: 330px;
  }

  @include vp-tablet {
    width: calc($max-width-tablet + 68px);
  }

  @include vp-mobile {
    width: calc($max-width-mobile + 36px);
    flex-direction: column-reverse;
    border-radius: 18px;
  }

  &__images-block {
    border-radius: 30px 0 0 30px;
    border-width: 1px;
    border-color: $color-spanish-gray;
    border-style: solid none solid solid;
    position: relative;
    width: 400px;
    background-color: $color-ucla-gold;

    @include vp-laptop {
      width: 283px;
      border-radius: 21px 0 0 21px;
    }

    @include vp-tablet {
      width: 270px;
    }

    @include vp-mobile {
      width: 100%;
      border-radius: 0 0 18px 18px;
      height: 150px;
      border-style: none solid solid solid;
    }
  }

  &__image-back {
    position: absolute;
    pointer-events: none;
    z-index: 1;
    overflow: visible;
    width: 504px;
    height: 334px;
    right: -53px;
    top: 1px;

    @include vp-laptop {
      width: 356px;
      height: 237px;
      right: -38px;
      top: 5px;
    }

    @include vp-mobile {
      width: 351px;
      height: 256px;
      top: -70px;
      right: 10px;
    }
  }

  &__image-front {
    position: absolute;
    pointer-events: none;
    z-index: 2;
    overflow: visible;
    height: 308px;
    width: 320px;
    right: -26px;
    top: -14px;

    @include vp-laptop {
      width: 236px;
      height: 216px;
      right: -30px;
      top: -10px;
    }

    @include vp-mobile {
      width: 297px;
      height: 184px;
      right: 50px;
      top: -20px;
    }
  }

  &__content-block {
    background-color: $color-white;
    border-radius: 0 30px 30px 0;
    border-width: 1px;
    border-color: $color-spanish-gray;
    border-style: solid solid solid none;
    padding: 45px 70px 120px;
    width: 740px;
    display: grid;
    align-items: center;
    grid-template-columns: 35px 1fr 35px;
    gap: 20px 50px;

    @include vp-laptop {
      border-radius: 0 21px 21px 0;
      padding: 30px 50px 80px;
      width: 530px;
      gap: 25px;
    }

    @include vp-tablet {
      width: calc(100% - 270px);
      padding: 18px 40px 60px;
      gap: 20px;
    }

    @include vp-mobile {
      width: 100%;
      border-radius: 18px 18px 0 0;
      grid-template-columns: 20px 1fr 20px;
      border-style: solid solid none solid;
      padding: 18px 34px 50px;
      gap: 10px 15px;
    }
  }

  &__logo {
    width: 185px;
    height: 91px;
    margin: 0 auto;
    grid-column: -2 / -3;

    @include vp-laptop {
      width: 150px;
      height: 65px;
    }

    @include vp-tablet {
      width: 120px;
      height: 50px;
    }

    @include vp-mobile {
      width: 110px;
      height: 40px;
    }
  }

  &__btn-close {
    grid-column: -1 / -2;
    margin: 0 0 0 auto;
  }

  &__info {
    display: flex;
    grid-column: -2 / -3;
    flex-direction: column;
    justify-content: space-between;
  }

  &__summary {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;
    color: $color-black;
    margin: 0 auto 40px;
    padding: 0;
    text-align: center;

    @include vp-laptop {
      font-size: 28px;
      line-height: 35px;
    }

    @include vp-laptop {
      font-size: 30px;
      line-height: 37px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
      margin: 0 auto 10px;
    }
  }

  &__note {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    color: $color-black;
    text-align: center;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 22px;
      line-height: 27px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 29px;
    }

    @include vp-mobile {
      font-size: 18px;
      line-height: 23px;
    }
  }
}
</style>
