<script setup>
import MainNav from "../navigation/MainNav.vue";
import LogoNav from "../navigation/LogoNav.vue";
import BgFooter from "../backgrounds/BgFooter.vue";
</script>

<template>
  <footer class="footer">
    <bg-footer></bg-footer>

    <div class="container">
      <div class="footer__subscribe">
        <h2 class="footer__subscribe-title">
          Подписка на&nbsp;новости и&nbsp;рассылку
        </h2>
        <p class="footer__subscribe-paragraph">
          Подпишитесь на&nbsp;нашу рассылку прямо сейчас и&nbsp;будьте
          в&nbsp;курсе новых поставок, скидок и&nbsp;эксклюзивных предложений.
        </p>
        <form
          class="footer__subscribe-form custom-subscribe"
          method="POST"
          action="#"
        >
          <div class="custom-subscribe__input">
            <input
              class="custom-subscribe__field"
              type="email"
              placeholder="Ваш email"
              name="subscribe-email"
            />
            <button class="custom-subscribe__button" type="submit">
              <span class="custom-subscribe__button-text">Подписаться</span>
              <span class="custom-subscribe__success-text"
                >Спасибо за&nbsp;подписку!</span
              >
            </button>
          </div>
          <p class="custom-subscribe__agree">
            Нажимая на&nbsp;кнопку &laquo;Подписаться&raquo;, вы&nbsp;принимаете
            правила
            <a class="custom-subscribe__agree-link" href="#"
              >пользовательского соглашения</a
            >
          </p>
        </form>
      </div>
      <div class="footer__nav-wrapper">
        <logo-nav class="footer__logo-link"></logo-nav>
        <main-nav class="footer__nav"></main-nav>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/scss/global/_background.scss";

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

.custom-subscribe {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 23px;

  @include vp-laptop {
    gap: 16px;
  }

  @include vp-tablet {
    gap: 20px;
  }

  @include vp-mobile {
    gap: 10px;
  }

  &__input {
    display: flex;
    background-color: $color-antiflash-white-f3;
    border-radius: 40px;
    justify-content: start;

    @include vp-laptop {
      border-radius: 28px;
    }

    @include vp-tablet {
      border-radius: unset;
      flex-direction: column;
      background-color: unset;
      gap: 20px;
    }

    @include vp-mobile {
      gap: 20px;
    }
  }

  &__field {
    margin: 0;
    padding: 26px 24px 22px 60px;
    height: 100%;
    flex-grow: 1;
    border: none;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 25px;
    line-height: 32px;
    color: $color-chinese-black;
    background: transparent;

    @include vp-laptop {
      font-size: 18px;
      line-height: 23px;
      padding: 19px 17px 16px 40px;
    }

    @include vp-tablet {
      padding: 20px 80px 21px;
      height: 70px;
      flex-grow: unset;
      font-size: 22px;
      line-height: 29px;
      border-radius: 5px;
      background-color: $color-antiflash-white-f3;
    }

    @include vp-mobile {
      padding: 18px 40px 15px;
      height: 50px;
      font-size: 14px;
      line-height: 18px;
    }

    &::placeholder {
      color: $color-chinese-silver;
      user-select: none;
    }
  }

  &__button {
    padding: 26px 24px 22px;
    margin: 0;
    width: 260px;
    color: $color-white;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    background-color: $color-ucla-gold;
    border: none;
    cursor: pointer;
    user-select: none;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    @include vp-laptop {
      border-radius: 28px;
      width: 179px;
      font-size: 18px;
      line-height: 22px;
      padding: 19px 18px 16px 18px;
    }

    @include vp-tablet {
      width: unset;
      border-radius: 5px;
      font-size: 25px;
      line-height: 30px;
      padding: 20px 20px 21px;
    }

    @include vp-mobile {
      font-size: 18px;
      line-height: 22px;
      padding: 15px 15px 13px;
    }

    &:hover {
      background-color: $color-mustard-yellow;
    }
  }

  &__success-text {
    display: none;
  }

  &__agree {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: $color-davys-gray;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 12px;
      line-height: 16px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
      max-width: 490px;
    }

    @include vp-mobile {
      font-size: 10px;
      line-height: 13px;
      max-width: 245px;
    }
  }

  &__agree-link {
    font-weight: 600;
    color: $color-ucla-gold;

    &:hover {
      text-decoration: underline;
      color: $color-mustard-yellow;
    }
  }
}

