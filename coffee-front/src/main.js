import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { useCatalogStore } from "./stores/catalog";
import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "./apollo";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(createPinia());
const catalogStore = useCatalogStore();
catalogStore.loadCatalog();

app.mount("#app");
