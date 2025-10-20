<script setup>
import MainNav from '../components/navigation/MainNav.vue';
import LogoNav from '../components/navigation/LogoNav.vue';
import BgFooter from '../components/backgrounds/BgFooter.vue';
</script>

<template>
  <footer class="footer">
    <bg-footer></bg-footer>

    <!--div class="background__div background__div--footer-wall"></div>

    <svg
      class="background__svg-vawe background__svg-vawe--footer"
      width="3720"
      height="408"
      aria-hidden="true"
    >
      <use
        xlink:href="../assets/bg-sprite.svg#bg-footer-vawe"
      ></use>
    </svg>

    <svg
      class="background__svg-vawe-for-tablet background__svg-vawe--footer"
      width="1348"
      height="190"
      aria-hidden="true"
    >
      <use
        xlink:href="../assets/background/bg-sprite.svg#bg-footer-vawe-for-tablet"
      ></use>
    </svg>

    <picture>
      <source
        media="(max-width: 767px)"
        srcset="../images/background/bg-footer-corns-mobile.png"
      />
      <source
        media="(max-width: 1348px)"
        srcset="../images/background/bg-footer-corns-tablet.png"
      />
      <source
        media="(max-width: 1903px)"
        srcset="../images/background/bg-footer-corns-laptop.png"
      />
      <img
        class="background__img background__img--footer-corns"
        src="../images/background/bg-footer-corns-desktop.png"
        width="769"
        height="659"
        alt="Зёрна кофе под чашкой"
      />
    </picture>

    <picture>
      <source
        media="(max-width: 767px)"
        srcset="../images/background/bg-heading-cup-mobile.png"
      />
      <source
        media="(max-width: 1348px)"
        srcset="../images/background/bg-heading-cup-tablet.png"
      />
      <source
        media="(max-width: 1903px)"
        srcset="../images/background/bg-heading-cup-laptop.png"
      />
      <img
        class="background__img background__img--footer-cup"
        src="../images/background/bg-heading-cup-desktop.png"
        width="682"
        height="455"
        alt="Чашка кофе"
      />
    </picture-->

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
@import "@/scss/blocks/_background.scss";
@import "@/scss/blocks/_socials.scss";
@import "@/scss/blocks/_custom-subscribe.scss";
@import "@/scss/blocks/_footer.scss";
* {
  font-family: $ff-gilroy;
}
</style>
