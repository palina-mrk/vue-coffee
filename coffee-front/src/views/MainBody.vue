<script setup>
import { useCatalogStore } from '../stores/catalog';
import { reactive } from 'vue';
const catalogStore = useCatalogStore();
import ProductCard from '../components/cards/ProductCard.vue';
import BgHome from '../components/backgrounds/BgHome.vue';
import SliderLarge from '../components/sliders/SliderLarge.vue';
import { storeToRefs } from "pinia";
import CatalogCard from '../components/cards/CatalogCard.vue';

const { catalog, isLoaded } = storeToRefs(catalogStore);
const catalogCards = reactive([
  {page: 'coffee', title: 'Свежеобжаренный кофе'},
  {page: 'tea', title: 'Чай и кофейные напитки'},
  {page: 'vending', title: 'Продукция для вендинга'},
  {page: 'healthy', title: 'Здоровое питание'}
])
</script>

<template>
  <main v-if="isLoaded">
    <section class="overview">
      <bg-home 
      :section="'overview'"
      ></bg-home>

      <div class="container">
        <div class="overview__hero-wrapper">
          <slider-large
            class="overview__slider"
            :count="3"
            :selected="1"
          ></slider-large>
          <h1 class="overview__hero-title">Свежеобжаренный кофе</h1>
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
          <router-link 
            class="overview__hero-button btn btn--size-xl" 
            :to="{ name: 'catalogs' }"
            >Посмотреть каталог</router-link
          >
        </div>
      </div>
      <div class="container">
        <div class="overview__catalogs-wrapper">
          <h2 
            class="overview__catalogs-title" 
            id="catalogs">
            Каталоги нашей продукции
          </h2>
          <ul class="overview__catalogs-list">
            <li
              v-for="catalogCard in catalogCards" 
              class="overview__catalogs-item">
              <CatalogCard 
              :page="catalogCard.page"
              :title="catalogCard.title"></CatalogCard>
            </li>
          </ul>
          <slider-large 
          class="overview__catalogs-slider"
          :count="4" 
          :selected="1"></slider-large>
        </div>
      </div>
      <div class="container">
        <div class="overview__products-wrapper">
          <h2 class="overview__products-title">Товары со&nbsp;скидкой</h2>
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
              aria-label="Пролистать к предыдущим карточкам"
            >
              <svg
                class="btn-icon__svg"
                width="27"
                height="16"
                aria-hidden="true"
              >
                <use xlink:href="../assets/btn-sprite.svg#arrow-back"></use>
              </svg>
            </button>
            <ul class="overview__products-list">
              <li class="overview__products-item">
                <ProductCard :product="catalog[0]"></ProductCard>
              </li>
              <li class="overview__products-item">
                <ProductCard :product="catalog[1]"></ProductCard>
              </li>
              <li class="overview__products-item">
                <ProductCard :product="catalog[2]"></ProductCard>
              </li>
            </ul>
            <button
              class="overview__products-next btn-icon btn-icon--arrow"
              type="button"
              aria-label="Пролистать к предыдущим карточкам"
            >
              <svg
                class="btn-icon__svg"
                width="27"
                height="16"
                aria-hidden="true"
              >
                <use
                  xlink:href="../assets/btn-sprite.svg#arrow-forward"
                ></use>
              </svg>
            </button>
          </div>
          <a
            class="overview__products-link btn-linked btn-linked--black"
            href="#"
            >Смотреть все</a
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
                srcset="../images/advantages/advantages-corns-laptop.png"
              />
              <img
                class="advantages__back-image"
                src="../images/advantages/advantages-corns-desktop.png"
                width="755"
                height="503"
                alt="Кофейные зёрна"
              />
            </picture>
            <picture>
              <source
                media="(max-width: 1903px)"
                srcset="../images/advantages/advantages-cup-laptop.png"
              />
              <img
                class="advantages__front-image"
                src="../images/advantages/advantages-cup-desktop.png"
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
                      xlink:href="../assets/advantages-sprite.svg#icon-cup"
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
                      xlink:href="../assets/advantages-sprite.svg#icon-mark"
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
                      xlink:href="../assets/advantages-sprite.svg#icon-consult"
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
          <a class="technology__button btn btn--size-xl" href="#"
            >Посмотреть каталог</a
          >
        </div>
      </div>
    </section>

    <section class="news">
      
      <bg-home :section="'news'"></bg-home>

      
      <div class="container">
        <div class="news__heading">
          <h2 class="news__title">Новости компании</h2>

          <a
            class="news__link btn-linked btn-linked--black btn-linked--size-m"
            href="#"
          >
            <span class="btn-linked__text">Читать все</span>
          </a>
        </div>

        <div class="news__arrows">
          <button
            class="news__arrow-btn btn-icon btn-icon--arrow-transparent"
            type="button"
            aria-label="Посмотреть предыдущую новость"
          >
            <svg
              class="btn-icon__svg"
              width="101"
              height="16"
              aria-hidden="true"
            >
              <use
                xlink:href="../assets/news-sprite.svg#icon-news-prev"
              ></use>
            </svg>
          </button>

          <button
            class="news__arrow-btn btn-icon btn-icon--arrow-transparent"
            type="button"
            aria-label="Посмотреть следующую новость"
          >
            <svg
              class="btn-icon__svg"
              width="101"
              height="16"
              aria-hidden="true"
            >
              <use
                xlink:href="../assets/news-sprite.svg#icon-news-next"
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
                    srcset="../images/news/card-image-mobile.png"
                  />
                  <source
                    media="(max-width: 1348px)"
                    srcset="../images/news/card-image-tablet.png"
                  />
                  <source
                    media="(max-width: 1903px)"
                    srcset="../images/news/card-image-laptop.png"
                  />
                  <img
                    class="news-card__image"
                    src="../images/news/card-image-desktop.png"
                    width="336"
                    height="400"
                    alt="Ссылка на главную страницу"
                  />
                </picture>
              </div>
              <div class="news-card__inner">
                <h3 class="news-card__title">
                  Танзанийский кофе. Откуда он&nbsp;взялся и&nbsp;почему
                  мы&nbsp;его так любим?
                </h3>
                <div class="news-card__content">
                  <p class="news-card__paragraph">
                    Танзания&nbsp;&mdash; красивая африканская страна. Именно
                    здесь расположены легендарные географические
                    объекты&nbsp;&mdash; вулкан Килиманджаро и&nbsp;озеро
                    Виктория.
                  </p>
                  <p class="news-card__paragraph">
                    Но&nbsp;наш интерес вызван не&nbsp;столько природными
                    красотами, сколько кофе...
                  </p>
                </div>
                <a class="news-card__link btn-linked" href="#">
                  <span class="btn-linked__text">Подробнее</span>
                  <svg
                    class="btn-linked__icon"
                    width="14"
                    height="12"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="../assets/btn-sprite.svg#arrow-for-link"
                    ></use>
                  </svg>
                </a>
              </div>
            </div>
          </li>

          <li class="news__item">
            <div class="news-card">
              <div class="news-card__inner">
                <h3 class="news-card__title">Африканский кофе Кения&nbsp;АА</h3>
                <div class="news-card__content">
                  <p class="news-card__paragraph">
                    Кения АА&nbsp;&mdash; у&nbsp;этого кофе, из&nbsp;африканской
                    страны, репутация одного из&nbsp;самых вкусных и&nbsp;ярких
                    сортов в&nbsp;мире. Многие обжарщики высоко оценивают
                    местные разновидности высокогорной арабики.
                  </p>
                </div>
                <a class="news-card__link btn-linked" href="#">
                  <span class="btn-linked__text">Подробнее</span>
                  <svg
                    class="btn-linked__icon"
                    width="14"
                    height="12"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="../assets/btn-sprite.svg#arrow-for-link"
                    ></use>
                  </svg>
                </a>
              </div>
            </div>
          </li>

          <li class="news__item">
            <div class="news-card">
              <div class="news-card__inner">
                <h3 class="news-card__title">Африканский кофе Кения&nbsp;АА</h3>
                <div class="news-card__content">
                  <p class="news-card__paragraph">
                    Кения АА&nbsp;&mdash; у&nbsp;этого кофе, из&nbsp;африканской
                    страны, репутация одного из&nbsp;самых вкусных и&nbsp;ярких
                    сортов в&nbsp;мире. Многие обжарщики высоко оценивают
                    местные разновидности высокогорной арабики.
                  </p>
                </div>
                <a class="news-card__link btn-linked" href="#">
                  <span class="btn-linked__text">Подробнее</span>
                  <svg
                    class="btn-linked__icon"
                    width="14"
                    height="12"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="../assets/btn-sprite.svg#arrow-for-link"
                    ></use>
                  </svg>
                </a>
              </div>
            </div>
          </li>

          <li class="news__item">
            <div class="news-card news-card--flat">
              <div class="news-card__image-wrapper">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcset="../images/news/card-image-mobile.png"
                  />
                  <source
                    media="(max-width: 1348px)"
                    srcset="../images/news/card-image-tablet.png"
                  />
                  <source
                    media="(max-width: 1903px)"
                    srcset="../images/news/card-image-laptop.png"
                  />
                  <img
                    class="news-card__image"
                    src="../images/news/card-image-desktop.png"
                    width="336"
                    height="400"
                    alt="Ссылка на главную страницу"
                  />
                </picture>
              </div>
              <div class="news-card__inner">
                <h3 class="news-card__title">
                  Танзанийский кофе. Откуда он&nbsp;взялся и&nbsp;почему
                  мы&nbsp;его так любим?
                </h3>
                <div class="news-card__content">
                  <p class="news-card__paragraph">
                    Танзания&nbsp;&mdash; красивая африканская страна. Именно
                    здесь расположены легендарные географические
                    объекты&nbsp;&mdash; вулкан Килиманджаро и&nbsp;озеро
                    Виктория.
                  </p>
                  <p class="news-card__paragraph">
                    Но&nbsp;наш интерес вызван не&nbsp;столько природными
                    красотами, сколько кофе...
                  </p>
                </div>
                <a class="news-card__link btn-linked" href="#">
                  <span class="btn-linked__text">Подробнее</span>
                  <svg
                    class="btn-linked__icon"
                    width="14"
                    height="12"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="../assets/btn-sprite.svg#arrow-for-link"
                    ></use>
                  </svg>
                </a>
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
          <h2 class="instagram__title"
            id="instagram"
          >Мы&nbsp;в&nbsp;Instagram</h2>
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
                xlink:href="../assets/instagram-sprite.svg#icon-instagram"
              ></use>
            </svg>
          </a>
        </div>
        <div class="instagram__content">
          <div class="instagram__images">
            <picture>
              <source
                media="(max-width: 767px)"
                srcset="../images/instagram/iphone-large-mobile.png"
              />
              <source
                media="(max-width: 1348px)"
                srcset="../images/instagram/iphone-large-tablet.png"
              />
              <source
                media="(max-width: 1903px)"
                srcset="../images/instagram/iphone-large-laptop.png"
              />
              <img
                class="instagram__back-image"
                src="../images/instagram/iphone-large-desktop.png"
                width="897"
                height="597"
                alt="Большой айфон"
              />
            </picture>
            <picture>
              <source
                media="(max-width: 1903px)"
                srcset="../images/instagram/iphone-small-laptop.png"
              />
              <img
                class="instagram__front-image"
                src="../images/instagram/iphone-small-desktop.png"
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
                  srcset="../images/instagram/gallery-tablet.png"
                />
                <source
                  media="(max-width: 1903px)"
                  srcset="../images/instagram/gallery-laptop.png"
                />
                <img
                  class="instagram__gallery-image"
                  src="../images/instagram/gallery-desktop.png"
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
                  srcset="../images/instagram/gallery-tablet.png"
                />
                <source
                  media="(max-width: 1903px)"
                  srcset="../images/instagram/gallery-laptop.png"
                />
                <img
                  class="instagram__gallery-image"
                  src="../images/instagram/gallery-desktop.png"
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
                  srcset="../images/instagram/gallery-tablet.png"
                />
                <source
                  media="(max-width: 1903px)"
                  srcset="../images/instagram/gallery-laptop.png"
                />
                <img
                  class="instagram__gallery-image"
                  src="../images/instagram/gallery-desktop.png"
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
                  srcset="../images/instagram/gallery-tablet.png"
                />
                <source
                  media="(max-width: 1903px)"
                  srcset="../images/instagram/gallery-laptop.png"
                />
                <img
                  class="instagram__gallery-image"
                  src="../images/instagram/gallery-desktop.png"
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
                  srcset="../images/instagram/gallery-tablet.png"
                />
                <source
                  media="(max-width: 1903px)"
                  srcset="../images/instagram/gallery-laptop.png"
                />
                <img
                  class="instagram__gallery-image"
                  src="../images/instagram/gallery-desktop.png"
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
                  srcset="../images/instagram/gallery-tablet.png"
                />
                <source
                  media="(max-width: 1903px)"
                  srcset="../images/instagram/gallery-laptop.png"
                />
                <img
                  class="instagram__gallery-image"
                  src="../images/instagram/gallery-desktop.png"
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
              <use xlink:href="../assets/btn-sprite.svg#arrow-forward"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/_socials.scss";
@import "@/scss/blocks/_overview.scss";
@import "@/scss/blocks/_advantages.scss";
@import "@/scss/blocks/_news-card.scss";
@import "@/scss/blocks/_news.scss";
@import "@/scss/blocks/_technology.scss";
@import "@/scss/blocks/_instagram.scss";
* {
  font-family: $ff-gilroy;
}
</style>
