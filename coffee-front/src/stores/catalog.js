import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import apolloClient from "../apollo";
import gql from "graphql-tag";

export const useCatalogStore = defineStore("catalog", () => {
  const isLoaded = ref(false);
  const catalog = reactive([]);

  function loadCatalog() {
    apolloClient
      .query({
        query: gql`
          {
            products {
              id
              title
              description
              price
              category
              image
              rating {
                rate
                count
              }
            }
          }
        `,
      })
      .then((result) => {
        result.data.products.forEach((el) => catalog.push(el));
        catalog.forEach((el) => console.log(el));
        isLoaded.value = true;
      });
  }

  function getPrice(itemId, weight) {
    return getSellInfo(itemId, weight).price;
  }

  function getFullInfo(itemId) {
    return catalog.find((i) => i.id === itemId);
  }

  function getSellInfo(itemId, weight) {
    return catalog.find((i) => i.id == itemId).find((w) => w.value == weight);
  }

  return { isLoaded, catalog, loadCatalog, getPrice, getFullInfo, getSellInfo };
});
