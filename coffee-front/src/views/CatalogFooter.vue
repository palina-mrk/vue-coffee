<script setup>
import MainNav from '../components/navigation/MainNav.vue';
import LogoNav from '../components/navigation/LogoNav.vue';
import BgFooter from '../components/backgrounds/BgFooter.vue';
</script>

<template>
  <footer class="footer footer--for-catalog">
    <bg-footer></bg-footer>
  
    <div class="container">
      <div class="footer__subscribe">
        <h2 class="footer__subscribe-title">Подписка на&nbsp;новости и&nbsp;рассылку</h2>
        <p class="footer__subscribe-paragraph">Подпишитесь на&nbsp;нашу рассылку прямо сейчас и&nbsp;будьте в&nbsp;курсе новых поставок, скидок и&nbsp;эксклюзивных предложений.</p>
        <form class="footer__subscribe-form custom-subscribe" method="POST" action="#">
          <div class="custom-subscribe__input">
            <input class="custom-subscribe__field" type="email" placeholder="Ваш email" name="subscribe-email">
            <button class="custom-subscribe__button" type="submit">
              <span class="custom-subscribe__button-text">Подписаться</span>
              <span class="custom-subscribe__success-text">Спасибо за&nbsp;подписку!</span>
            </button>
          </div>
          <p class="custom-subscribe__agree">Нажимая на&nbsp;кнопку &laquo;Подписаться&raquo;, вы&nbsp;принимаете правила <a class="custom-subscribe__agree-link" href="#">пользовательского соглашения</a></p>
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
