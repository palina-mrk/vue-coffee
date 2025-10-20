import "./style.css";
import App from "./App.vue";
import router from './router'
import { createPinia } from "pinia";
import { useCoffeeStore } from "./stores/coffee";
import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "./apollo";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});
app.use(router);
app.use(createPinia());
/*
const catalogStore = useCoffeeStore();
catalogStore.loadCatalog();
*/
app.mount("#app");
