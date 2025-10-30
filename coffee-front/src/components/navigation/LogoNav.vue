<script setup></script>

<template>
  <router-link
    :to="{ name: 'home' }"
    @click="$emit('leave-page')"
    aria-label="Ссылка на главную страницу"
  >
    <picture>
      <source
        media="(max-width: 767px)"
        srcset="../../images/header/logo/image-logo-mobile.png"
      />
      <source
        media="(max-width: 1348px)"
        srcset="../../images/header/logo/image-logo-tablet.png"
      />
      <source
        media="(max-width: 1903px)"
        srcset="../../images/header/logo/image-logo-laptop.png"
      />
      <img
        class="logo-img"
        src="../../images/header/logo/image-logo-desktop.png"
        width="260"
        height="116"
        alt="Ссылка на главную страницу"
      />
    </picture>
  </router-link>
</template>

<style lang="scss" scoped>
.logo-img {
  width: 260px;
  height: 116px;
  display: flex;

  @include vp-laptop {
    width: 180px;
    height: 80px;
  }

  @include vp-tablet {
    width: 225px;
    height: 102px;
  }

  @include vp-mobile {
    width: 110px;
    height: 50px;
  }
}
</style>
