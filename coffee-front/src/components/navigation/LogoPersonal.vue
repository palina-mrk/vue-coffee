<script setup></script>

<template>
  <router-link
    :to="{ name: 'home' }"
    @click="$emit('leave-page')"
    aria-label="Ссылка на главную страницу"
  >
    <picture>
      <source
        media="(max-width: 768px)"
        srcset="../../images/personal/user-logo-mobile.png"
      />
      <source
        media="(max-width: 1348px)"
        srcset="../../images/personal/user-logo-tablet.png"
      />
      <source
        media="(max-width: 1904px)"
        srcset="../../images/personal/user-logo-laptop.png"
      />
      <img
        class="logo-img"
        src="../../images/personal/user-logo-desktop.png"
        width="155"
        height="72"
        alt="Ссылка на главную страницу"
      />
    </picture>
  </router-link>
</template>

<style lang="scss" scoped>
.logo-img {
  width: 100%;
  height: 100%;
  display: flex;
  /*
  @include vp-laptop {
    width: 109px;
    height: 51px;
  }

  @include vp-tablet {
    width: 220px;
    height: 103px;
  }

  @include vp-mobile {
    width: 132px;
    height: 62px;
  }*/
}
</style>
