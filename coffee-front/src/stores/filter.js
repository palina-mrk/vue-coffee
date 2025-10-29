import { defineStore } from "pinia";
import { computed, reactive, watch, ref } from "vue";
import apolloClient from "../apollo";
import gql from "graphql-tag";

export const useFilterStore = defineStore("filter", () => {
  const isLoaded = ref(false);
  const coffeesExtended = reactive([]);

  function loadFilter() {
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
          }
        `,
      })
      .then((result) => {
        result.data.coffees.forEach((item) => {
          const kinds = item.details.map(d => d.kind).sort();
          const kindDetail = kinds[0] != kinds[kinds.length - 1] 
                  ? "Смесь арабика/робуста" : ((kinds.length > 1 && kinds[0]) == "Арабика" ? "Смесь арабик" : kinds[0]);
          const acidityDetail = item.acidity <= 4 ? 'Низкая' : (
                item.acidity <= 7 ? 'Средняя' : 'Высокая' 
              );
          const processingDetails = item.details.map(d => d["processing"] == 'Сухой' ? 'Сухая' : (
                d["processing"] == 'Мытая' ? 'Мытая' : 'Прочие' ));
              
          coffeesExtended.push( 
          Object.assign({}, item, 
            {
              roastingDegree: item.roasting,
              geographyDetails: item.details.map(d => d.geography),
              processingDetails,
              acidityDetail,
              actionsDetails: item.actions.map(a => a),
              kindDetail,
            }
          ))
        });
        isLoaded.value = true;
      });
  }

  /*
  const coffeesExtended = computed(() =>
    catalog.isLoaded
      ? catalog.coffees.reduce((acc, item) => {
          acc.push( 
          Object.assign(item, 
            {
              roastingDegree: item.roasting,
              geographyDetail: item.details.map(d => d.geography),
              processingDetail: item.details.map(d => d["processing"] == 'Сухой' ? 'Сухая' : (
                item.d["processing"] == 'Мытая' ? 'Мытая' : 'Прочие' )),
              acidityDetail: item.acidity <= 4 ? 'Низкая' : (
                item.acidity <= 7 ? 'Средняя' : 'Высокая' 
              ),
              actionsDetail: item.actions.map(a => a),
              kindDetail: () => {
                const kinds = item.details.map(d => d.kind).sort();
                return kinds[0] != kinds[kinds.length - 1] 
                  ? "Смесь арабикa/робуста" : ((kinds.length > 1 && kinds[0]) == "Арабика" ? "Смесь арабик" : kinds[0])
                  },
            })
          );
          return acc;
        }, [])
      : [],
  );
*/
  return {
    coffeesExtended,
    isLoaded,
    loadFilter,
  };
});
