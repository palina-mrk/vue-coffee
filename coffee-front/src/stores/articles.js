import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import apolloClient from "../apollo";
import gql from "graphql-tag";

export const useArticlesStore = defineStore("articles", () => {
  const isLoaded = ref(false);
  const articles = reactive([]);
  const tags = reactive([]);

  function loadCatalog() {
    apolloClient
      .query({
        query: gql`
          {
            articles {
              id
              title
              description
              text
              author
              tag
              date
            }
          }
        `,
      })
      .then((result) => {
        result.data.articles.forEach((el) => {
          articles.push(el);
          if (!tags.includes(el.tag)) tags.push(el.tag);
        });
        isLoaded.value = true;
      });
  }

  return {
    isLoaded,
    articles,
    tags,
  };
});
