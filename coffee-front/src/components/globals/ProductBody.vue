<script setup>
import BgProduct from "../backgrounds/BgProduct.vue";
import TasteCard from "../cards/TasteCard.vue";
import DetailsCard from "../cards/DetailsCard.vue";
import CustomBreadcrumbs from "../navigation/CustomBreadcrumbs.vue";
import ProductLarge from "../cards/ProductLarge.vue";
import AnchorToggle from "../navigation/AnchorToggle.vue";
import RawDescription from "../articles/RawDescription.vue";
import PreparationBlock from "../toggles/PreparationBlock.vue";
import CookingBlock from "../articles/CookingBlock.vue";

import { useRoute } from "vue-router";
const route = useRoute();

import { useCatalogStore } from "../../stores/catalog";
const catalogStore = useCatalogStore();
import { computed, ref, reactive } from 'vue';

const category = computed(() => catalogStore.isLoaded ? catalogStore.getFullInfo(Number(route.params.productID)).category : "");


const anchorObjects = ref([
  {
    link: "product-description",
    label: "Описание"
  },
  {
    link: "product-cooking",
    label: "Как готовить?"
  },
  {
    link: "product-description",
    label: "Дополнительно"
  },
  {
    link: "product-description",
    label: "Отзывы"
  }
])

const cookingWay = ref("");

const cookingCoffee = reactive({
  "Турка": 
  {
    'title': "Как сварить кофе в турке",
    'paragraph': "Для приготовления кофе в турке необходимо мелко смолотый кофе залить холодной водой и поставить на слабый огонь. Когда пенка начнет подниматься, снимите турку с огня, дождитесь оседания пенки и повторите процедуру два-три раза. Готовый напиток процедите и подавайте горячим."
  },
  "Френч-пресс": 
  {
    'title': "Как приготовить кофе во френч-прессе",
    'paragraph': "Засыпьте грубого помола кофе в френч-пресс, залейте горячей водой (около 95°C) и оставьте настояться 4-5 минут. Затем медленно опустите поршень, отделяя гущу от жидкости. Подавайте сразу же, пока кофе горячий."
  },
  "Мока": {
    'title': "Как приготовить кофе во моке",
    'paragraph':"Налейте холодную воду в нижнюю камеру моки, засыпьте молотый кофе средней обжарки в фильтр, закрутите верхнюю часть и поставьте на средний огонь. Дождитесь, пока вся вода перейдет в верхний резервуар, снимите с огня и подавайте."
  },
  "Эспрессо": {
    'title': "Как приготовить эспрессо",
    'paragraph': "Используя кофемашину эспрессо, утрамбуйте свежемолотый кофе среднего помола в портафильтре, установите его в группу и включите пролив. Эспрессо должен течь тонкой струйкой в течение 25-30 секунд, образуя густой крем сверху."
  },
  "Воронка": {
    'title': "Как приготовить кофе при помощи воронки",
    'paragraph': "Поместите бумажный фильтр в воронку, насыпьте туда средне-мелкого помола кофе и залейте небольшим количеством горячей воды (около 95°C), чтобы кофе пропитался. Постепенно добавьте оставшуюся воду, давая напитку равномерно стекать в емкость внизу."
  },
  "Аэропресс": {
    'title': "Как приготовить кофе в аэропрессе",
    'paragraph': "Нагрейте воду до температуры около 95°C, поместите фильтрованный кофе мелкого помола в аэропресс, залейте водой и размешайте. Через минуту аккуратно нажмите на поршень, выдавливая готовый кофе в кружку."
  },
  "Чашка": {
    'title': "Как приготовить молотый кофе в чашке",
    'paragraph': "Самый простой способ — положить ложку молотого кофе в теплую чашку, добавить кипятка и перемешать. Оставьте настояться пару минут, чтобы осела гуща, и пейте осторожно, стараясь избегать попадания осадка."},
  "Автомат": {
    'title': "Как приготовить кофе в автомате",
    'paragraph':"Современные автоматические кофемашины позволяют приготовить разнообразные виды кофе одним нажатием кнопки. Просто выберите нужный рецепт, машина сама перемелет зерна, сварит кофе и нальет его в вашу чашку."
  }
});

const cookingText = reactive({
  'tea': "Приготовление чая — процесс простой, но требующий внимания к деталям. Начните с выбора качественного чайного листа, будь то черный, зеленый, белый или улун. Затем вскипятите воду, но дайте ей немного остыть перед завариванием, особенно если речь идет о зеленом чае, который лучше раскрывается при температуре около 80 градусов Цельсия. Черный чай, напротив, предпочитает горячую воду температурой примерно 95 градусов. Заваривайте чай в предварительно прогретом чайнике или чашке, чтобы сохранить тепло и аромат напитка. Время заварки зависит от сорта чая: зеленый чай обычно настаивают 1-2 минуты, черный — 3-5 минут. После этого наслаждайтесь свежезаваренным чаем, возможно добавив лимон, молоко или сахар по вкусу.",
  'healthy': "Приготовление сухих продуктов здорового питания, таких как протеиновые смеси и толокняные каши, начинается с подбора качественных ингредиентов. Для протеиновых смесей используют изолят сывороточного белка, казеин или растительные белки (например, гороховый или конопляный). Эти компоненты смешивают с витаминами, минералами и натуральными подсластителями, такими как стевия или эритрит. Толокняные каши готовят из овса, гречихи или ржи, измельченных до состояния муки, которую обогащают льняным семенем, орехами и сушеными ягодами. Все ингредиенты тщательно просеивают и перемешивают до однородности. Полученные смеси фасуют в вакуумные упаковки, обеспечивающие сохранность полезных веществ и длительный срок хранения. Такие продукты удобны в применении, легко готовятся добавлением горячей воды и подходят для быстрого перекуса или полноценного приема пищи.",
  'vending': "Приготовление сухих напитков для вендинга включает несколько ключевых этапов. Во-первых, сырье должно быть качественным и соответствующим стандартам пищевой промышленности. Кофе, какао-порошок, сахар и прочие ингредиенты проходят тщательную проверку на содержание влаги, кислотность и однородность смеси. Далее компоненты смешиваются в строгих пропорциях, учитывая предпочтения целевой аудитории и особенности оборудования. Смеси упаковываются в герметичные пакеты или капсулы, защищающие продукт от воздействия внешней среды. Особое внимание уделяется контролю веса каждой порции, чтобы обеспечить равномерность приготовления конечного продукта в автоматах. Готовые смеси тестируются на растворимость, цвет и вкус, гарантируя стабильное качество каждого выпуска."
});
</script>

