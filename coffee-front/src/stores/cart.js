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
 
  const globalSales = reactive([
    [0, 0],
    [5000, 10],
    [7000, 15],
    [10000, 20]
  ]) /**При покупке на определенную сумму ко всем нескидочным 
  товарам применится скидка на определенное кол-во процентов
  [[сумма1, процент1],[сумма2, процент2]] */

  const globalSale = computed(() => 
    globalSales.findLast(s => s[0] <= rawTotalSum.value)[1]
  ) /* вычисляем эту скидку*/
  
  const cartInfo = computed(() => cartRows.reduce((str, el) => str + `id: ${el[0]}, weight: ${el[1]}, count: ${el[2]};
  `,"cart: "));

  function addToCart(itemId, weight) {
    const item = cartRows.find(el => el[0] == itemId && el[1] == weight);
    if (!item) 
      cartRows.push([itemId, weight, 1]);
    else item[2]++;
    console.log(rawCartItems.value)
    console.log(rawTotalSum.value)
    console.log(cartItems.value)
    console.log(totalSum.value)
  }

  function removeFromCart(itemId, weight) {
    const ind = cartRows.findIndex(el => el[0] == itemId && el[1] == weight);
    if(ind == -1)
      return;
    
    cartRows.splice(ind, 1);
  }

  function setCount(itemId, weight, itemCount) {
    const count = Number(itemCount);
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

  const rawTotalSum = computed(() =>
    rawCartItems.value.reduce((acc,el) => (acc + el.total), 0)
    //cartRows.reduce((acc,el) => (acc + el[2] * catalog.getPrice(el[0], el[1])), 0)
  );
  const totalSum = computed(() =>
    cartItems.value.reduce((acc,el) => (acc + el.total), 0)
    //cartRows.reduce((acc,el) => (acc + el[2] * catalog.getPrice(el[0], el[1])), 0)
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
    const item = catalog.getFullInfo(id);
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
      salePercent: item.actions.includes('Скидки') ? Math.round(((priceCrossed - price) * 100 / priceCrossed)) : 0,
      total: price * count,
    });
    return acc;
  }, []) : [])

  const cartItems = computed(() => {
    console.log(globalSale.value);
    if(globalSale.value == 0)
      return rawCartItems.value;

    return rawCartItems.value.map(rawItem => {
        console.log(rawItem.sale);
        if(rawItem.sale > 0)
          return rawItem;
        
        const item = Object.assign(rawItem);
        item.salePercent = globalSale.value;
        item.total = Math.round((rawItem.price * (100 - globalSale.value) / 100));
        item.sale = Math.round((rawItem.price * globalSale.value / 100));
        return item;
      }
    )
  })


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
    rawTotalSum,
    cartItems,
    totalSum,
    globalSale
  };
});
