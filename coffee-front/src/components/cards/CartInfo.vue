<script setup>
import LogoPersonal from "../navigation/LogoPersonal.vue";

defineProps(['isEmpty']);

</script>

<template>
  <div class="info-card">
    <div class="info-card__images-block">
      <picture class="info-card__picture-back">
        <!--source
          media="(max-width: 768px)"
          srcset="../../images/personal/password-corns-mobile.png"
        /-->
        <source
          media="(max-width: 1348px)"
          srcset="../../images/personal/password-corns-desktop.png"
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
        <!--source
          media="(max-width: 768px)"
          srcset="../../images/personal/password-coffee-mobile.png"
        /-->
        <source
          media="(max-width: 1348px)"
          srcset="../../images/personal/password-coffee-desktop.png"
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
    <div class="info-card__info-block" v-show="isEmpty">
      <logo-personal class="info-card__logo"
      @leave-page="$emit('close-form')"
      ></logo-personal>
      <p class="info-card__summary"
        >Ваша корзина пуста!</p
      >
      <p class="info-card__note"
        >Для завершения заказа необходимо добавить товаров в корзину</p
      >
    </div>
    <div class="info-card__info-block" v-show="!isEmpty">
      <logo-personal class="info-card__logo"></logo-personal>
      <p class="info-card__summary"
        >Оплата прошла успешно</p
      >
      <p class="info-card__note"
        >Спасибо за Ваш заказ!</p
      >
    </div>  
    <button class="info-card__btn-close btn-icon" type="button" 
    @click="$emit('close-form')"
    aria-label="Закрыть"
        >
          <svg
            class="btn-icon__svg"
            width="26"
            height="26"
            aria-hidden="true"
        >
          <use xlink:href="../../assets/cart-sprite.svg#icon-cross"></use>
        </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-black;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  margin: 0;
  padding: 20px;
  user-select: none;
  cursor: pointer;

  @include vp-laptop {
    padding: 12px;
  }

  &__svg {
    color: $color-black;
    width: 26px;
    height: 26px;
  
    @include vp-laptop {
      width: 18px;
      height: 18px;
    }

    @include vp-tablet {
      width: 8px;
      height: 8px;
    }

    @include vp-mobile {
      width: 17px;
      height: 17px;
    }
  }

  &:hover {
    background-color: $color-bright-gray;
  }
}

.info-card {
  display: flex;
  border-radius: 30px;
  min-height: 470px;
  
  @include vp-laptop {
    border-radius: 21px;
    min-height: 330px;
  }  

  @include vp-tablet {
    flex-direction: column-reverse;
    width: calc($max-width-tablet + 68px);
  }

  &__images-block {
    border-radius: 30px 0 0 30px;
    position: relative;
    width: 400px;
    background-color: $color-ucla-gold;

    @include vp-laptop {
      width: 283px;
      border-radius: 21px 0 0 21px;
    }

    @include vp-tablet {
      width: 100%;
      border-radius: 0 0 10px 10px;
      height: 253px;
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

    @include vp-tablet {
      width: 504px;
      height: 334px;
      right: unset;
      rotate: 150deg;
      left: 5px;
      bottom: 30px;
      top: unset;
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

    @include vp-tablet {
      height: 308px;
      width: 320px;
      right: unset;
      left: 80px;
      top: -80px;
    }
  }

  &__info-block {
    background-color: $color-white;
    border-radius: 0 30px 30px 0;
    padding: 60px 150px 130px;
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include vp-laptop {
      border-radius: 0 21px 21px 0;
      padding: 30px 117px 94px;
      width: 580px;
    }

    @include vp-tablet {
      width: 100%;
      border-radius: 10px 10px 0 0;
      min-height: 320px;
      padding: 22px 28px 43px;
      gap: 10px;
    }

    @include vp-mobile {
      padding: 31px 18px 29px;
      margin: 0 auto;
      border-radius: 0 0 10px 10px;
      width: calc(100% + 36px);
      min-height: 156px;
      max-width: calc($max-width-mobile + 36px);
      gap: 20px;
    }
  }

  &__logo {
    width: 155px;
    height: 71px;
    margin: 0 auto 42px;

    @include vp-laptop {
      width: 109px;
      height: 51px;
      margin: 0 auto 30px;
    }

    @include vp-tablet {
      display: none;
    }
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

    @include vp-tablet {
      font-size: 35px;
      line-height: 40px;
      margin: 0 auto 20px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
    }
  }

  &__note {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 44px;
    color: $color-black;
    text-align: center;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 24px;
      line-height: 30px;
    }

    @include vp-tablet {
      font-size: 28px;
      line-height: 36px;
    }

    @include vp-mobile {
      max-width: unset;
    }
  }

  &__btn-close {
    position: absolute;
    top: 30px;
    right: 30px;

    @include vp-laptop {
      top: 35px;
      right: 35px;
    }

    @include vp-tablet {
      top: 20px;
      right: 16px;
    }
  }
}
</style>
