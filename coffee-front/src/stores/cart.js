import { defineStore } from "pinia";
import { computed, reactive, watch, ref } from "vue";
import { useCatalogStore } from "./catalog";

export const useCartStore = defineStore("cart", () => {
  const catalog = useCatalogStore();
  const cartRows = reactive(
    JSON.parse(localStorage.getItem("cartRows") || "[]"),
  ); /*
  [id1, weight1, count1], 
  [id1, weight2, count2], 
  [id2, weight2, count2],
  }*/

  const cartSales = reactive([
    [0, 0],
    [5000, 10],
    [7000, 15],
    [10000, 20],
  ]); /**При покупке на определенную сумму ко всем нескидочным товарам применится скидка "по корзине" на определенное кол-во процентов
  [[сумма1, процент1],[сумма2, процент2]] */
  const cartSale = computed(
    () => cartSales.findLast((s) => s[0] <= rawTotalSum.value)[1],
  ); /* вычисляем эту скидку*/

  const promoSales = reactive([
    ["coffee2021", 15],
    ["summer2022", 20],
  ]); /** правильные промокоды с их скидками */
  const promoSale = ref(0);
  const userPromo = ref("");

  /** Попытка применить промокод
   * если верный, сохраняем и применяем к нескидочным товарам
   */
  function setPromo(promoValue) {
    const promoInfo = promoSales.find((s) => s[0] == promoValue);

    if (!promoInfo) return false;

    promoSale.value = promoInfo[1];
    userPromo.value = promoValue;
    return true;
  }

  /** ко всем нескидочным 
  товарам применится максимальная из скидок по промокоду и по корзине
   */
  const globalSale = computed(() =>
    cartSale.value > promoSale.value ? cartSale.value : promoSale.value,
  );
  const saleType = computed(() => {
    switch (globalSale.value) {
      case 0:
        return "none";
      case cartSale.value:
        return "cart";
      case promoSale.value:
        return "promo";
      default:
        return "unknown";
    }
  });

  /* [сумма, value, лейбл, длительность]*/
  const deliveryWays = reactive([
    [390, "sdek", "СДЭК - до двери", 2],
    [300, "russian-post", "Почта России", 7],
    [427, "dpd", "DPD - курьер", 3],
  ]);
  const deliveryWay = ref(deliveryWays[0]);

  const deliveryPrices = computed(() => deliveryWays.map((el) => el[0]));
  const deliveryValues = computed(() => deliveryWays.map((el) => el[1]));
  const deliveryLabels = computed(() =>
    deliveryWays.map((el) => el[2] + ", " + el[3] + " дн. - "),
  );
  function setDeliveryValue(value) {
    const way = deliveryWays.find((el) => el[1] == value);
    if (way) deliveryWay.value = way;
  }
  const deliveryValue = computed(() => deliveryWay.value[1]);
  const deliveryPrice = computed(() => deliveryWay.value[0]);
  const deliveryDuring = computed(() => deliveryWay.value[3]);

  const cartInfo = computed(() =>
    cartRows.reduce(
      (str, el) =>
        str +
        `id: ${el[0]}, weight: ${el[1]}, count: ${el[2]};
  `,
      "cart: ",
    ),
  );

  function addToCart(itemId, weight) {
    if (!weight) return;

    const item = cartRows.find((el) => el[0] == itemId && el[1] == weight);
    if (!item) cartRows.push([itemId, weight, 1]);
    else item[2]++;
  }

  function removeOneFromCart(itemId, weight) {
    if (!weight) return;

    const ind = cartRows.findIndex((el) => el[0] == itemId && el[1] == weight);
    if (ind == -1) return;

    cartRows[ind][2]--;
    if (cartRows[ind][2] == 0) cartRows.splice(ind, 1);
  }

  function removeFromCart(itemId, weight) {
    if (!weight) return;

    const ind = cartRows.findIndex((el) => el[0] == itemId && el[1] == weight);
    if (ind == -1) return;

    cartRows.splice(ind, 1);
  }

  function setCount(itemId, weight, itemCount) {
    if (!weight) return;

    const count = Number(itemCount);
    if (count <= 0) {
      removeFromCart(itemId, weight);
      return;
    }

    const item = cartRows.find((el) => el[0] == itemId && el[1] == weight);
    if (!item) cartRows.push([itemId, weight, count]);
    else item[2] = count;
  }

  function clearCart() {
    cartRows.length = 0;
  }

  const itemIdCount = computed(() => cartRows.length);

  const totalCount = computed(() =>
    cartRows.reduce((acc, el) => acc + el[2], 0),
  );

  const totalCountString = computed(() => {
    if (totalCount.value % 100 > 10 && totalCount.value % 100 < 20)
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
  });

  const rawTotalSum = computed(() =>
    rawCartItems.value.reduce((acc, el) => acc + el.total, 0),
  );
  const totalSum = computed(() =>
    cartItems.value.reduce((acc, el) => acc + el.total, 0),
  );
  const totalSale = computed(() =>
    cartItems.value.reduce((acc, el) => acc + el.sale, 0),
  );

  /* информация о товарах в корзине ДО применения
   *  скидки к КОРЗИНЕ
   *  т.е. здесь скидки учитываются только на товары,
   * которые сами по себе, в каталоге - уже со скидкой */
  const rawCartItems = computed(() =>
    catalog.isLoaded
      ? cartRows.reduce((acc, [id, weight, count]) => {
          const item = catalog.getFullInfo(id);
          const { price, priceCrossed } = catalog.getSellInfo(id, weight);
          const shortDescription = catalog.getShortDescription(id);
          acc.push({
            id: id,
            title: item.title,
            category: item.category,
            descripton: shortDescription,
            weight: weight,
            weightString: `${weight} ${item.category == "vending" ? "кг." : "г."}`,
            /* цена до скидки (зачеркнутая): */
            isSaled: item.actions.includes("Скидки"),
            price:
              (item.actions.includes("Скидки") ? priceCrossed : price) * count,
            count: count,
            sale: item.actions.includes("Скидки")
              ? (priceCrossed - price) * count
              : 0,
            salePercent: item.actions.includes("Скидки")
              ? Math.round(((priceCrossed - price) * 100) / priceCrossed)
              : 0,
            /* цена после применения скидки (итоговая): */
            total: price * count,
          });
          return acc;
        }, [])
      : [],
  );

  /* информация о товарах в корзине ПОСЛЕ применения
   *  скидки КОРЗИНЫ ко всем товарам, которые не были
   *  изначально на скидке
   *   т.е. здесь применяется бОльшая из:
   *    - скидки по промокоду
   *    - или скидки по достижении в корзине
   *       определенной общей суммы */
  const cartItems = computed(() => {
    if (globalSale.value == 0) return rawCartItems.value;

    return rawCartItems.value.map((rawItem) => {
      if (rawItem.isSaled) return rawItem;

      const item = Object.assign(rawItem);
      item.salePercent = globalSale.value;
      /* итоговая цена: */
      item.total = Math.round((rawItem.price * (100 - globalSale.value)) / 100);
      item.sale = Math.round((rawItem.price * globalSale.value) / 100);
      return item;
    });
  });

  function getCount(itemId, weight) {
    if (!weight) return 0;

    const item = cartRows.find((el) => el[0] == itemId && el[1] == weight);
    console.log(item);
    return item == undefined ? 0 : item[2];
  }

  watch(cartRows, () => {
    localStorage.setItem("cartRows", JSON.stringify(cartRows));
  });

  return {
    cartRows,
    cartSales,
    addToCart,
    removeFromCart,
    removeOneFromCart,
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
    totalSale,
    globalSale,
    deliveryValues,
    deliveryLabels,
    deliveryPrices,
    deliveryValue,
    setDeliveryValue,
    deliveryValue,
    deliveryPrice,
    deliveryDuring,
    setPromo,
    saleType,
    promoSale,
    userPromo,
    getCount,
  };
});
