import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { useQuery, useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag'


export const useCatalogStore = defineStore('catalog', () => {
  const isLoaded = ref(false)
  const catalog = reactive([])

  function defineCatalog (result) {
    console.log(result.data.products[0])
    result.data.products.forEach(el => catalog.push(el))
    console.log(catalog[1])
  }

 /* async function loadCatalog() {
    const { result } = useQuery(
      gql`{
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
    )
    result.array.forEach(element => {
      catalog.push(element);
    });
    isLoaded.value = true;
    console.log(catalog); 
  }*/

  function getPrice(itemId, weight) {
    return getSellInfo(itemId, weight).price;
  }

  function getFullInfo(itemId) {
    return catalog.find((i) => i.id === itemId)
  }

  function getSellInfo(itemId, weight) {
    return catalog.find((i) => i.id == itemId)
                  .find((w) => w.value == weight);
  }

  return { isLoaded, catalog,  defineCatalog, getPrice, getFullInfo, getSellInfo }
})