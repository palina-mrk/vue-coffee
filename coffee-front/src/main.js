import './style.css'
import App from './App.vue';
import { createPinia } from 'pinia'

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable';
import { provide, h, createApp } from 'vue'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
})

app.use(createPinia())
app.mount('#app')