<template>
  <main>
    
    <section class="product-hero">
      <bg-product :place="'top'"></bg-product>

      <div class="container">
        <div class="product-hero__wrapper">
          <custom-breadcrumbs
            class="product-hero__breadcrumbs-list"
          ></custom-breadcrumbs>
          <h1 class="visually-hidden">Карточка товара </h1>
          <product-large 
          class="product-hero__product-card"
          id="product-description"></product-large>
          <anchor-toggle 
          class="product-hero__anchor-toggle"
          :anchorObjects="anchorObjects"></anchor-toggle>
          <div class="product-hero__coffee-addings" v-if="category == 'coffee'">
            <taste-card class="product-hero__coffee-taste"></taste-card>

            <details-card class="product-hero__coffee-details"></details-card>
          </div>
          <raw-description
          class="product-hero__raw-description"
          ></raw-description>
        </div>
      </div>
    </section>

    <section class="product-cooking">
      <bg-product :place="'middle'"></bg-product>

      <div class="container">
        <cooking-block id="product-cooking"></cooking-block>
      </div>
    </section>
    
  </main>
</template>

<style lang="scss" scoped>
#product-description {
  scroll-margin-top: 200px;
}

#product-cooking {
  scroll-margin-top: 180px;

  @include vp-laptop {
    scroll-margin-top: 145px;  
  }

  @include vp-tablet {
    scroll-margin-top: 173px;  
  }

  @include vp-laptop {
    scroll-margin-top: 100px;  
  }
}

.product-hero {
  position: relative;
  width: 100%;
  padding: 201px 0 67px;
  font-family: $ff-gilroy, sans-serif;
  font-weight: 500;
  overflow: hidden;
  border-bottom: 1px solid $color-philippine-silver;

  @include vp-laptop {
    padding: 145px 0 20px;
  }

  @include vp-tablet {
    padding: 173px 0 70px;
    border-bottom: 2px solid $color-philippine-silver;
  }

  @include vp-mobile {
    padding: 100px 0 50px;
    border-bottom: 1px solid $color-philippine-silver;
  }

  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 37px;
    margin: 0 0 25px;

    @include vp-laptop {
      gap: 30px;
      margin: 0 0 20px;
    }

    @include vp-tablet {
      gap: 56px;
      margin: 0 0 30px;
    }

    @include vp-mobile {
      gap: 13px;
      margin: 0 0 30px;
    }
  }

  &__breadcrumbs-list {
    margin: 0;
  }

  &__product-card {
    margin: 0 0 61px;

    @include vp-laptop {
      margin: 0 0 28px;      
    }

    @include vp-tablet {
      margin: 0 0 13px;
    }

    @include vp-mobile {
      margin: 0 0 28px;
    }
  }

  &__anchor-toggle {
    width: 100%;
    margin: 0 0 61px;
    
    @include vp-laptop {
      margin: 0 0 38px;      
    }

    @include vp-tablet {
      margin: 0 0 35px;
    }

    @include vp-mobile {
      margin: 0 0 18px;
    }
  }

  &__coffee-addings {
    width: 100%;
    display: flex;
    gap: 20px;
    margin: 0 0 61px;

    @include vp-laptop {
      margin: 0 0 38px;      
    }

    @include vp-tablet {
      flex-direction: column;
      margin: 0 0 35px;
    }

    @include vp-mobile {
      gap: 9px;
      margin: 0 0 18px;
    }
  }

  &__coffee-taste {
    width: 400px;

    @include vp-laptop {
      width: 280px;
    }

    @include vp-tablet {
      width: 100%;
    }
  }

  &__coffee-details {
    width: calc(100% - 421px);

    @include vp-laptop {
    width: calc(100% - 301px);
    }

    @include vp-tablet {
      width: 100%;
    }
  }
}

.product-cooking {
  position: relative;
  width: 100%;
  padding: 50px 0 100px;
  overflow: hidden;
  border-bottom: 1px solid $color-philippine-silver;

  @include vp-laptop {
    padding: 40px 0 80px;
  }

  @include vp-tablet {
    border-bottom: 2px solid $color-philippine-silver;
  }

  @include vp-mobile {
    padding: 30px 0;
    border-bottom: 1px solid $color-philippine-silver;
  }
}
</style>
