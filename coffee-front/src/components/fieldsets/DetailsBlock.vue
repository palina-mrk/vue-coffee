<script setup>
import { reactive } from "vue";
import FieldsetWords from "./FieldsetWords.vue";

const fieldsetProps = reactive({
  geography: {
    name: "geography",
    legend: "География",
    labels: [
      "Африка",
      "Йемен",
      "Уганда",
      "Эфиопия",
      "Азия",
      "Европа",
      "Сев. Америка",
      "Центр. Америка",
      "Лат. Америка",
    ],
    values: [
      "afrca",
      "yemen",
      "uganda",
      "ethiopia",
      "asia",
      "europe",
      "north-america",
      "center-america",
      "latin-america",
    ],
    fieldsCount: 9,
  },
  acidity: {
    name: "acidity",
    legend: "Кислинка",
    labels: ["Низкая", "Средняя", "Высокая"],
    values: ["low", "middle", "high"],
    fieldsCount: 3,
  },
  processing: {
    name: "processing",
    legend: "Способ обработки",
    labels: ["Сухая", "Мытая", "Прочие"],
    values: ["dry", "washed", "others"],
    fieldsCount: 3,
  },
  actions: {
    name: "actions",
    legend: "Особые",
    labels: [
      "Популярное",
      "Новый урожай",
      "Ваш выбор",
      "Микролот",
      "Сорт недели",
      "Скидки",
      "Новинка",
    ],
    values: [
      "popular",
      "new-harvest",
      "your-choise",
      "microlot",
      "weekly-variety",
      "sales",
      "new-product",
    ],
    fieldsCount: 7,
  },
  kind: {
    name: "kind",
    legend: "Вид кофе",
    labels: ["Арабика", "Робуста", "Смесь арабик", "Смесь арабика/робуста"],
    values: ["arabica", "robusta", "arabica-blend", "arabica-robusta-blend"],
    fieldsCount: 4,
  },
});

/*const selectedValues = reactive({
  'geography': {},
  'acidity':{},
  'processing':{},
  'actions': {},
  'kind': {},
})

function updateValue(object, value) {
  if(object[value]) 
    delete object[value];
  else 
    object[value] = true;
}*/
</script>

<template>
  <div class="form-block">
    <fieldset-words
      v-for="prop in Object.values(fieldsetProps)"
      :name="'coffee-' + prop.name"
      :legend="prop.legend"
      :labels="prop.labels"
      :values="prop.labels"
      :fieldsCount="prop.fieldsCount"
      @toggle-value="$emit('toggle-value', { name: prop.name, value: $event })"
      class="form-block__group"
    ></fieldset-words>
  </div>
</template>

<style lang="scss" scoped>
.form-block {
  background-color: $color-white;
  border-radius: 20px;
  box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
  position: relative;
  font-family: $ff-gilroy, sans-serif;
  width: calc(100% - 420px);
  padding: 82px 135px 35px 95px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 23px 0;

  @include vp-laptop {
    box-shadow: 0 0 21px 0 $color-spanish-gray-c95-25;
    padding: 56px 73px 25px 67px;
    width: calc(100% - 300px);
    border-radius: 14px;
    gap: 15px 0;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 61px 0px $color-spanish-gray-c95-25;
    padding: 107px 55px 45px 44px;
    width: 700px;
    height: 1200px;
    flex-direction: column;
    border-radius: 20px;
    gap: 77px 100px;
    margin: 0 0 20px;
  }

  @include vp-mobile {
    box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
    padding: 50px 26px 31px 20px;
    width: 340px;
    height: 588px;
    gap: 33px 48px;
    margin: 0 0 10px;
    border-radius: 10px;
  }

  &::before {
    content: "";
    background-color: $color-ucla-gold;
    border-radius: 10px;
    height: 15px;
    left: 87px;
    right: 65px;
    top: 36px;
    position: absolute;

    @include vp-laptop {
      border-radius: 7px;
      height: 10px;
      left: 60px;
      right: 50px;
      top: 25px;
    }

    @include vp-tablet {
      left: 33px;
      right: 33px;
      height: 20px;
      border-radius: 20px;
      top: 40px;
    }

    @include vp-mobile {
      height: 10px;
      left: 15px;
      right: 15px;
      top: 20px;
      border-radius: 10px;
    }
  }

  &__group:first-of-type {
    margin: 0 40px 0 0;

    @include vp-laptop {
      margin: 0 20px 0 0;
    }

    @include vp-tablet {
      order: -2;
      margin: 0;
    }
  }

  &__group:nth-of-type(2),
  &__group:nth-of-type(3) {
    order: -1;
    margin: 0 20px 0 0;

    @include vp-laptop {
      margin: 0 47px 0 0;
    }

    @include vp-tablet {
      order: unset;
      margin: 0;
    }
  }

  &__group:nth-of-type(4) {
    @include vp-tablet {
      order: -1;
      margin: 0;
    }
  }

  &__group:last-of-type {
    margin: 0 0 0 78px;

    @include vp-laptop {
      margin: 0 0 0 25px;
    }

    @include vp-tablet {
      margin: 0;
    }
  }
}
</style>
