import { defineStore } from "pinia";
import { reactive, watch, computed } from "vue";
import { useCartStore } from "./cart";

export const useOrdersStore = defineStore("order", () => {
  const cartStore = useCartStore();
  /** orderItems - уже оплаченные заказы
   * инф. о них меняться не может, кроме поля isFinished
   * (станет true после доставки)
   */
  const orderItems = reactive(
    JSON.parse(localStorage.getItem("orderItems") || "[]"),
  );

  orderItems.forEach((orderItem) => {
    /* строка для тестирования завершенных заказов
    специально устанавливаем старую дату, чтобы сразу пошли в завершенные
    orderItem.deliveryObjectDate = 1762062460456;*/
    const ts = Date.now();
    orderItem.isFinished = Date.parse(orderItem.deliveryObjectDate) < ts;
  });

  /** до оплаты заказа мы можем считывать инфу из корзины
   * после оплаты всё уже "заморожено": меняться может только isFinished
   */
  function saveOrder() {
    let date = new Date();
    const paymentTime = date.toLocaleString("ru");
    date.setDate(date.getDate() + cartStore.deliveryDuring);
    const deliveryDate = date.toLocaleDateString("ru");

    const currentOrder = {};
    currentOrder.orderID = orderItems.length + 1;
    currentOrder.isPaid = true;
    currentOrder.isFinished = false;
    currentOrder.paymentTime = paymentTime;
    currentOrder.deliveryObjectDate = date;
    currentOrder.deliveryDate = deliveryDate;
    currentOrder.totalSum = cartStore.totalSum; /* сумма без доставки*/
    currentOrder.totalSale = cartStore.totalSale; /** суммарная скидка */
    currentOrder.globalSale = cartStore.globalSale; /* процент */
    currentOrder.deliveryPrice = cartStore.deliveryPrice; /* за доставку */
    currentOrder.productLines = cartStore.cartItems.map((item) => {
      return {
        id: item.id,
        title: item.title,
        category: item.category,
        shortDescription: item.shortDescription,
        weightString: item.weightString,
        count: item.count,
        initialPrice: item.price,
        sale: item.sale,
        salePercent: item.salePercent,
        total: item.total,
      };
    });
    orderItems.unshift(currentOrder);
  }

  function clearFinished() {
    const newItems = orderItems.filter((item) => !item.isFinished);
    orderItems.length = 0;
    newItems.forEach((item) => orderItems.unshift(item));
  }

  function clearAll() {
    orderItems.length = 0;
  }

  const finishedCount = computed(
    () => orderItems.filter((item) => item.isFinished).length,
  );

  function isLastOfSaved(state, orderID) {
    const isFinished = state == "finished";
    return (
      orderItems.findLast((item) => item.isFinished == isFinished)?.orderID ==
      orderID
    );
  }

  watch(orderItems, () => {
    localStorage.setItem("orderItems", JSON.stringify(orderItems));
  });

  return {
    orderItems,
    saveOrder,
    clearFinished,
    clearAll,
    finishedCount,
    isLastOfSaved,
  };
});
