<script setup>
defineProps(["newsItem"]);
</script>

<template>
  <div class="news-card">
    <div class="news-card__image-wrapper">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="../../images/blog/new-picture-mobile.png"
        />
        <source
          media="(max-width: 1348px)"
          srcset="../../images/blog/new-picture-tablet.png"
        />
        <source
          media="(max-width: 1903px)"
          srcset="../../images/blog/new-picture-laptop.png"
        />
        <img
          class="news-card__image"
          src="../../images/blog/new-picture-desktop.png"
          width="400"
          height="400"
          alt="Картинка новости"
        />
      </picture>
    </div>
    <div class="news-card__inner">
      <h3 class="news-card__title">{{ newsItem.title }}</h3>
      <div class="news-card__content">
        <p class="news-card__paragraph">{{ newsItem.text[0] }}</p>
        <p class="news-card__paragraph">{{ newsItem.text[1] }}</p>
      </div>
      <div class="news-card__bottom">
        <span class="news-card__author">{{ newsItem.author }}</span>
        
        <router-link
          :to="{ name: 'blog.article', params: { articleID: newsItem.id } }"
          class="news-card__link btn-linked"
          >
          <span class="btn-linked__text">Подробнее</span>
          <svg
            class="btn-linked__icon"
            width="14"
            height="12"
            aria-hidden="true"
          >
            <use
              xlink:href="../../assets/btn-sprite.svg#arrow-for-link"
            ></use>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-linked {
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 9px;
  color: $color-ucla-gold;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  line-height: 26px;
  font-size: 20px;
  user-select: none;
  cursor: pointer;
  position: relative;
  z-index: 0;
  width: fit-content;

  @include vp-laptop {
    font-size: 14px;
    line-height: 18px;
    gap: 8px;
  }

  @include vp-tablet {
    font-size: 25px;
    line-height: 32px;
    gap: 14px;
  }

  @include vp-mobile {
    font-size: 16px;
    line-height: 19px;
    gap: 13px;
  }

  &::after {
    position: absolute;
    content: "";
    top: -11px;
    left: -24px;
    bottom: -7px;
    right: -21px;
    border-radius: 30px;
    cursor: pointer;
    z-index: -1;

    @include vp-laptop {
      top: -7px;
      left: -18px;
      bottom: -4px;
      right: -15px;
      border-radius: 21px;
    }

    @include vp-tablet {
      top: -14px;
      left: -28px;
      bottom: -8px;
      right: -24px;
      border-radius: 36px;
    }
    
    @include vp-mobile {
      top: -6px;
      left: -18px;
      bottom: -4px;
      right: -15px;
      border-radius: 21px;
    }
  }

  &__icon {
    width: 16px;
    height: 12px;
    margin: 0 0 4px;

    @include vp-laptop {
      width: 10px;
      height: 8px;
      margin: 0 0 6px;
    }

    @include vp-tablet {
      width: 26px;
      height: 16px;
      margin: 0 0 2px;
    }

    @include vp-mobile {
      width: 13px;
      height: 10px;
    }
  }

  &:hover::after {
    background-color: $color-bright-gray;
  }
}

.news-card {
  display: flex;
  box-shadow: 0px 0px 30px 0px $color-philippine-gray-20;
  width: 100%;
  border-radius: 20px;
  background-color: $color-white;
  font-family: $ff-gilroy, sans-serif;

  @include vp-laptop {
    box-shadow: 0px 0px 21px 0px $color-philippine-gray-20;
    border-radius: 14px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 61px 0px $color-philippine-gray-20;
    flex-direction: column;
    border-radius: 40px 40px 20px 20px;
  }

  @include vp-mobile {
    box-shadow: 0px 0px 30px 0px $color-philippine-gray-20;
    border-radius: 20px 20px 10px 10px;
  }

  &__image-wrapper {
    min-width: 400px;
    height: 400px;
    overflow: hidden;
    border-radius: 20px 0 0 20px;

    @include vp-laptop {
      min-width: 283px;
      height: 283px;
      border-radius: 14px 0 0 14px;
    }

    @include vp-tablet {
      width: 100%;
      height: 280px;
      border-radius: 40px 40px 0 0;
    }

    @include vp-mobile {
      height: 137px;
      border-radius: 20px 20px 0 0;
    }
  }

  &__image {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  &__inner {
    max-height: 400px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    padding: 40px 130px 50px 70px;
    gap: 30px;

    @include vp-laptop {
      max-height: 283px;
      padding: 30px 90px 38px 53px;
      gap: 20px;
    }

    @include vp-tablet {
      flex-grow: unset;
      max-height: 490px;
      width: 100%;
      padding: 60px 80px 80px;
      gap: 50px;
    }

    @include vp-mobile {
      padding: 40px 30px 40px 40px;
      max-height: 370px;
      gap: 40px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 25px;
    line-height: 32px;
    margin: 0;
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;
    padding: 0;

    @include vp-laptop {
      font-size: 18px;
      line-height: 24px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 32px;
    }

    @include vp-mobile {
      font-size: 16px;
      line-height: 21px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;

    @include vp-laptop {
      gap: 18px;
    }

    @include vp-tablet {
      gap: 25px;
    }

    @include vp-mobile {
      gap: 18px;
    }
  }

  &__paragraph {
    font-family: $ff-gilroy, sans-serif;
    font-weight: 500;
    color: $color-black;
    font-size: 20px;
    line-height: 26px;
    margin: 0;
    padding: 0;

    @include vp-laptop {
      font-size: 14px;
      line-height: 18px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 18px;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__author {
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;

    @include vp-laptop {
      font-size: 14px;
      line-height: 18px;
    }

    @include vp-tablet {
      display: none;
      font-size: 20px;
      line-height: 26px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 18px;
    }
  }
}
</style>
