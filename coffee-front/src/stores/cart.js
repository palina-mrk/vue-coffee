import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { useCatalogStore } from './catalog'

export const useCatrStore = defineStore('cart', () => {
  const catalog = useCatalogStore()

  const cart = reactive({}) 
  /* item.id -> {
    weight1: count1, 
    weight2: count2
  }*/

  function addToCart(itemId, weight) {
    if (!cart[itemId]) {
      cart[itemId] = {};
    }

    if(!cart[itemId][weight])
      cart[itemId][weight] = 1;
    else
      cart[itemId][weight] ++;
  }

  function setCount(itemId, weight, count) {
    if (count <= 0) {
      delete cart[itemId][weight]
    } else {
      cart[itemId][weight] = count
    }
  }

  const itemIdCount = computed(() => Object.values(cart.value).length)
  const totalCount = computed(() =>
    Object.values(cart.value).reduce((sum, c) => sum + c, 0)
  )

  const totalSum = computed(() =>
    Object.entries(cart.value).reduce((sum, [itemId, count]) => {
      return sum + count * catalog.getPrice(itemId)
    }, 0)
  )

  const cartRows = computed(() => Object.entries(cart.value))

  return {
    cart,
    addToCart,
    setCount,
    itemIdCount,
    totalCount,
    totalSum,
    cartRows,
  }
})