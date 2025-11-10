<script setup>
import { useArticlesStore } from "../../stores/articles";
import { useCatalogStore } from "../../stores/catalog";
import { reactive } from "vue";
const catalogStore = useCatalogStore();
const articlesStore = useArticlesStore();
import ProductCard from "../cards/ProductCard.vue";
import BgHome from "../backgrounds/BgHome.vue";
import SliderLarge from "../sliders/SliderLarge.vue";
import { storeToRefs } from "pinia";
import CatalogCard from "../cards/CatalogCard.vue";

const { isLoaded, coffeeSales } = storeToRefs(catalogStore);
const { news } = storeToRefs(articlesStore);
const catalogCards = reactive([
  { page: "coffee", title: "Свежеобжаренный кофе" },
  { page: "tea", title: "Чай и кофейные напитки" },
  { page: "vending", title: "Продукция для вендинга" },
  { page: "healthy", title: "Здоровое питание" },
]);

function getPreviousSales() {
  coffeeSales.value.unshift(coffeeSales.value[coffeeSales.value.length - 1]);
  coffeeSales.value.pop();
}

function getNextSales() {
  coffeeSales.value.push(coffeeSales.value[0]);
  coffeeSales.value.shift();
}

function getPreviousNews() {
  news.value.unshift(news.value[news.value.length - 1]);
  news.value.pop();
}

function getNextNews() {
  news.value.push(news.value[0]);
  news.value.shift();
}
</script>

