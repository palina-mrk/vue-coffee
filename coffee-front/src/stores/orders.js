import { defineStore } from "pinia";
import { computed, reactive, watch, ref } from "vue";
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

  /** до оплаты заказа мы можем считывать инфу из корзины 
   * после оплаты всё уже "заморожено": меняться может только isFinished
  */
  function saveOrder () {
    let date = new Date();
    const paymentTime = date.toLocaleString('ru');
    date.setDate(date.getDate() + cartStore.deliveryDuring);
    const deliveryDate = date.toLocaleDateString('ru');

    const currentOrder = {};
    currentOrder.orderID = orderItems.length + 1;
    currentOrder.isPaid = true;
    currentOrder.isFinished = false;
    currentOrder.paymentTime = paymentTime;
    currentOrder.deliveryDate = deliveryDate;
    currentOrder.totalSum = cartStore.totalSum;     /* сумма без доставки*/
    currentOrder.totalSale = cartStore.totalSale;   /** суммарная скидка */
    currentOrder.globalSale = cartStore.globalSale; /* процент */
    currentOrder.deliveryPrice = cartStore.deliveryPrice;  /* за доставку */
    currentOrder.timeOut = setTimeout(() => currentOrder.isFinished = true, 1000*3600*24*(cartStore.deliveryDuring + 1));
    currentOrder.productLines = cartStore.cartItems.map((item) => {
      return {
        id: item.id,
        title: item.title,
        category: item.category,
        shortDescription: "Зелёный чай",
        weightString: "200 г.",
        count: item.count,
        initialPrice: item.price,
        sale: item.sale,
        salePercent: item.salePercent,
        total: item.total,
      }
    })

    
    orderItems.push(currentOrder);

    console.log(orderItems);
  }

  watch(orderItems, () => {
    localStorage.setItem("orderItems", JSON.stringify(orderItems));
  });

  return {
    orderItems,
    saveOrder,
  };
});
