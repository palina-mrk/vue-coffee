import './style.css'
import App from './App.vue';
import { createPinia } from 'pinia'
import { useCatalogStore } from './stores/catalog'
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag'

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
import { provideApolloClient } from '@vue/apollo-composable'
provideApolloClient(apolloClient)

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
})
app.use(createPinia())
const catalogStore = useCatalogStore()
apolloClient.query({
  query: gql`{
    products {
      id
      title
      description
      price
      category
      image 
      rating { rate count }
      },
  }`,
}).then((result => catalogStore.defineCatalog(result)))




app.mount('#app')