<template>
  <main v-if="isLoaded">
    <section class="overview">
      <bg-home :section="'overview'"></bg-home>

      <div class="container">
        <div class="overview__hero-wrapper">
          <slider-large
            class="overview__slider"
            :linkNames="['home', 'catalogs', 'sales']"
          ></slider-large>
          <h1 class="overview__hero-title" id="home">Свежеобжаренный кофе</h1>
          <div class="overview__hero-content">
            <p class="overview__hero-paragraph">
              Кофе Калининградской обжарки из&nbsp;разных стран произрастания
              с&nbsp;доставкой на&nbsp;дом.
            </p>
            <p class="overview__hero-paragraph">
              Мы&nbsp;обжариваем кофе
              <span class="overview__hero-paragraph--accented-word"
                >каждые выходные.</span
              >
            </p>
          </div>
          <a href="#catalogs" class="overview__hero-button btn btn--size-xl"
            >Посмотреть каталог</a
          >
        </div>
      </div>
      <div class="container">
        <div class="overview__catalogs-wrapper">
          <h2 class="overview__catalogs-title" id="catalogs">
            Каталоги нашей продукции
          </h2>
          <ul class="overview__catalogs-list">
            <li
              v-for="catalogCard in catalogCards"
              class="overview__catalogs-item"
            >
              <CatalogCard
                :page="catalogCard.page"
                :title="catalogCard.title"
              ></CatalogCard>
            </li>
          </ul>
          <slider-large
            class="overview__catalogs-slider"
            :count="4"
            :selected="1"
          ></slider-large>
        </div>
      </div>
      <div class="container">
        <div class="overview__products-wrapper">
          <h2 class="overview__products-title" id="sales">
            Товары со&nbsp;скидкой
          </h2>
          <p class="overview__products-paragraph">
            <span class="overview__paragraph-string">
              <span class="overview__paragraph-string-tablet"
                >Наша компания предлагает покупать
              </span>
              <span class="overview__paragraph-string-tablet"
                >товар со&nbsp;скидкой не&nbsp;только в&nbsp;дни распродаж</span
              ></span
            >
            <span class="overview__paragraph-string">
              <span class="overview__paragraph-string-tablet"
                >или в&nbsp;течение действия ограниченных предложений, </span
              ><span class="overview__paragraph-string-tablet"
                >но&nbsp;и&nbsp;пользоваться скидками постоянно!</span
              ></span
            >
          </p>
          <div class="overview__products-cards">
            <button
              class="overview__products-prev btn-icon btn-icon--arrow"
              type="button"
              @click="getPreviousSales"
              aria-label="Пролистать к предыдущим карточкам"
            >
              <svg
                class="btn-icon__svg"
                width="27"
                height="16"
                aria-hidden="true"
              >
                <use xlink:href="../../assets/btn-sprite.svg#arrow-back"></use>
              </svg>
            </button>
            <ul class="overview__products-list">
              <li class="overview__products-item">
                <ProductCard
                  :product="coffeeSales[0]"
                  :key="coffeeSales[0].id"
                ></ProductCard>
              </li>
              <li class="overview__products-item">
                <ProductCard
                  :product="coffeeSales[1]"
                  :key="coffeeSales[1].id"
                ></ProductCard>
              </li>
              <li class="overview__products-item">
                <ProductCard
                  :product="coffeeSales[2]"
                  :key="coffeeSales[2].id"
                ></ProductCard>
              </li>
            </ul>
            <button
              class="overview__products-next btn-icon btn-icon--arrow"
              type="button"
              @click="getNextSales"
              aria-label="Пролистать к следующим карточкам"
            >
              <svg
                class="btn-icon__svg"
                width="27"
                height="16"
                aria-hidden="true"
              >
                <use
                  xlink:href="../../assets/btn-sprite.svg#arrow-forward"
                ></use>
              </svg>
            </button>
          </div>
          <router-link
            class="overview__products-link btn-linked btn-linked--black"
            :to="{ name: 'coffee' }"
            >Смотреть все</router-link
          >
        </div>
      </div>
    </section>

    <section class="advantages">
      <bg-home :section="'advantages'"></bg-home>

      <div class="container">
        <div class="advantages__wrapper">
          <div class="advantages__images">
            <picture>
              <source
                media="(max-width: 1903px)"
                srcset="../../images/advantages/advantages-corns-laptop.png"
              />
              <img
                class="advantages__back-image"
                src="../../images/advantages/advantages-corns-desktop.png"
                width="755"
                height="503"
                alt="Кофейные зёрна"
              />
            </picture>
            <picture>
              <source
                media="(max-width: 1903px)"
                srcset="../../images/advantages/advantages-cup-laptop.png"
              />
              <img
                class="advantages__front-image"
                src="../../images/advantages/advantages-cup-desktop.png"
                width="504"
                height="433"
                alt="Чашка кофе"
              />
            </picture>
          </div>
          <div class="advantages__content">
            <h2 class="advantages__title">
              Почему стоит работать именно с&nbsp;нами?
            </h2>
            <ul class="advantages__list">
              <li class="advantages__item">
                <div class="advantages__item-icon">
                  <svg
                    class="advantages__item-svg"
                    width="31"
                    height="30"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="../../assets/advantages-sprite.svg#icon-cup"
                    ></use>
                  </svg>
                </div>
                <div class="advantages__item-text">
                  <p class="advantages__item-title">Всегда свежая обжарка</p>
                  <p class="advantages__item-description">
                    Подбор степени обжарки под каждый сорт кофе. Всегда свежая
                    обжарка
                  </p>
                </div>
              </li>
              <li class="advantages__item">
                <div class="advantages__item-icon">
                  <svg
                    class="advantages__item-svg"
                    width="31"
                    height="31"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="../../assets/advantages-sprite.svg#icon-mark"
                    ></use>
                  </svg>
                </div>
                <div class="advantages__item-text">
                  <p class="advantages__item-title">
                    Лучшие цены на&nbsp;продукцию
                  </p>
                  <p class="advantages__item-description">
                    Благодаря крупным объемам производства мы&nbsp;даем лучшие
                    цены на&nbsp;нашу продукцию
                  </p>
                </div>
              </li>
              <li class="advantages__item">
                <div class="advantages__item-icon">
                  <svg
                    class="advantages__item-svg"
                    width="36"
                    height="30"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="../../assets/advantages-sprite.svg#icon-consult"
                    ></use>
                  </svg>
                </div>
                <div class="advantages__item-text">
                  <p class="advantages__item-title">Консультации 24/7</p>
                  <p class="advantages__item-description">
                    Наши специалисты готовы всегда помочь и&nbsp;подсказать вам
                    с&nbsp;выбором кофе или другой продукции.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="technology">
      <bg-home :section="'technology'"></bg-home>

      <div class="container">
        <div class="technology__wrapper">
          <h2 class="technology__title">Как мы&nbsp;обжариваем наш кофе:</h2>
          <div class="technology__content">
            <p class="technology__paragraph">
              Компания Нью Рефайнинг Груп находится в&nbsp;г. Калининграде
              и&nbsp;имеет свой склад и&nbsp;представительство в&nbsp;Москве.
              Завод работает на&nbsp;рынке свежеобжаренного кофе
              и&nbsp;растворимой продукции более 15&nbsp;лет. Завод имеет
              немецкое оборудование марки Probat по&nbsp;обжарке кофе
              и&nbsp;итальянские агломераторы для производства растворимой
              продукции.
            </p>
            <p class="technology__paragraph">
              <span class="technology__subparagraph"
                >Кофе поставляется в&nbsp;контейнерах напрямую с&nbsp;плантаций
                по&nbsp;всему миру. Компания имеет долгосрочные контракты
                по&nbsp;поставке продукции. Каждая партия проходит строгий
                контроль на&nbsp;заводе для проверки зерна. Зеленое зерно
                обжаривается, проходит процесс дегазации и&nbsp;тут&nbsp;же
                отправляется клиентам. Наши обжарщики прошли обучение
                в&nbsp;России и&nbsp;за&nbsp;рубежом.</span
              >
              <span class="technology__subparagraph"
                >У&nbsp;нас свой подход к&nbsp;каждой партии зерна.</span
              >
            </p>
            <p class="technology__paragraph">
              Мы&nbsp;раскрываем вкус каждого сорта кофе.
            </p>
          </div>
          <a href="#catalogs" class="technology__button btn btn--size-xl"
            >Посмотреть каталог</a
          >
        </div>
      </div>
    </section>

    <section class="news" v-if="articlesStore.isLoaded">
      <bg-home :section="'news'"></bg-home>

      <div class="container">
        <div class="news__heading">
          <h2 class="news__title">Новости компании</h2>

          <router-link
            :to="{name: 'news'}"
            class="news__link btn-linked btn-linked--black btn-linked--size-m"
          >
            <span class="btn-linked__text">Читать все</span>
          </router-link>
        </div>

        <div class="news__arrows">
          <button
            class="news__arrow-btn btn-icon btn-icon--arrow-transparent"
            type="button"
            @click="getPreviousNews"
            aria-label="Посмотреть предыдущую новость"
          >
            <svg
              class="btn-icon__svg"
              width="101"
              height="16"
              aria-hidden="true"
            >
              <use
                xlink:href="../../assets/news-sprite.svg#icon-news-prev"
              ></use>
            </svg>
          </button>

          <button
            class="news__arrow-btn btn-icon btn-icon--arrow-transparent"
            type="button"
            @click="getNextNews"
            aria-label="Посмотреть следующую новость"
          >
            <svg
              class="btn-icon__svg"
              width="101"
              height="16"
              aria-hidden="true"
            >
              <use
                xlink:href="../../assets/news-sprite.svg#icon-news-next"
              ></use>
            </svg>
          </button>
        </div>

        <ul class="news__list">
          <li class="news__item">
            <div class="news-card news-card--flat">
              <div class="news-card__image-wrapper">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcset="../../images/news/card-image-mobile.png"
                  />
                  <source
                    media="(max-width: 1348px)"
                    srcset="../../images/news/card-image-tablet.png"
                  />
                  <source
                    media="(max-width: 1903px)"
                    srcset="../../images/news/card-image-laptop.png"
                  />
                  <img
                    class="news-card__image"
                    src="../../images/news/card-image-desktop.png"
                    width="336"
                    height="400"
                    alt="Ссылка на главную страницу"
                  />
                </picture>
              </div>
              <div class="news-card__inner">
                <h3 class="news-card__title">
                  {{ news[0].title }}
                </h3>
                <div class="news-card__content">
                  <p class="news-card__paragraph">
                    {{ news[0].text[0] }}
                  </p>
                </div>
                <router-link class="news-card__link btn-linked" :to="{ name: 'blog.article', params: { articleID: news[0].id } }">
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
          </li>

          <li class="news__item">
            <div class="news-card">
              <div class="news-card__inner">
                <h3 class="news-card__title">{{ news[1].title }}</h3>
                <div class="news-card__content">
                  <p class="news-card__paragraph">
                    {{ news[1].text[0] }}
                  </p>
                </div>
                <router-link class="news-card__link btn-linked" :to="{ name: 'blog.article', params: { articleID: news[1].id } }">
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
          </li>

          <li class="news__item">
            <div class="news-card">
              <div class="news-card__inner">
                <h3 class="news-card__title">{{ news[2].title }}</h3>
                <div class="news-card__content">
                  <p class="news-card__paragraph">
                    {{ news[2].text[0] }}
                  </p>
                </div>
                <router-link class="news-card__link btn-linked" :to="{ name: 'blog.article', params: { articleID: news[2].id } }">
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
          </li>

          <li class="news__item">
            <div class="news-card news-card--flat">
              <div class="news-card__image-wrapper">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcset="../../images/news/card-image-mobile.png"
                  />
                  <source
                    media="(max-width: 1348px)"
                    srcset="../../images/news/card-image-tablet.png"
                  />
                  <source
                    media="(max-width: 1904px)"
                    srcset="../../images/news/card-image-laptop.png"
                  />
                  <img
                    class="news-card__image"
                    src="../../images/news/card-image-desktop.png"
                    width="336"
                    height="400"
                    alt="Ссылка на главную страницу"
                  />
                </picture>
              </div>
              <div class="news-card__inner">
                <h3 class="news-card__title">
                  {{ news[3].title }}
                </h3>
                <div class="news-card__content">
                  <p class="news-card__paragraph">
                    {{ news[3].text[0] }}
                  </p>
                </div>
                <router-link class="news-card__link btn-linked" :to="{ name: 'blog.article', params: { articleID: news[3].id } }">
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
          </li>
        </ul>
      </div>
    </section>

    <section class="instagram">
      <bg-home :section="'instagram'"></bg-home>

      <div class="container">
        <div class="instagram__title-wrapper">
          <h2 class="instagram__title" id="instagram">
            Мы&nbsp;в&nbsp;Instagram
          </h2>
          <a
            class="instagram__link socials__link socials__link--filled"
            href="#"
          >
            <svg
              class="socials__icon"
              width="86"
              height="86"
              aria-hidden="true"
            >
              <use
                xlink:href="../../assets/instagram-sprite.svg#icon-instagram"
              ></use>
            </svg>
          </a>
        </div>
        <div class="instagram__content">
          <div class="instagram__images">
            <picture>
              <source
                media="(max-width: 767px)"
                srcset="../../images/instagram/iphone-large-mobile.png"
              />
              <source
                media="(max-width: 1348px)"
                srcset="../../images/instagram/iphone-large-tablet.png"
              />
              <source
                media="(max-width: 1903px)"
                srcset="../../images/instagram/iphone-large-laptop.png"
              />
              <img
                class="instagram__back-image"
                src="../../images/instagram/iphone-large-desktop.png"
                width="897"
                height="597"
                alt="Большой айфон"
              />
            </picture>
            <picture>
              <source
                media="(max-width: 1903px)"
                srcset="../../images/instagram/iphone-small-laptop.png"
              />
              <img
                class="instagram__front-image"
                src="../../images/instagram/iphone-small-desktop.png"
                width="780"
                height="520"
                alt="Маленький айфон"
              />
            </picture>
          </div>
          <ul class="instagram__gallery">
            <li class="instagram__gallery-item">
              <picture>
                <source
                  media="(max-width: 1348px)"
                  srcset="../../images/instagram/gallery-tablet.png"
                />
                <source
                  media="(max-width: 1903px)"
                  srcset="../../images/instagram/gallery-laptop.png"
                />
                <img
                  class="instagram__gallery-image"
                  src="../../images/instagram/gallery-desktop.png"
                  width="280"
                  height="270"
                  alt="Изображение из галереи"
                />
              </picture>
            </li>
            <li class="instagram__gallery-item">
              <picture>
                <source
                  media="(max-width: 1348px)"
                  srcset="../../images/instagram/gallery-tablet.png"
                />
                <source
                  media="(max-width: 1904px)"
                  srcset="../../images/instagram/gallery-laptop.png"
                />
                <img
                  class="instagram__gallery-image"
                  src="../../images/instagram/gallery-desktop.png"
                  width="280"
                  height="270"
                  alt="Изображение из галереи"
                />
              </picture>
            </li>
            <li class="instagram__gallery-item">
              <picture>
                <source
                  media="(max-width: 1348px)"
                  srcset="../../images/instagram/gallery-tablet.png"
                />
                <source
                  media="(max-width: 1903px)"
                  srcset="../../images/instagram/gallery-laptop.png"
                />
                <img
                  class="instagram__gallery-image"
                  src="../../images/instagram/gallery-desktop.png"
                  width="280"
                  height="270"
                  alt="Изображение из галереи"
                />
              </picture>
            </li>
            <li class="instagram__gallery-item">
              <picture>
                <source
                  media="(max-width: 1348px)"
                  srcset="../../images/instagram/gallery-tablet.png"
                />
                <source
                  media="(max-width: 1903px)"
                  srcset="../../images/instagram/gallery-laptop.png"
                />
                <img
                  class="instagram__gallery-image"
                  src="../../images/instagram/gallery-desktop.png"
                  width="280"
                  height="270"
                  alt="Изображение из галереи"
                />
              </picture>
            </li>
            <li class="instagram__gallery-item">
              <picture>
                <source
                  media="(max-width: 1348px)"
                  srcset="../../images/instagram/gallery-tablet.png"
                />
                <source
                  media="(max-width: 1903px)"
                  srcset="../../images/instagram/gallery-laptop.png"
                />
                <img
                  class="instagram__gallery-image"
                  src="../../images/instagram/gallery-desktop.png"
                  width="280"
                  height="270"
                  alt="Изображение из галереи"
                />
              </picture>
            </li>
            <li class="instagram__gallery-item">
              <picture>
                <source
                  media="(max-width: 1348px)"
                  srcset="../../images/instagram/gallery-tablet.png"
                />
                <source
                  media="(max-width: 1904px)"
                  srcset="../../images/instagram/gallery-laptop.png"
                />
                <img
                  class="instagram__gallery-image"
                  src="../../images/instagram/gallery-desktop.png"
                  width="280"
                  height="270"
                  alt="Изображение из галереи"
                />
              </picture>
            </li>
          </ul>
          <button
            class="instagram__button btn-icon btn-icon--white btn-icon--arrow"
            type="button"
            aria-label="Пролистать к следующим карточкам"
          >
            <svg
              class="btn-icon__svg"
              width="27"
              height="16"
              aria-hidden="true"
            >
              <use xlink:href="../../assets/btn-sprite.svg#arrow-forward"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
