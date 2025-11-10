<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();
import { computed, reactive } from "vue";

const category = computed(() =>
  catalogStore.isLoaded
    ? catalogStore.getFullInfo(Number(route.params.productID)).category
    : "",
);

const textVariants = reactive({
  coffee: [
    "Существует множество видов кофе, каждый из которых обладает уникальным вкусом и ароматом. Самые распространенные сорта включают арабику и робусту. Арабика известна своим мягким вкусом и низкой кислотностью, тогда как робуста имеет более сильный вкус и высокое содержание кофеина.",
    "Кофе оказывает положительное влияние на организм, повышая уровень энергии и улучшая концентрацию внимания. Однако чрезмерное употребление может привести к негативным последствиям, таким как бессонница, нервозность и повышение артериального давления.",
    "Во многих странах существуют особые ритуалы приготовления и подачи кофе. Например, в Италии эспрессо подается в маленьких чашечках, а в Турции традиционный кофе варится в джезве и подается с кусочком рахат-лукума.",
    "Таким образом, кофе является не просто напитком, а частью культуры и традиций разных народов мира.",
  ],
  tea: [
    "Чай появился в Китае около пяти тысяч лет назад. Согласно легенде, император Шэнь Нун открыл чай случайно, когда листья дикого растения упали в кипяток. С тех пор чай стал неотъемлемой частью китайской культуры и постепенно распространился по всей Азии и Европе.",
    "Чай полезен для здоровья благодаря высокому содержанию антиоксидантов, витаминов и минералов. Регулярное потребление чая способствует улучшению пищеварения, укреплению иммунитета и снижению риска сердечно-сосудистых заболеваний.",
    "В каждой культуре существует своя традиция чаепития. Например, японская чайная церемония представляет собой сложный ритуал, направленный на достижение гармонии и спокойствия. Англичане предпочитают пить чай с молоком и сахаром, часто сопровождая его выпечкой или закусками.",
    "Таким образом, чай — это не просто напиток, а символ истории, культуры и традиций, объединяющий миллионы людей по всему миру.",
  ],
  vending: [
    "Продукция для вендинга включает товары, предназначенные для продажи через торговые автоматы. Это удобно для покупателей, поскольку позволяет приобретать необходимые продукты быстро и круглосуточно. Ассортимент продукции зависит от типа автомата и потребностей целевой аудитории.",
    "Самой распространенной категорией продукции для вендинга являются напитки: газированные воды, соки, кофе, чай и энергетические напитки. Торговые автоматы оснащены системами охлаждения и подогрева, что обеспечивает комфортное потребление напитка независимо от сезона.",
    "Одним из главных преимуществ продукции для вендинга является доступность в любое время суток. Автоматизация процесса покупки сокращает затраты на персонал и аренду помещений, делая бизнес прибыльным и эффективным. Для покупателей использование торгового автомата экономит время и усилия, позволяя приобрести нужный товар буквально за считанные секунды.",
    "Таким образом, продукция для вендинга играет важную роль в современной экономике, удовлетворяя потребности населения в удобстве и быстроте приобретения необходимых товаров.",
  ],
  healthy: [
    "Современные тенденции здорового образа жизни стимулируют рост рынка специализированных смесей, разработанных промышленным путем специально для улучшения рациона и укрепления здоровья. Такие смеси представляют собой сбалансированный комплекс питательных элементов, обеспечивающих организм необходимым количеством белков, жиров, углеводов, витаминов и минералов.",
    "Производители используют передовые технологии переработки сырья, позволяющие сохранять максимальное количество полезных компонентов. Основой большинства смесей выступают растительные ингредиенты: семена, злаки, бобовые, орехи и сухофрукты. Часто добавляют протеины растительного происхождения (например, гороховый или конопляный), а также экстракты трав и специй.",
    "Смеси обогащают различными биологически активными веществами, такими как пробиотики, пребиотики, антиоксиданты и ферменты, способствующие лучшему усвоению питательных веществ и поддержанию микрофлоры кишечника.",
    "Благодаря своей эффективности и простоте применения промышленные смеси завоевывают популярность среди приверженцев здорового образа жизни, предлагая удобный и эффективный способ обогатить рацион ценными компонентами.",
  ],
});
</script>

<template>
  <div
    v-if="catalogStore.isLoaded"
    :class="['article', 'article--' + category]"
  >
    <div class="article__image-wrapper">
      <picture class="article-wrapper__picture">
        <source
          media="(max-width: 1904px)"
          :srcset="`../../src/images/${category}-view/secondary-${category}-laptop.png`"
        />
        <img
          :src="`../../src/images/${category}-view/secondary-${category}-desktop.png`"
          width="397"
          height="418"
          alt="Превью сырья"
        />
      </picture>
    </div>

    <p class="article__paragraph" v-for="paragraph in textVariants[category]">
      {{ paragraph }}
    </p>

    <div class="article__image-wrapper article__image-wrapper--tablet">
      <picture class="article__picture">
        <source
          media="(max-width: 768px)"
          :srcset="`../../src/images/${category}-view/secondary-${category}-mobile.png`"
        />
        <img
          :src="`../../src/images/${category}-view/secondary-${category}-tablet.png`"
          width="700"
          height="348"
          alt="Превью сырья"
        />
      </picture>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article {
  height: fit-content;
  overflow: hidden;

  &__image-wrapper {
    float: right;
    border-radius: 20px;
    margin: 0 0 60px 160px;
    overflow: hidden;
    width: 397px;
    height: 418px;
    display: flex;

    @include vp-laptop {
      border-radius: 14px;
      margin: 0 0 40px 121px;
      width: 280px;
      height: 296px;
    }

    @include vp-tablet {
      display: none;
      width: 100%;
      margin: 0;
      height: 348px;
      border-radius: 20px;
    }

    @include vp-mobile {
      height: 170px;
      border-radius: 10px;
    }
  }

  &__image-wrapper--tablet {
    display: none;

    @include vp-tablet {
      float: unset;
      display: flex;
      width: 100%;
      margin: 0;
      height: 348px;
      border-radius: 10px;
    }

    @include vp-mobile {
      height: 170px;
    }
  }

  &__paragraph {
    font-family: $ff-gilroy, sans-serif;
    color: $color-raising-black;
    font-weight: 500;
    font-size: 25px;
    line-height: 32px;
    padding: 0;
    margin: 0 0 30px;
    text-indent: 64px;

    @include vp-laptop {
      font-size: 18px;
      line-height: 23px;
      margin: 0 0 20px;
      text-indent: 48px;
    }

    @include vp-tablet {
      font-size: 20px;
      line-height: 26px;
      margin: 0 0 15px;
      text-indent: 45px;
    }

    @include vp-mobile {
      font-size: 14px;
      line-height: 18px;
      margin: 0 0 10px;
      text-indent: 24px;
    }
  }

  &__paragraph:last-of-type {
    margin: 0;

    @include vp-tablet {
      margin: 0 0 30px;
    }

    @include vp-mobile {
      margin: 0 0 20px;
    }
  }
}

.article--healthy {
  .article {
    &__image-wrapper {
      width: 307px;
      height: 409px;
      padding: 0 90px 0 0;
      justify-content: start;

      @include vp-laptop {
        width: 205px;
        height: 282px;
        padding: 0 50px 0 0;
      }

      @include vp-tablet {
        width: 100%;
        height: 348px;
        padding: 0;
      }

      @include vp-mobile {
        height: 170px;
      }
    }
  }
}
</style>
