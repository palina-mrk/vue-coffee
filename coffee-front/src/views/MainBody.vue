<script setup>
import { useCoffeeStore } from '../stores/coffee';
import { computed, ref, reactive } from 'vue';
const catalogStore = useCoffeeStore();
import ProductCard from '../components/cards/ProductCard.vue';
import { storeToRefs } from "pinia";

const { catalog, isLoaded } = storeToRefs(catalogStore);

</script>

<template>
  <main v-if="isLoaded">
    <section class="overview">
      <svg
        class="background__svg-puddle background__svg-puddle--right"
        width="1453"
        height="1750"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-puddle-right"
        ></use>
      </svg>

      <svg
        class="background__svg-puddle background__svg-puddle--left"
        width="1230"
        height="1380"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-puddle-left"
        ></use>
      </svg>
      <svg
        class="background__svg-puddle background__svg-puddle--left-for-laptop"
        width="819"
        height="934"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-puddle-left-for-laptop"
        ></use>
      </svg>

      <picture>
        <source
          media="(max-width: 767px)"
          srcset="../images/background/bg-heading-corns-mobile.png"
        />
        <source
          media="(max-width: 1348px)"
          srcset="../images/background/bg-heading-corns-tablet.png"
        />
        <source
          media="(max-width: 1903px)"
          srcset="../images/background/bg-heading-corns-laptop.png"
        />
        <img
          class="background__img background__img--heading-corns"
          src="../images/background/bg-heading-corns-desktop.png"
          width="900"
          height="773"
          alt="Зёрна кофе под чашкой"
        />
      </picture>

      <picture>
        <source
          media="(max-width: 767px)"
          srcset="../images/background/bg-corns-left-mobile.png"
        />
        <source
          media="(max-width: 1348px)"
          srcset="../images/background/bg-corns-left-tablet.png"
        />
        <source
          media="(max-width: 1903px)"
          srcset="../images/background/bg-corns-left-laptop.png"
        />
        <img
          class="background__img background__img--left-corns"
          src="../images/background/bg-corns-left-desktop.png"
          width="360"
          height="694"
          alt="Зёрна кофе слева"
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
          class="background__img background__img--cup"
          src="../images/background/bg-heading-cup-desktop.png"
          width="744"
          height="496"
          alt="Чашка кофе"
        />
      </picture>

      <div class="background__div background__div--cup-shadow"></div>

      <svg
        class="background__svg-vawe background__svg-vawe--overview"
        width="2627"
        height="288"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-overview-vawe"
        ></use>
      </svg>

      <svg
        class="background__svg-vawe-for-tablet background__svg-vawe--overview"
        width="1348"
        height="216"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-overview-vawe-for-tablet"
        ></use>
      </svg>

      <div class="container">
        <div class="overview__hero-wrapper">
          <ul class="overview__slider slider-large">
            <li class="slider-large__point slider-large__point--brown"></li>
            <li class="slider-large__point"></li>
            <li class="slider-large__point"></li>
          </ul>
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
          <a class="overview__hero-button btn btn--size-xl" href="#"
            >Посмотреть каталог</a
          >
        </div>
      </div>
      <div class="container">
        <div class="overview__catalogs-wrapper">
          <h2 class="overview__catalogs-title" id="catalogs-overview">
            Каталоги нашей продукции
          </h2>
          <ul class="overview__catalogs-list">
            <li class="overview__catalogs-item">
              <div class="catalog-card">
                <div class="catalog-card__image-wrapper">
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcset="../images/catalog-card/catalog-coffee-mobile.png"
                    />
                    <source
                      media="(max-width: 1348px)"
                      srcset="../images/catalog-card/catalog-coffee-tablet.png"
                    />
                    <source
                      media="(max-width: 1903px)"
                      srcset="../images/catalog-card/catalog-coffee-laptop.png"
                    />
                    <img
                      class="catalog-card__image"
                      src="../images/catalog-card/catalog-coffee-desktop.png"
                      width="295"
                      height="212"
                      alt="Карточка каталога кофе"
                    />
                  </picture>
                </div>
                <h3 class="catalog-card__title">Свежеобжаренный кофе</h3>
                <a class="catalog-card__button btn btn--size-m" href="#"
                  >Купить</a
                >
              </div>
            </li>
            <li>
              <div class="catalog-card">
                <div class="catalog-card__image-wrapper">
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcset="../images/catalog-card/catalog-tea-mobile.png"
                    />
                    <source
                      media="(max-width: 1348px)"
                      srcset="../images/catalog-card/catalog-tea-tablet.png"
                    />
                    <source
                      media="(max-width: 1903px)"
                      srcset="../images/catalog-card/catalog-tea-laptop.png"
                    />
                    <img
                      class="catalog-card__image"
                      src="../images/catalog-card/catalog-tea-desktop.png"
                      width="260"
                      height="116"
                      alt="Карточка каталога чая"
                    />
                  </picture>
                </div>
                <h3 class="catalog-card__title">Чай и&nbsp;кофейные напитки</h3>
                <a class="catalog-card__button btn btn--size-m" href="#"
                  >Купить</a
                >
              </div>
            </li>
            <li>
              <div class="catalog-card">
                <div class="catalog-card__image-wrapper">
                  <picture>
                    <source
                      media="(max-width: 1903px)"
                      srcset="../images/catalog-card/catalog-vending-laptop.png"
                    />
                    <img
                      class="catalog-card__image"
                      src="../images/catalog-card/catalog-vending-desktop.png"
                      width="276"
                      height="253"
                      alt="Карточка каталога вендинга"
                    />
                  </picture>
                </div>
                <h3 class="catalog-card__title">Продукция для вендинга</h3>
                <a class="catalog-card__button btn btn--size-m" href="#"
                  >Купить</a
                >
              </div>
            </li>
            <li>
              <div class="catalog-card">
                <div class="catalog-card__image-wrapper">
                  <picture>
                    <source
                      media="(max-width: 1903px)"
                      srcset="../images/catalog-card/catalog-healthy-laptop.png"
                    />
                    <img
                      class="catalog-card__image"
                      src="../images/catalog-card/catalog-healthy-desktop.png"
                      width="266"
                      height="186"
                      alt="Карточка каталога кофе"
                    />
                  </picture>
                </div>
                <h3 class="catalog-card__title">Здоровое питание</h3>
                <a class="catalog-card__button btn btn--size-m" href="#"
                  >Купить</a
                >
              </div>
            </li>
          </ul>
          <ul class="overview__catalogs-slider slider-large">
            <li class="slider-large__point slider-large__point--brown"></li>
            <li class="slider-large__point"></li>
            <li class="slider-large__point"></li>
            <li class="slider-large__point"></li>
          </ul>
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
      <svg
        class="background__svg-vawe background__svg-vawe--advantages"
        width="3720"
        height="400"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-advantages-vawe"
        ></use>
      </svg>

      <svg
        class="background__svg-vawe-for-tablet background__svg-vawe--advantages"
        width="1348"
        height="216"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-advantages-vawe-for-tablet"
        ></use>
      </svg>

      <div class="background__div background__div--advantages-wall"></div>

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
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="../images/background/bg-coffeemachine-mobile.png"
        />
        <source
          media="(max-width: 1348px)"
          srcset="../images/background/bg-coffeemachine-tablet.png"
        />
        <img
          class="background__img background__img--technology"
          src="../images/background/bg-coffeemachine.png"
          width="900"
          height="773"
          alt="Машина для перемолки кофе"
        />
      </picture>

      <div class="background__div background__div--technology-shadow"></div>

      <svg
        class="background__svg-vawe background__svg-vawe--technology-first"
        width="2627"
        height="288"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-technology-first-vawe"
        ></use>
      </svg>

      <svg
        class="background__svg-vawe-for-tablet background__svg-vawe--technology-first"
        width="1348"
        height="236"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-technology-first-vawe-for-tablet"
        ></use>
      </svg>

      <svg
        class="background__svg-vawe background__svg-vawe--technology-second"
        width="3298"
        height="298"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-technology-second-vawe"
        ></use>
      </svg>

      <svg
        class="background__svg-vawe-for-tablet background__svg-vawe--technology-second"
        width="1348"
        height="138"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-technology-second-vawe-for-tablet"
        ></use>
      </svg>

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
      <svg
        class="background__svg-vawe background__svg-vawe--news"
        width="2627"
        height="288"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-news-vawe"
        ></use>
      </svg>

      <div class="background__div background__div--news-wall"></div>

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
      <div class="background__div background__div--instagram-top-wall"></div>

      <svg
        class="background__svg-vawe background__svg-vawe--instagram"
        width="2627"
        height="288"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-instagram-ellipse"
        ></use>
      </svg>

      <svg
        class="background__svg-vawe-for-tablet background__svg-vawe--instagram"
        width="2627"
        height="288"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-instagram-ellipse-for-tablet"
        ></use>
      </svg>

      <div class="background__div background__div--instagram-bottom-wall"></div>

      <svg
        class="background__svg-vawe-for-tablet background__svg-vawe--instagram-bottom"
        width="2627"
        height="288"
        aria-hidden="true"
      >
        <use
          xlink:href="../assets/bg-sprite.svg#bg-instagram-bottom-vawe-for-tablet"
        ></use>
      </svg>

      <div class="container">
        <div class="instagram__title-wrapper">
          <h2 class="instagram__title">Мы&nbsp;в&nbsp;Instagram</h2>
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
@import "@/scss/blocks/_background.scss";
@import "@/scss/blocks/_socials.scss";
@import "@/scss/blocks/_overview.scss";
@import "@/scss/blocks/_advantages.scss";
@import "@/scss/blocks/_news-card.scss";
@import "@/scss/blocks/_news.scss";
@import "@/scss/blocks/_technology.scss";
@import "@/scss/blocks/_instagram.scss";
@import "@/scss/blocks/_catalog-card.scss";
@import "@/scss/blocks/_slider-large.scss";
* {
  font-family: $ff-gilroy;
}
</style>
