<script setup>
import { ref } from "vue";
import SliderCorns from "../sliders/SliderCorns.vue";
defineProps(["maxDegree"]);

const degrees = ref([]);
</script>

<template>
  <div class="form-block">
    <fieldset class="form-block__group">
      <legend class="form-block__groupname">Степень обжарки</legend>
      <!-- у группы чексбоксов д.б. одинаковый name и v-model -->
      <div
        class="custom-checkbox-corns"
        v-for="degree in maxDegree"
        :key="'roasting-degree-' + (maxDegree + 1 - degree)"
      >
        <input
          class="custom-checkbox-corns__field visually-hidden"
          :id="`coffee-roasting-${maxDegree + 1 - degree}`"
          type="checkbox"
          name="coffee-roasting"
          :value="maxDegree + 1 - degree"
          v-model="degrees"
          @input="$emit('toggle-value', $event.target.value)"
        />
        <label
          class="custom-checkbox-corns__label"
          :for="`coffee-roasting-${maxDegree + 1 - degree}`"
        >
          <slider-corns
            class="slider-corns--label"
            :count="maxDegree + 1 - degree"
          ></slider-corns>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<style lang="scss" scoped>
.custom-checkbox-corns {
  &__label {
    position: relative;
    padding: 0 0 0 42px;
    display: block;
    cursor: pointer;

    @include vp-laptop {
      padding: 0 0 0 37px;
    }

    @include vp-tablet {
      padding: 0 0 0 102px;
    }

    @include vp-mobile {
      padding: 0 0 0 50px;
    }

    &::before {
      content: "";
      background-color: $color-platinum;
      position: absolute;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);

      @include vp-laptop {
        width: 17px;
        height: 17px;
      }

      @include vp-tablet {
        width: 40px;
        height: 40px;
      }

      @include vp-mobile {
        width: 20px;
        height: 20px;
      }
    }
  }

  &__field:checked ~ .custom-checkbox-corns__label::before {
    background-color: $color-ucla-gold;
  }
}

.form-block {
  font-family: $ff-gilroy, sans-serif;
  background-color: $color-white;
  border-radius: 20px;
  box-shadow: 0 0 30px 0 $color-spanish-gray-c95-25;
  position: relative;
  width: 400px;
  padding: 45px 92px;
  height: 100%;

  @include vp-laptop {
    box-shadow: 0 0 21px 0 $color-spanish-gray-c95-25;
    padding: 34px 60px;
    width: 280px;
    border-radius: 14px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 61px 0px $color-spanish-gray-c95-25;
    padding: 109px 44px 65px;
    border-radius: 20px;
    width: 100%;
  }

  @include vp-mobile {
    box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
    padding: 52px 20px 30px;
    border-radius: 10px;
  }

  &::before {
    content: "";
    background-color: $color-ucla-gold;
    border-radius: 10px;
    width: 15px;
    position: absolute;
    left: 30px;
    top: 43px;
    bottom: 48px;

    @include vp-laptop {
      width: 10px;
      border-radius: 7px;
      top: 32px;
      bottom: 33px;
      left: 20px;
    }

    @include vp-tablet {
      height: 20px;
      left: 33px;
      right: 33px;
      top: 40px;
      bottom: unset;
      width: unset;
      border-radius: 20px;
    }

    @include vp-mobile {
      height: 10px;
      left: 15px;
      right: 15px;
      top: 20px;
      border-radius: 10px;
    }
  }
}

.form-block__group {
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 52px;
  margin: 0;
  padding: 0;
  width: max-content;

  @include vp-laptop {
    gap: 30px;
  }

  @include vp-tablet {
    gap: 40px;
  }

  @include vp-mobile {
    gap: 20px;
  }
}

.form-block__groupname {
  font-weight: 700;
  color: $color-black;
  font-size: 30px;
  line-height: 36px;
  font-family: $ff-gilroy, sans-serif;
  margin: 0 0 44px;

  @include vp-laptop {
    font-size: 22px;
    line-height: 25px;
    margin: 0 0 35px;
  }

  @include vp-tablet {
    font-size: 32px;
    line-height: 39px;
    margin: 0 0 45px;
  }

  @include vp-mobile {
    font-size: 16px;
    line-height: 19px;
    margin: 0 0 24px;
  }
}
</style>