* {
  font-family: $ff-gilroy, sans-serif;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-white;
  background-color: $color-ucla-gold;
  font-weight: 700;
  line-height: 36px;
  font-size: 30px;
  font-family: $ff-gilroy, sans-serif;
  border-radius: 5px;
  border: none;
  margin: 0;
  cursor: pointer;

  @include vp-laptop {
    font-size: 21px;
    line-height: 25px;
  }

  @include vp-tablet {
    font-size: 25px;
    line-height: 30px;
  }

  @include vp-mobile {
    font-size: 18px;
    line-height: 22px;
  }

  &--size-xl {
    padding: 24px 24px 20px;

    @include vp-laptop {
      padding: 17px 17px 16px;
      border-radius: 3.5px;
    }

    @include vp-tablet {
      padding: 22px 20px 18px;
      border-radius: 5px;
    }

    @include vp-mobile {
      padding: 15px 14px 13px;
    }
  }

  &--size-m {
    font-size: 25px;
    line-height: 30px;
    padding: 18px 17px 12px;
    font-family: $ff-gilroy, sans-serif;

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
  }

  &--size-s {
    padding: 13px;
    font-size: 18px;
    line-height: 22px;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      padding: 9px 9px 10px;
      font-size: 12px;
      line-height: 15px;
      border-radius: 4px;
    }

    @include vp-tablet {
      padding: 11px 11px 10px;
      font-size: 16px;
      line-height: 19px;
      border-radius: 5px;
    }

    @include vp-mobile {
      padding: 12px 11px 9px;
      border-radius: 4px;
    }
  }

  &:hover {
    background-color: $color-mustard-yellow;
  }

  &--white-xl {
    color: $color-black;
    background-color: $color-white;
    border: 1px solid $color-platinum;
    padding: 23px;
    height: 70px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    font-family: $ff-gilroy, sans-serif;
    border-radius: 10px;

    @include vp-laptop {
      height: 50px;
      border: 0.71px solid $color-platinum;
      padding: 16px;
      font-size: 14px;
      line-height: 17px;
      border-radius: 7px;
    }

    @include vp-tablet {
      height: 70px;
      border: 1px solid $color-platinum;
      padding: 22px;
      font-size: 22px;
      line-height: 26px;
      border-radius: 5px;
    }

    @include vp-mobile {
      height: 50px;
      padding: 14px 14px 15px;
      font-size: 18px;
      line-height: 21px;
    }

    &:hover {
      background-color: $color-cornsilk;
    }
  }
}

