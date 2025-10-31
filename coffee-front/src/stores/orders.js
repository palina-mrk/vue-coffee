import { defineStore } from "pinia";
import { computed, reactive, watch, ref } from "vue";
import { useCartStore } from "./cart";
import ProductLine from "../components/cards/ProductLine.vue";

export const useOrdersStore = defineStore("order", () => {
  const cartStore = useCartStore();
  const orderItems = reactive(
    JSON.parse(localStorage.getItem("orderRows") || "[]"),
  );

  /*
элемент массива orderItems:
{
  orderID: 1,
  isPaid: true,
  isFinished: true,
  paymentTime: "01.11.2025 12:24:00",
  deliveryDuring: 3,
  totalSum: 1170,
  orderSale: 15,
  deliveryPrice: 300,
  productLines: [
      {
        id: 15,
        title: "Энергия пшеницы",
        weightString: "100 г.",
        count: 2,
        price: 240,
        sale: 0,
        total: 240,
      },
      {
        id: 29,
        title: "Байкальская мелодия",
        weightString: "200 г.",
        count: 1,
        price: 530,
        sale: 0,
        total: 530,
      },
      {
        id: 35,
        title: "Brazil Santos",
        weightString: "250 г.",
        count: 2,
        price: 520,
        sale: 120,
        total: 400,
      },
    ]
}*/

  function payOrder() {
    const orderItem = {
      orderID: orderItems.length + 1,
      isPaid: true,
      isFinished: false,
      paymentDate: Date(),
      paymentTime: null,
      deliveryDuring: cartStore.deliveryDuring.value,
      deliveryDate: null,
      totalSum: cartStore.totalSum.value,
      deliveryPrice: cartStore.deliveryPrice.value,
      orderSale: cartStore.globalSale.value,
      productLines: cartStore.cartItems.value.map((item) => ({
        id: item.id,
        title: item.title,
        weightString: item.weightString,
        count: item.count,
        price: item.price,
        sale: item.sale,
        total: item.total,
      })),
    };

    orderItem.paymentTime = paymentDate.toString();
    orderItem.deliveryDate =
      paymentDate + 1000 * 60 * 60 * 24 * orderItem.deliveryDuring;

    orderItems.push(orderItem);

    cartStore.clearCart();
  }

  watch(orderItems, () => {
    localStorage.setItem("orderItems", JSON.stringify(orderItems));
  });

  return {};
});
