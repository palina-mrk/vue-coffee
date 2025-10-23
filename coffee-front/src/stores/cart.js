import { defineStore } from "pinia";
import { computed, reactive, watch } from "vue";
import { useCoffeeStore } from "./coffee";

export const useCartStore = defineStore("cart", () => {
  const catalog = useCoffeeStore();
  const cart = reactive(JSON.parse(localStorage.getItem("cart") || "{}"));
  /* item.id -> {
    weight1: count1, 
    weight2: count2
  }*/
  
  function cartInfo() {
    let info = 'cart: ';
    Object.keys(cart).forEach((el) => {
      let ans = ` id: ${el}`;
      Object.keys(cart[el]).forEach(w => ans += `, ${w}: ${cart[el][w]}`);
      info += ans;
      info += `; `
    })
    return info;
  }

  function addToCart(itemId, weight) {
    if (!cart[itemId]) {
      cart[itemId] = {};
    }

    if (!cart[itemId][weight]) cart[itemId][weight] = 1;
    else cart[itemId][weight]++;
    console.log(cartInfo());
  }

  function removeFromCart(itemId, weight) {
    if (!cart[itemId] || !cart[itemId][weight]) return; 
    else {
      delete cart[itemId][weight];
      if (Object.keys(cart[itemId]).length == 0) 
        delete cart[itemId];
    }
  }

  function setCount(itemId, weight, count) {
    if (count <= 0) {
      removeFromCart(itemId, weight);
    } else {
      if (!cart[itemId]) {
        cart[itemId] = {};
      }
      cart[itemId][weight] = count;
    }
  }

  function clearCart() {
    Object.keys(cart).forEach(itemId => delete cart[itemId]);
  }

  const itemIdCount = computed(() => Object.values(cart.value).length);
  
  const totalCount = computed(() =>
    Object.values(cart)  /* [{w1: c1, w2: c2}, {w1: c3, w2: c4}]*/
    .reduce((acc, weights) => (
      acc + Object.values(weights).reduce((acc, count) => acc + count, 0))
      , 0),
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
    Object.entries(cart.value).reduce((sum, [itemId, count]) => {
      return sum + count * catalog.getPrice(itemId);
    }, 0),
  );

  const cartRows = computed(() => Object.entries(cart.value));

  watch(cart, () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });


  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    setCount,
    itemIdCount,
    totalCount,
    totalCountString,
    totalSum,
    cartRows,
  };
});