.btn-icon {
  border: none;
  user-select: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  &::before {
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
    cursor: pointer;
  }

  &:hover {
    color: $color-ucla-gold;
  }

  &--burger {
    .btn-icon__svg {
      width: 59px;
      height: 36px;

      @include vp-mobile {
        width: 29px;
        height: 17px;
      }
    }
  }

  &--close {
    width: 44px;
    height: 44px;

    @include vp-mobile {
      width: 22px;
      height: 22px;
    }

    &:hover {
      color: $color-ucla-gold;
    }
  }

  &--arrow {
    color: $color-white;
    background-color: $color-ucla-gold;
    border-radius: 50%;
    width: 70px;
    height: 70px;

    @include vp-laptop {
      width: 49px;
      height: 49px;
    }

    @include vp-tablet {
      width: 81px;
      height: 81px;
    }

    @include vp-mobile {
      width: 40px;
      height: 40px;
    }

    &:hover {
      background-color: $color-mustard-yellow;
    }

    .btn-icon__svg {
      width: 28px;
      height: 14px;

      @include vp-laptop {
        width: 24px;
        height: 12px;
      }

      @include vp-mobile {
        width: 16px;
        height: 8px;
      }
    }
  }

  &--white {
    background-color: $color-white;
    color: $color-ucla-gold;

    &:hover {
      color: $color-white;
    }

    .btn-icon__svg {
      width: 34px;
      height: 17px;

      @include vp-tablet {
        width: 38px;
        height: 18px;
      }

      @include vp-mobile {
        width: 20px;
        height: 10px;
      }
    }
  }

  &--arrow-transparent {
    .btn-icon__svg {
      @include vp-tablet {
        width: 101px;
        height: 21px;
      }

      @include vp-mobile {
        width: 48px;
        height: 10px;
      }
    }
  }
}

