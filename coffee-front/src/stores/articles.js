import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import apolloClient from "../apollo";
import gql from "graphql-tag";

export const useArticlesStore = defineStore("articles", () => {
  const isLoaded = ref(false);
  const articles = reactive([]);
  const tags = reactive([]);

  function loadArticles() {
    apolloClient
      .query({
        query: gql`
          {
            articles {
              id
              title
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
        console.log(articles)
      });
  }

  function getFullInfo(itemId) {
    return articles.find((i) => i.id === itemId);
  }

  return {
    loadArticles,
    isLoaded,
    getFullInfo,
    articles,
    tags,
  };
});
