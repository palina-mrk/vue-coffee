import { defineStore } from "pinia";
import { computed, reactive, watch, ref } from "vue";
import { useCatalogStore } from "./catalog";

export const useFilterStore = defineStore("filter", () => {
  const catalog = useCatalogStore();
  const teas = reactive([]);
  const coffees = reactive([]);
  const vendings = reactive([]);
  const healthies = reactive([]);
  const filteredTeas = reactive([]);
  const filteredCoffees = reactive([]);
  const filteredVendings = reactive([]);
  const filteredHealthies = reactive([]);

  watch(catalog.isLoaded, () => {
    catalog.teas.forEach((el) => {teas.push(el); filteredTeas.push(el)});
    catalog.coffees.forEach((el) => {coffees.push(el); filteredCoffees.push(el)});
    catalog.vendings.forEach((el) => {vendings.push(el); filteredVendings.push(el)});
    catalog.healthies.forEach((el) => {healthies.push(el); filteredHealthies.push(el)});
  })

  const teaTypes = reactive([
    "Черный чай",
    "Травяной чай",
    "Зелёный чай",
    "Матча",
    "Молочный улунг",
    "Пуэр",
    "Кофейные напитки",
  ]);
  const teaFilter = reactive([]);
  function setTeaFilter(typeValues) {
    
  } 

  return {
    
  };
});
