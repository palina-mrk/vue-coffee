import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "./apollo";
import { useCatalogStore } from "./stores/catalog";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});
app.use(router);
app.use(createPinia());

const catalogStore = useCatalogStore();
catalogStore.loadCatalog();

app.mount("#app");
