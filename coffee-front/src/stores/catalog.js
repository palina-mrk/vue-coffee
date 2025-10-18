import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useCatalogStore = defineStore('catalog', () => {
  const isLoading = ref(false)
  const catalog = reactive([])

  async function loadCatalog() {
    return new Promise((resolve) => {
      isLoading.value = true
      setTimeout(() => {
        isLoading.value = false
        resolve([{
          "id": 1,
          "title": "Colombia Supremo",
          "description": "Свежеобжаренный кофе - нежный сбалансированный вкус, легкий аромат цитруса.",
          "weights": [
            {"value": 250, "price": 250, "priceCrossed": 350},
            {"value": 1000, "price": 900, "priceCrossed": 1200},
          ],
          "category": ["Скидки", "Популярное"],
          "hue": {"acidity": 3, "bitterness": 5, "richness": 7},
          "rating": 4.0,
          "comments": 32
        },
        {
          "id": 2,
          "title": "Ethiopia Yirgacheffe",
          "description": "Свежеобжаренный кофе - яркий цветочно-фруктовый букет, освежающая кислинка.",
          "weights": [
            {"value": 250, "price": 280, "priceCrossed": 380},
            {"value": 1000, "price": 1100, "priceCrossed": 1500},
          ],
          "category": ["Популярное", "Новый урожай"],
          "hue": {"acidity": 8, "bitterness": 3, "richness": 6},
          "rating": 4.5,
          "comments": 150
        },
        {
          "id": 3,
          "title": "Brazil Santos",
          "description": "Свежеобжаренный кофе - мягкий, слегка орехово-шоколадный вкус.",
          "weights": [
            {"value": 250, "price": 200, "priceCrossed": 260},
            {"value": 1000, "price": 700, "priceCrossed": 1000},
          ],
          "category": ["Скидки", "Популярное"],
          "hue": {"acidity": 2, "bitterness": 4, "richness": 8},
          "rating": 4.2,
          "comments": 250
        }])
      }, 0)
    })
  }

  function getPrice(itemId, weight) {
    return getSellInfo(itemId, weight).price;
  }

  function getFullInfo(itemId) {
    return catalog.find((i) => i.id === itemId)
  }

  function getSellInfo(itemId, weight) {
    return catalog.find((i) => i.id == itemId)
                  .find((w) => w.value == weight);
  }

  return { isLoading, catalog, loadCatalog, getPrice, getFullInfo, getSellInfo }
})