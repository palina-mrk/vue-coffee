import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import apolloClient from "../apollo";
import gql from "graphql-tag";

export const useCatalogStore = defineStore("catalog", () => {
  const isLoaded = ref(false);
  const catalog = reactive([]);
  const coffees = reactive([]);
  const teas = reactive([]);
  
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
              roasting
              actions
              taste
            }
            teas {
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
              kind
              actions
            }
          }
        `,
      })
      .then((result) => {
        result.data.coffees.forEach((el) => {catalog.push(el); coffees.push(el)});
        result.data.teas.forEach((el) => {catalog.push(el); teas.push(el)});
        isLoaded.value = true;
      });
  }

  function getPrice(itemId, weight) {
    return getSellInfo(itemId, weight).price;
  }

  function getKind(itemId) {
    const item = catalog.find((i) => i.id == itemId); 
    if (item.category != 'coffee')
      return item.kind;

    const kinds = item.details.map(d => d.kind);
    if(kinds.length == 1)
      return kinds[0];
    else if (!kinds.includes('Арабика'))
      return 'Робуста';
    else if (!kinds.includes('Робуста'))
      return 'Смесь арабик';
    else
      return ('Смесь арабикa/робуста');
  }

  function getShortDescription(itemId) {
    const item = catalog.find((i) => i.id == itemId); 
    if (item.category != 'coffee')
      return item.kind;

    if(item.details.length == 1)
      return `${Object.values(item.details[0]).join(', ')}`;

    const kinds = item.details.map(d => d.kind);
    if (!kinds.includes('Арабика'))
      return 'Робуста, смесь';
    else if (!kinds.includes('Робуста'))
      return 'Смесь арабик';
    else
      return ('Смесь арабикa/робуста');
  }

  function getFullInfo(itemId) {
    return catalog.find((i) => i.id === itemId);
  }

  function getSellInfo(itemId, weight) {
    return catalog.find((i) => i.id == itemId).weights.find((w) => w.value == weight);
  }

  function getSaleIndexes() {
    return catalog.filter((i) => i.actions.includes('Скидки')).map(i => i.id).sort();
  }

  return { isLoaded, catalog, coffees, teas, loadCatalog, getPrice, getFullInfo, getSellInfo, getSaleIndexes, getShortDescription, getKind };
});
