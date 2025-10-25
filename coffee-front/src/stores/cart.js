import { defineStore } from "pinia";
import { computed, reactive, watch } from "vue";
import { useCatalogStore } from "./catalog";

export const useCartStore = defineStore("cart", () => {
  const catalog = useCatalogStore();
  const cartRows = reactive(JSON.parse(localStorage.getItem("cartRows") || "[]"));/*
  [id1, weight1, count1], 
     [id1, weight2, count2], 
     [id2, weight2, count2],
  }*/
  
  const cartInfo = computed(() => cartRows.reduce((str, el) => str + `id: ${el[0]}, weight: ${el[1]}, count: ${el[2]};
  `,"cart: "));

  function addToCart(itemId, weight) {
    const item = cartRows.find(el => el[0] == itemId && el[1] == weight);
    if (!item) 
      cartRows.push([itemId, weight, 1]);
    else item[2]++;
    console.log(rawCartItems.value)
  }

  function removeFromCart(itemId, weight) {
    const ind = cartRows.findIndex(el => el[0] == itemId && el[1] == weight);
    if(ind == -1)
      return;
    
    cartRows.splice(ind, 1);
  }

  function setCount(itemId, weight, count) {
    if (count <= 0) {
      removeFromCart(itemId, weight);
      return;
    }
      
    const item = cartRows.find(el => el[0] == itemId && el[1] == weight);
    if (!item) 
      cartRows.push([itemId, weight, count]);
    else item[2] = count;
  }

  function clearCart() {
    cartRows.length = 0;
  }

  const itemIdCount = computed(() => cartRows.length);
  
  const totalCount = computed(() =>
    cartRows.reduce((acc,el) => (acc + el[2]), 0)
  );

  const totalCountString = computed(() => {
    if(totalCount.value % 100 > 10 && totalCount.value % 100 < 20)
      return `${totalCount.value} товаров`;
    
      switch (totalCount.value % 10) {
        case 1: 
          return `${totalCount.value} товар`;
        case 2:
        case 3:
        case 4: 
          return `${totalCount.value} товара`;
        default:
          return `${totalCount.value} товаров`;
      }
  }
  );

  const totalSum = computed(() =>
    cartRows.reduce((acc,el) => (acc + el[2] * catalog.getPrice(el[0], el[1])), 0)
  );

  /*[id, weight, count]
  const cartRows = computed(() => 
    Object.keys(cart).reduce( (acc, id) => 
      Object.keys(cart[id]).map( 
        weight => {
          acc.push([id, weight, cart[id][weight]]);
          return acc;
        }
      ), []))*/

  const rawCartItems = computed(() => catalog.isLoaded ? cartRows.reduce((acc, [id, weight, count]) => {
    console.log(id, weight, count);
    const item = catalog.getFullInfo(id);
    console.log(item);
    const {price, priceCrossed} = catalog.getSellInfo(id, weight);
    const shortDescription = catalog.getShortDescription(id);
    acc.push({
      id: id,
      title: item.title,
      category: item.category,
      descripton: shortDescription,
      weight: weight,
      weightString: `${weight} ${item.category == 'vending' ? 'кг.' : 'г.'}`,
      price: (item.actions.includes('Скидки') ? priceCrossed : price) * count,
      count: count,
      sale: item.actions.includes('Скидки') ? (priceCrossed - price)*count : 0,
      salePercent: item.actions.includes('Скидки') ? Number(((priceCrossed - price) * 100 *count / priceCrossed).toFixed(0)) : 0,
      total: price * count,
    });
    return acc;
  }, []) : [])

  watch(cartRows, () => {
    localStorage.setItem("cartRows", JSON.stringify(cartRows));
  });


  return {
    cartRows,
    addToCart,
    removeFromCart,
    clearCart,
    setCount,
    itemIdCount,
    totalCount,
    totalCountString,
    totalSum,
    rawCartItems,
  };
});