.btn-linked {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: $color-ucla-gold;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  line-height: 26px;
  font-size: 20px;
  padding: 10px 24px;
  border-radius: 30px;
  user-select: none;
  cursor: pointer;

  @include vp-laptop {
    font-size: 14px;
    line-height: 18px;
    padding: 5px 18px;
    border-radius: 21px;
  }

  @include vp-tablet {
    font-size: 25px;
    line-height: 32px;
    border-radius: 36px;
    gap: 14px;
  }

  @include vp-mobile {
    font-size: 16px;
    line-height: 21px;
    padding: 5px 18px 3px;
    gap: 13px;
  }

  &__icon {
    width: 16px;
    height: 11px;

    @include vp-laptop {
      width: 10px;
      height: 7px;
    }

    @include vp-tablet {
      width: 32px;
      height: 20px;
    }

    @include vp-mobile {
      width: 14px;
      height: 10px;
    }
  }

  &:hover {
    background-color: $color-bright-gray;
  }

  &--black {
    line-height: 24px;
    color: $color-black;
    text-decoration: underline;
    padding: 11px 30px 10px;
    justify-content: center;
    border: none;
    background-color: transparent;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 14px;
      line-height: 16px;
      padding: 7px 18px 6px;
      border-radius: 18px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 30px;
      border-radius: 30px;
      padding: 7px 10px 6px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 16px;
      padding: 5px 13px 3px;
      border-radius: 16px;
    }

    &:hover {
      background-color: $color-ghost-white;
      color: $color-ucla-gold;
    }
  }

  &--black-small {
    line-height: 24px;
    color: $color-black;
    text-decoration: underline;
    padding: 11px 30px 10px;
    justify-content: center;
    border: none;
    background-color: transparent;

    @include vp-laptop {
      font-size: 14px;
      line-height: 16px;
      padding: 7px 18px 6px;
      border-radius: 18px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
      border-radius: 25px;
      padding: 9px 20px 8px;
    }

    @include vp-mobile {
      font-size: 18px;
      line-height: 21px;
      padding: 7px 20px 7px;
      border-radius: 20px;
    }

    &:hover {
      background-color: $color-ghost-white;
      color: $color-ucla-gold;
    }
  }

  &--size-m {
    font-size: 25px;
    padding: 11px 29px 10px;

    @include vp-laptop {
      font-size: 18px;
      padding: 7px 17px 6px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 30px;
      padding: 7px 10px 6px;
      border-radius: 30px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 16px;
      padding: 5px 13px 3px;
      border-radius: 16px;
    }
  }
}

.overview {
  position: relative;
  width: 100%;
  padding: 160px 0 17px;
  margin: 0;
  color: $color-black;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  overflow: hidden;

  @include vp-laptop {
    padding: 113px 0 0;
  }

  @include vp-tablet {
    padding: 143px 0 0;
  }

  @include vp-mobile {
    padding: 70px 0 0;
  }

  &__hero-wrapper {
    padding: 75px 0 215px;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    position: relative;

    @include vp-laptop {
      padding: 50px 0 153px;
    }

    @include vp-tablet {
      padding: 135px 0 50px;
    }

    @include vp-mobile {
      padding: 62px 0 50px;
    }
  }

  &__slider {
    align-self: end;
    margin: 0 0 36px;

    @include vp-laptop {
      margin: 0 0 27px;
    }

    @include vp-tablet {
      position: absolute;
      left: 0;
      bottom: 238px;
    }

    @include vp-mobile {
      bottom: 143px;
    }
  }

  &__hero-title {
    margin: 0 0 58px;
    padding: 0;
    max-width: 960px;
    font-weight: 900;
    font-size: 80px;
    font-family: $ff-gilroy, sans-serif;
    line-height: 100px;

    @include vp-laptop {
      margin: 0 0 38px;
      font-size: 56px;
      line-height: 70px;
      max-width: 662px;
    }

    @include vp-tablet {
      margin: 0 0 80px;
      font-size: 50px;
      line-height: 62px;
      max-width: 470px;
    }

    @include vp-mobile {
      font-size: 30px;
      line-height: 37px;
      margin: 0 0 30px;
      max-width: 280px;
    }
  }

  &__hero-content {
    margin: 0 0 86px;
    display: flex;
    flex-direction: column;
    gap: 31px;
    max-width: 650px;

    @include vp-laptop {
      margin: 0 0 58px;
      max-width: 450px;
      gap: 20px;
    }

    @include vp-tablet {
      margin: 0 0 372px;
      max-width: 310px;
      gap: 25px;
    }

    @include vp-mobile {
      margin: 0 0 218px;
      max-width: 260px;
      gap: 17px;
    }
  }

  &__hero-paragraph {
    margin: 0;
    padding: 0;
    font-size: 25px;
    line-height: 1.3;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 18px;
    }

    @include vp-tablet {
      font-size: 20px;
    }

    @include vp-mobile {
      font-size: 14px;
    }

    &--accented-word {
      font-weight: 600;
      display: inline-block;
    }
  }

  &__hero-button {
    width: 400px;

    @include vp-laptop {
      width: 283px;
      margin: 0 0 0 2px;
    }

    @include vp-tablet {
      width: 100%;
    }
  }

  &__catalogs-wrapper {
    padding: 60px 0 49px;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;

    @include vp-laptop {
      padding: 50px 0 13px;
    }

    @include vp-tablet {
      padding: 25px 0 70px;
    }

    @include vp-mobile {
      padding: 22px 0 40px;
    }
  }

  &__catalogs-title {
    margin: 0 0 78px;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 900;
    font-size: 50px;
    line-height: 62px;

    @include vp-laptop {
      font-size: 35px;
      line-height: 44px;
      margin: 0 0 60px;
    }

    @include vp-tablet {
      font-size: 40px;
      line-height: 50px;
      margin: 0 0 20px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
      margin: 0;
    }
  }

  &__catalogs-list {
    width: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    justify-content: space-between;

    @include vp-tablet {
      position: relative;
      width: 100vw;
      overflow: hidden;
      align-items: center;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      z-index: 1;
      gap: 20px;
      margin: 0;
      padding: 50px 0;
      height: 512px;
    }

    @include vp-mobile {
      padding: 30px 0 14px;
      height: 373px;
    }
  }

  &__catalogs-item {
    padding: 0;
    margin: 0;
    max-width: calc(25% - 15px);
    display: flex;

    @include vp-tablet {
      max-width: fit-content;
    }
  }

  &__catalogs-slider {
    display: none;

    @include vp-tablet {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
    }
  }

  &__products-wrapper {
    padding: 46px 0 0;
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    @include vp-laptop {
      padding: 20px 0 0;
    }

    @include vp-tablet {
      padding: 35px 2px 0 0;
    }

    @include vp-mobile {
      padding: 22px 0 0;
    }
  }

  &__products-title {
    text-align: right;
    margin: 0 0 47px;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 900;
    font-size: 50px;
    line-height: 62px;

    @include vp-laptop {
      font-size: 35px;
      line-height: 44px;
      margin: 0 0 35px;
    }

    @include vp-tablet {
      font-size: 40px;
      line-height: 50px;
      margin: 0 0 50px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
      margin: 0 0 30px;
    }
  }

  &__products-paragraph {
    text-align: right;
    max-width: 1120px;
    margin: 0 0 75px;
    padding: 0;
    font-size: 25px;
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 18px;
      max-width: 780px;
      margin: 0 0 54px;
    }

    @include vp-tablet {
      font-size: 20px;
      max-width: 600px;
      margin: 0 0 77px;
    }

    @include vp-mobile {
      font-size: 14px;
      max-width: 270px;
      margin: 0 0 40px;
      display: unset;
    }
  }

  &__paragraph-string {
    @include vp-tablet {
      display: flex;
      flex-direction: column;
      align-items: end;
    }

    @include vp-mobile {
      display: unset;
    }
  }

  &__products-cards {
    display: flex;
    margin: 0 0 52px auto;
    align-items: center;

    @include vp-laptop {
      margin: 0 0 30px auto;
    }
  }

  &__products-prev {
    position: relative;
    margin: 0;
    padding: 0;
    top: -25px;

    @include vp-laptop {
      top: -15px;
    }

    @include vp-tablet {
      display: none;
    }
  }

  &__products-next {
    position: relative;
    margin: 0;
    padding: 0;
    top: -15px;

    @include vp-laptop {
      top: -13px;
    }

    @include vp-tablet {
      display: none;
    }
  }

  &__products-list {
    display: flex;
    margin: 0 70px;
    padding: 0;
    list-style-type: none;
    justify-content: space-between;
    gap: 20px;

    @include vp-laptop {
      margin: 0 39px;
      gap: 13px;
    }

    @include vp-tablet {
      margin: 0;
      gap: 20px;
      position: relative;
      left: 120px;
      width: calc(50% + 230px);
      z-index: 1;
    }

    @include vp-mobile {
      width: calc(50% + 186px);
      left: 0;
    }
  }

  &__products-item {
    padding: 0;
    margin: 0;
    max-width: calc(33.33% - 13.33px);
    display: flex;

    @include vp-laptop {
      max-width: calc(33.33% - 8.66px);
    }

    @include vp-tablet {
      max-width: fit-content;
    }
  }

  &__products-link {
    margin: 0 112px 0 auto;

    @include vp-laptop {
      margin: 0 70px 0 auto;
    }

    @include vp-tablet {
      display: none;
    }
  }
}

