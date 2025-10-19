import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import apolloClient from "../apollo";
import gql from "graphql-tag";

export const useCoffeeStore = defineStore("catalog", () => {
  const isLoaded = ref(false);
  const catalog = reactive([]);
  
  function loadCatalog() {
    apolloClient
      .query({
        query: gql`
          {
            coffees {
              id
              title
              description
              category
              rate {
                rating
                comments
              } 
              weights {
                value
                price
                priceCrossed
              }
              hue {
                acidity
                bitterness
                richness
              }
              details {
                kind
                variety
                processing
                geography
              }
              actions
              taste
            }
          }
        `,
      })
      .then((result) => {
        result.data.coffees.forEach((el) => catalog.push(el));
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

  function getSaleIndexes() {
    return catalog.filter((i) => i.actions.includes('Скидки')).map(i => i.id).sort();
  }

  return { isLoaded, catalog, loadCatalog, getPrice, getFullInfo, getSellInfo, getSaleIndexes };
});