.custom-subscribe--success {
  .custom-subscribe__field {
    display: none;

    @include vp-tablet {
      display: flex;
    }
  }
  .custom-subscribe__field,
  .custom-subscribe__button-text {
    display: none;
  }

  .custom-subscribe__button {
    width: 100%;
  }

  .custom-subscribe__success-text {
    display: flex;
  }
}

.footer {
  position: relative;
  width: 100%;
  padding: 242px 0 100px;
  margin: 0;
  color: $color-black;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  overflow: hidden;

  @include vp-laptop {
    padding: 185px 0 0;
  }

  @include vp-tablet {
    padding: 453px 0 0;
    color: $color-raising-black;
  }

  @include vp-mobile {
    padding: 283px 0 0;
  }

  &__subscribe {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 185px;

    @include vp-laptop {
      padding: 0 0 135px;
    }

    @include vp-tablet {
      padding: 0 0 100px;
    }

    @include vp-mobile {
      padding: 0 0 60px;
    }
  }

  &__subscribe-title {
    margin: 0 0 52px;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 900;
    font-size: 50px;
    line-height: 62px;
    max-width: 790px;

    @include vp-laptop {
      margin: 0 0 39px;
      font-size: 35px;
      line-height: 44px;
      max-width: 555px;
    }

    @include vp-tablet {
      margin: 0 0 50px;
      font-size: 30px;
      line-height: 37px;
      max-width: 475px;
    }

    @include vp-mobile {
      margin: 0 0 30px;
      font-size: 20px;
      line-height: 25px;
      max-width: unset;
    }
  }

  &__subscribe-paragraph {
    font-family: $ff-gilroy, sans-serif;
    margin: 0 0 58px;
    padding: 0;
    font-size: 25px;
    line-height: 32px;
    max-width: 790px;

    @include vp-laptop {
      margin: 0 0 34px;
      font-size: 18px;
      line-height: 23px;
      max-width: 535px;
    }

    @include vp-tablet {
      margin: 0 0 45px;
      font-size: 20px;
      line-height: 26px;
      max-width: 605px;
    }

    @include vp-mobile {
      margin: 0 0 20px;
      font-size: 14px;
      line-height: 18px;
      max-width: unset;
    }
  }

  &__subscribe-form {
    width: 1100px;

    @include vp-laptop {
      width: 778px;
    }

    @include vp-tablet {
      width: 100%;
    }
  }

  &__nav-wrapper {
    margin: auto 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include vp-tablet {
      flex-direction: column-reverse;
      margin: auto 0 0 0;
      gap: 50px;
      padding: 0 0 80px;
    }

    @include vp-mobile {
      gap: 25px;
      padding: 0 0 50px;
    }
  }

  &__nav {
    position: relative;
    top: 13px;

    @include vp-laptop {
      top: 0;
      right: 10px;
    }

    @include vp-tablet {
      position: unset;
    }
  }
}

.footer--for-catalog {
  padding: 215px 0 100px;

  @include vp-laptop {
    padding: 150px 0 70px;
  }

  @include vp-tablet {
    padding: 450px 0 80px;
  }

  @include vp-mobile {
    padding: 311px 0 50px;
  }

  .footer__subscribe {
    padding: 0 0 175px;

    @include vp-laptop {
      padding: 0 0 130px;
    }

    @include vp-tablet {
      padding: 0 0 100px;
    }

    @include vp-mobile {
      padding: 0 0 60px;
    }
  }

  .footer__subscribe-title {
    margin: 0 0 50px;

    @include vp-laptop {
      margin: 0 0 40px;
    }

    @include vp-tablet {
      margin: 0 0 50px;
    }

    @include vp-mobile {
      margin: 0 0 30px;
    }
  }

  .footer__nav {
    top: 23px;

    @include vp-laptop {
      position: unset;
    }
  }
}
</style>