.advantages {
  position: relative;
  width: 100%;
  padding: 90px 0 68px;
  margin: 0;
  color: $color-black;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  overflow: hidden;

  @include vp-laptop {
    padding: 59px 0;
  }

  @include vp-tablet {
    padding: 190px 0 61px;
  }

  @include vp-mobile {
    padding: 30px 0 61px;
  }

  &__wrapper {
    width: 100%;
    justify-content: start;
    display: flex;
    gap: 85px;

    @include vp-laptop {
      gap: 65px;
    }
  }

  &__images {
    width: 755px;
    display: flex;
    position: relative;

    @include vp-laptop {
      width: 534px;
    }

    @include vp-tablet {
      display: none;
    }
  }

  &__back-image {
    width: 755px;
    height: 503px;
    top: 107px;
    left: 0px;
    z-index: -1;
    position: absolute;

    @include vp-laptop {
      width: 534px;
      height: 355px;
      top: 78px;
      left: 0px;
    }
  }

  &__front-image {
    width: 516px;
    height: 433px;
    margin: 280px auto 0 0;

    @include vp-laptop {
      width: 366px;
      height: 307px;
      margin: 200px auto 0 0;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  &__title {
    margin: 0 0 78px;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 900;
    font-size: 50px;
    line-height: 62px;
    max-width: 580px;

    @include vp-laptop {
      font-size: 35px;
      line-height: 44px;
      margin: 0 0 54px;
      max-width: 410px;
    }

    @include vp-tablet {
      font-size: 40px;
      line-height: 50px;
      margin: 0 0 60px;
      max-width: 460px;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
      margin: 0 0 30px;
      max-width: 220px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 59px;

    @include vp-laptop {
      gap: 38px;
    }

    @include vp-tablet {
      gap: 60px;
    }

    @include vp-mobile {
      gap: 30px;
    }
  }

  &__item {
    padding: 0;
    margin: 0;
    display: flex;
    gap: 50px;
    align-items: start;

    @include vp-laptop {
      gap: 30px;
    }

    @include vp-tablet {
      gap: 40px;
    }

    @include vp-mobile {
      gap: 21px;
    }
  }

  &__item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-white;
    background-color: $color-ucla-gold;
    border-radius: 50%;
    width: 84px;
    height: 84px;

    @include vp-laptop {
      width: 60px;
      height: 60px;
    }

    @include vp-tablet {
      width: 81px;
      height: 81px;
    }

    @include vp-mobile {
      width: 40px;
      height: 40px;
    }
  }

  &__item-svg {
    width: 30px;
    height: 30px;

    @include vp-laptop {
      width: 26px;
      height: 23px;
    }

    @include vp-tablet {
      width: 35px;
      height: 30px;
    }

    @include vp-mobile {
      width: 18px;
      height: 15px;
    }
  }

  &__item-text {
    max-width: 530px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;

    @include vp-laptop {
      max-width: 400px;
      gap: 15px;
    }

    @include vp-tablet {
      max-width: 430px;
      gap: 20px;
    }

    @include vp-mobile {
      max-width: 250px;
      gap: 13px;
    }
  }

  &__item-title {
    margin: 0;
    font-family: $ff-gilroy, sans-serif;
    padding: 0;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;

    @include vp-laptop {
      font-size: 21px;
      line-height: 25px;
    }

    @include vp-tablet {
      font-size: 25px;
      line-height: 30px;
    }

    @include vp-mobile {
      font-size: 16px;
      line-height: 19px;
    }
  }

  &__item-description {
    margin: 0;
    padding: 0;
    font-size: 25px;
    line-height: 32px;

    @include vp-laptop {
      font-size: 18px;
      line-height: 23px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
    }

    @include vp-mobile {
      font-size: 12px;
      line-height: 16px;
    }
  }
}

.technology {
  position: relative;
  width: 100%;
  padding: 218px 0 153px;
  margin: 0;
  color: $color-white;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  overflow: hidden;
  box-sizing: border-box;

  @include vp-laptop {
    padding: 142px 0 93px;
  }

  @include vp-tablet {
    padding: 175px 0 0;
  }

  @include vp-mobile {
    padding: 80px 0 0;
  }

  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;

    @include vp-laptop {
      gap: 68px;
    }

    @include vp-tablet {
      gap: 75px;
    }

    @include vp-mobile {
      gap: 29px;
    }
  }

  &__title {
    margin: 0;
    padding: 0;
    max-width: 960px;
    font-weight: 900;
    font-size: 50px;
    line-height: 62px;
    font-family: $ff-gilroy, sans-serif;

    @include vp-laptop {
      font-size: 35px;
      line-height: 44px;
      max-width: 520px;
    }

    @include vp-tablet {
      font-size: 40px;
      line-height: 50px;
      max-width: unset;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 27px;
    max-width: 1245px;

    @include vp-laptop {
      max-width: 880px;
      gap: 20px;
      margin: 0 0 0px;
    }

    @include vp-tablet {
      max-width: unset;
      gap: 26px;
      margin: 0 0 13px;
    }

    @include vp-mobile {
      gap: 18px;
      margin: 0 0 44px;
    }
  }

  &__paragraph {
    margin: 0;
    padding: 0;
    font-size: 25px;
    line-height: 32px;
    display: flex;
    flex-direction: column;
    font-family: $ff-gilroy, sans-serif;
    align-items: start;

    @include vp-laptop {
      font-size: 18px;
      line-height: 23px;
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

  &__button {
    width: 400px;

    @include vp-laptop {
      width: 283px;
    }

    @include vp-tablet {
      width: 100%;
    }
  }
}

.news-card {
  display: flex;
  box-shadow: 0px 0px 30px 0px $color-philippine-gray-20;
  height: 400px;
  justify-content: space-between;
  max-width: 100%;
  border-radius: 20px;
  background-color: $color-white;
  font-family: $ff-gilroy, sans-serif;

  @include vp-laptop {
    box-shadow: 0px 0px 21px 0px $color-philippine-gray-20;
    height: 282px;
    border-radius: 14px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 61px 0px $color-philippine-gray-20;
    flex-direction: column;
    border-radius: 40px 40px 20px 20px;
    overflow: hidden;
    width: 700px;
    height: unset;
    min-height: 300px;
  }

  @include vp-mobile {
    box-shadow: 0px 0px 30px 0px $color-philippine-gray-20;
    width: 340px;
    border-radius: 20px 20px 10px 10px;
  }

  &__image-wrapper {
    display: flex;
    width: 336px;
    max-height: 100%;
    overflow: hidden;
    border-radius: 20px 0 0 20px;

    @include vp-laptop {
      width: 238px;
      border-radius: 14px 0 0 14px;
    }

    @include vp-tablet {
      width: 700px;
      min-height: 280px;
      border-radius: 40px 40px 0 0;
    }

    @include vp-mobile {
      width: 340px;
      min-height: 137px;
      border-radius: 10px 10px 0 0;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-position: top center;
    overflow: hidden;
  }

  &__inner {
    padding: 62px 112px 35px 140px;
    width: 680px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-family: $ff-gilroy, sans-serif;
    color: $color-black;

    @include vp-laptop {
      padding: 51px 97px 30px 80px;
      width: 480px;
      gap: 28px;
    }

    @include vp-tablet {
      width: 700px;
      padding: 70px 90px 50px;
      gap: 15px;
    }

    @include vp-mobile {
      width: 340px;
      padding: 30px 30px 20px 30px;
      gap: 10px;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 25px;
    line-height: 32px;
    margin: 0;
    font-family: $ff-gilroy, sans-serif;
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
    overflow: hidden;
    gap: 20px;

    @include vp-tablet {
      gap: 20px;
    }

    @include vp-mobile {
      gap: 14px;
    }
  }

  &__paragraph {
    font-size: 20px;
    line-height: 26px;
    margin: 0;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
    
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

  &__link {
    margin: auto auto 0 0;
  }
}

.news-card--flat {
  .news-card__inner {
    padding: 40px 81px 0 84px;
    width: 624px;
    gap: 30px;

    @include vp-laptop {
      padding: 32px 57px 8px 60px;
      width: 442px;
      gap: 20px;
    }

    @include vp-tablet {
      padding: 62px 80px 72px 80px;
      width: 100%;
      height: 580px;
    }

    @include vp-mobile {
      padding: 40px 30px 40px 40px;
      height: 500px;
    }
  }

  .news-card__content {
    gap: 28px;

    @include vp-laptop {
      gap: 18px;
    }

    @include vp-tablet {
      gap: 25px;
      width: 100%;
      height: 200px;
      overflow: hidden;
    }

    @include vp-mobile {
      gap: 18px;
      height: 164px;
      overflow: hidden;
    }
  }
}

.news {
  position: relative;
  width: 100%;
  padding: 50px 0 27px;
  margin: 0;
  color: $color-black;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  overflow: hidden;

  @include vp-laptop {
    padding: 44px 0 22px;
  }

  @include vp-tablet {
    padding: 85px 0 108px;
  }

  @include vp-mobile {
    padding: 70px 0 50px;
  }

  &__heading {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 0 50px;

    @include vp-laptop {
      margin: 0 0 43px;
    }

    @include vp-tablet {
      margin: 0 0 52px;
    }

    @include vp-mobile {
      margin: 0 0 25px;
    }
  }

  &__title {
    margin: 0;
    padding: 0;
    font-family: $ff-gilroy, sans-serif;
    font-weight: 900;
    font-size: 50px;
    line-height: 62px;

    @include vp-laptop {
      font-size: 35px;
      line-height: 44px;
    }

    @include vp-tablet {
      font-size: 40px;
      line-height: 50px;
      color: $color-raising-black;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 25px;
    }
  }

  &__link {
    position: relative;
    right: -30px;
    bottom: -2px;

    @include vp-laptop {
      right: -17px;
    }

    @include vp-tablet {
      position: absolute;
      bottom: 16px;
      left: calc(50% + 199px);
      width: 180px;
    }

    @include vp-mobile {
      bottom: 0;
      left: calc(50% + 97px);
      width: 87px;
    }
  }

  &__arrows {
    justify-content: space-between;
    align-items: center;
    display: none;
    margin: 0 0 77px;

    @include vp-tablet {
      display: flex;
    }

    @include vp-mobile {
      margin: 0 0 25px;
    }
  }

  &__list {
    width: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;

    @include vp-tablet {
      height: 769px;
    }

    @include vp-mobile {
      height: 503px;
    }
  }

  &__item:first-child {
    padding: 0;
    margin: 0;
    display: flex;

    @include vp-tablet {
      flex-direction: column;
      height: 100%;
      width: 100%;
      justify-content: start;
    }
  }

  &__item:not(:first-child) {
    @include vp-tablet {
      display: none;  
    }
  }
}

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

.instagram {
  position: relative;
  width: 100%;
  padding: 60px 0 53px;
  margin: 0;
  color: $color-black;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  overflow: hidden;

  @include vp-laptop {
    padding: 27px 0 32px;
  }

  @include vp-tablet {
    padding: 23px 0 200px;
  }

  @include vp-mobile {
    padding: 26px 0 127px;
  }

  &__title-wrapper {
    display: flex;
    align-items: center;
    gap: 57px;
    margin: 0 0 70px;

    @include vp-laptop {
      gap: 30px;
      margin: 0 0 52px;
    }

    @include vp-tablet {
      gap: 40px;
      margin: 0 0 91px;
      flex-direction: column;
      align-items: start;
    }

    @include vp-mobile {
      gap: 23px;
      margin: 0 0 43px;
    }
  }

  &__title {
    margin: 0;
    padding: 0;
    font-weight: 900;
    font-family: $ff-gilroy, sans-serif;
    font-size: 50px;
    line-height: 62px;

    @include vp-laptop {
      font-size: 35px;
      line-height: 44px;
    }

    @include vp-tablet {
      font-size: 40px;
      line-height: 50px;
      color: $color-raising-black;
    }

    @include vp-mobile {
      font-size: 20px;
      line-height: 16px;
    }
  }

  &__link {
    width: 86px;
    height: 86px;

    @include vp-laptop {
      width: 60px;
      height: 60px;
    }

    @include vp-tablet {
      width: 81px;
      height: 81px;
    }

    @include vp-mobile {
      width: 40px;
      height: 40px;
    }
  }

  &__content {
    width: 100%;
    height: 784px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @include vp-laptop {
      height: 554px;
    }

    @include vp-tablet {
      height: 389px;
    }

    @include vp-mobile {
      height: 183px;
    }
  }

  &__images {
    width: 700px;
    height: 100%;
    position: relative;

    @include vp-laptop {
      width: 500px;
    }

    @include vp-tablet {
      height: 813px;
      width: 458px;
      z-index: -1;
      left: calc(50% + 30px);
      top: -15px;
    }

    @include vp-mobile {
      width: 211px;
      height: 400px;
      left: calc(50% + 10px);
      top: 22px;
    }
  }

  &__back-image {
    width: 650px;
    height: 844px;
    position: absolute;
    left: 48px;
    bottom: 3px;

    @include vp-laptop {
      height: 569px;
      width: 317px;
      bottom: 29px;
      left: 1px;
    }

    @include vp-tablet {
      height: 813px;
      width: 458px;
      top: 0;
      left: 0;
    }

    @include vp-mobile {
      width: 211px;
      height: 400px;
    }
  }

  &__front-image {
    width: 350px;
    height: 733px;
    position: absolute;
    left: 240px;
    bottom: -45px;

    @include vp-laptop {
      width: 255px;
      height: 479px;
      left: 161px;
      bottom: -10px;
    }

    @include vp-tablet {
      display: none;
    }
  }

  &__gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
    gap: 20px;
    width: 1240px;
    position: absolute;
    left: 700px;
    bottom: 0;

    @include vp-laptop {
      width: 880px;
      left: 500px;
      gap: 15px 20px;
    }

    @include vp-tablet {
      gap: 20px;
      left: 0;
      min-width: 700px;
      width: calc(50% + 50vw);
      flex-wrap: nowrap;
    }

    @include vp-mobile {
      min-width: 320px;
    }
  }

  &__gallery-item {
    padding: 0;
    margin: 0;
    width: 400px;
    height: 382px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;

    @include vp-laptop {
      width: 280px;
      height: 270px;
      border-radius: 8px;
    }

    @include vp-tablet {
      width: 340px;
      height: 389px;
      border-radius: 10px;
    }

    @include vp-mobile {
      width: 160px;
      height: 183px;
    }

    &:nth-child(n + 4) {
      @include vp-tablet {
        display: none;
      }
    }
  }

  &__gallery-image {
    width: 100%;
    height: 100%;
  }

  &__button {
    position: relative;
    transform: translate(100%, -10px);

    @include vp-tablet {
      position: absolute;
      transform: unset;
      bottom: -115px;
      left: 0;
      rotate: -180deg;
    }

    @include vp-mobile {
      bottom: -62px;
    }
  }
}
</style>
