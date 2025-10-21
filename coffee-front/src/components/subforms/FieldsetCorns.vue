<script setup>
import { ref } from 'vue';
import SliderCorns from '../sliders/SliderCorns.vue'
defineProps(['maxDegree'])

const degrees = ref([])
</script>

<template>
  <div class="form-block">
    <div class="form-block__group">
      <p class="form-block__groupname">Степень обжарки</p>
      <!-- у группы чексбоксов д.б. одинаковый name и v-model -->
        <div 
          class="custom-checkbox-corns"
          v-for="degree in maxDegree"
        >
          <input 
            class="custom-checkbox-corns__field visually-hidden" :id="`coffee-roasting-${maxDegree + 1 - degree}`" 
            type="checkbox" 
            name="coffee-roasting" 
            :value="maxDegree + 1 - degree"
            v-model="degrees"
            @input="$emit('toggle-value', $event.target.value)"
            >
          <label 
            class="custom-checkbox-corns__label" 
            :for="`coffee-roasting-${maxDegree + 1 - degree}`">
            <slider-corns class="slider-corns--label"
            :count="maxDegree + 1 - degree"
            ></slider-corns>
          </label>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/blocks/catalogs/_custom-checkbox-corns.scss";
* {
font-family: $ff-gilroy;
}

.form-block {
  background-color: $color-white;
  border-radius: 20px;
  box-shadow: 0 0 30px 0 $color-spanish-gray-c95-25;
  position: relative;
  width: 400px;
  padding: 45px 92px;
  height: 526px;

  @include vp-laptop {
    box-shadow: 0 0 21px 0 $color-spanish-gray-c95-25;
    padding: 34px 60px;
    width: 280px;
    border-radius: 14px;
    height: 373px;
  }

  @include vp-tablet {
    box-shadow: 0px 0px 61px 0px $color-spanish-gray-c95-25;
    padding: 109px 44px 65px;
    width: 700px;
    height: 620px;
  }

  @include vp-mobile {
    box-shadow: 0px 0px 30px 0px $color-spanish-gray-c95-25;
    padding: 52px 20px 30px;
    width: 340px;
    height: 303px;
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
  margin: 0 0 -8px;

  @include vp-laptop {
    font-size: 22px;
    line-height: 25px;
    margin: 0 0 -5px;
  }

  @include vp-tablet {
    font-size: 32px;
    line-height: 39px;
    margin: 0 0 5px;
  }

  @include vp-mobile {
    font-size: 16px;
    line-height: 19px;
    margin: 0 0 4px;
  }
}

</style>
