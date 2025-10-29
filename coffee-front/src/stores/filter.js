import { defineStore } from "pinia";
import { computed, reactive, watch, ref } from "vue";
import apolloClient from "../apollo";
import gql from "graphql-tag";

export const useFilterStore = defineStore("filter", () => {
  const isLoaded = ref(false);
  const coffeesExtended = reactive([]);
  const geographyVocabulary = reactive({
  "Африка": ["Алжир", "Ангола", "Ботсвана", "Бурунди", "Гана", "Замбия", "Кения", "Ливан", "Марокко", "Мадагаскар", "Малави", "Намибия", "Руанда"],
  "Йемен": ["Йемен"],
  "Уганда": ["Уганда"],
  "Эфиопия": ["Эфиопия"],
  "Азия": [
    "Австрия",
    "Азербайджан",
    "Албания",
    "Армения",
    "Афганистан",
    "Бахрейн",
    "Бельгия",
    "Болгария",
    "Босния",
    "Бруней",
    "Бутан",
    "Вьетнам",
    "Гватемала",
    "Германия",
    "Гренландия",
    "Греция",
    "Грузия",
    "Дания",
    "Израиль",
    "Индия",
    "Индонезия",
    "Иордания",
    "Ирак",
    "Иран",
    "Испания",
    "Италия",
    "Казахстан",
    "Кипр",
    "Киргизия",
    "Китай",
    "Кувейт",
    "Латвия",
    "Ливан",
    "Литва",
    "Малайзия",
    "Монголия",
    "Мьянма",
    "Непал",
    "Объединённые Арабские Эмираты",
    "Оман",
    "Пакистан",
    "Палестина",
    "Папуа-Новая Гвинея",
    "Саудовская Аравия",
    "Северная Корея",
    "Сингапур",
    "Сирия",
    "Суматра",
    "Таджикистан",
    "Таиланд",
    "Танзания",
    "Тимор",
    "Тунис",
    "Туркменистан",
    "Туркмения",
    "Турция",
    "Узбекистан",
    "Шри-Ланка",
    "Швейцария",
    "Южная Корея",
    "Япония"
  ],
  "Сев. Америка": ["Гавайи", "Канада"],
  "Европа": ["Румыния", "Сербия", "Украина"],
  "Центр. Америка": ["Гватемала", "Никарагуа", "Панама", "Перу"],
  "Лат. Америка": [
    "Боливия",
    "Бразилия",
    "Доминиканская Республика",
    "Колумбия",
    "Коста-Рика",
    "Куба",
    "Эквадор",
    "Эль-Сальвадор",
    "Мексика",
    "Парагвай",
    "Перу",
    "Польша",
    "Финляндия",
    "Франция",
    "Хорватия",
    "Черногория",
    "Чехия",
    "Швеция",
    "Эстония",
    "Ямайка"
  ]
})

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
                  ? "Смесь арабика/робуста" : (kinds.length == 1 ? kinds[0]: ( kinds[0] == "Арабика" ? "Смесь арабик" : "Робуста"));
          const acidityDetail = item.hue.acidity <= 3 ? 'Низкая' : (
                item.hue.acidity <= 6 ? 'Средняя' : 'Высокая' 
              );
          const processingDetails = item.details.map(d => d["processing"] == 'Сухой' ? 'Сухая' : (
                d["processing"] == 'Мытая' ? 'Мытая' : 'Прочие' ));
          const geographyDetails = item.details.map(d => Object.keys(geographyVocabulary).find(key => geographyVocabulary[key].includes(d.geography)) ?? d.geography);
              
          coffeesExtended.push( 
          Object.assign({}, item, 
            {
              roastingDegree: item.roasting,
              geographyDetails,
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
