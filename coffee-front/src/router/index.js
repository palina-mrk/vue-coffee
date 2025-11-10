import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatalogView from "../views/CatalogView.vue";
import CartView from "../views/CartView.vue";
import ContactsView from "../views/ContactsView.vue";
import PersonalView from "../views/PersonalView.vue";
import ProductView from "../views/ProductView.vue";
import BlogView from "../views/BlogView.vue";
import ArticleView from "../views/ArticleView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Главная",
      },
    },
    {
      path: "/catalogs",
      name: "catalogs",
      component: HomeView,
      meta: {
        title: "Каталог товаров",
      },
    },
    {
      path: "/sales",
      name: "sales",
      component: HomeView,
      meta: {
        title: "Товары со скидкой",
      },
    },
    {
      path: "/catalogs/coffee",
      name: "coffee",
      component: CatalogView,
      meta: {
        title: "Свежеобжаренный кофе",
      },
    },
    {
      path: "/catalogs/tea",
      name: "tea",
      component: CatalogView,
      meta: {
        title: "Чай и кофейные напитки",
      },
    },
    {
      path: "/catalogs/vending",
      name: "vending",
      component: CatalogView,
      meta: {
        title: "Продукция для вендинга",
      },
    },
    {
      path: "/catalogs/healthy",
      name: "healthy",
      component: CatalogView,
      meta: {
        title: "Здоровое питание",
      },
    },
    {
      path: "/home",
      redirect: { name: "home" },
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
      meta: {
        title: "Корзина",
      },
    },
    {
      path: "/personal",
      name: "personal",
      component: PersonalView,
      meta: {
        title: "Личный кабинет",
      },
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView,
      meta: {
        title: "Контакты",
      },
    },
    {
      path: "/catalogs/:productID",
      name: "catalogs.product",
      component: ProductView,
      meta: {
        title: "Карточка товара",
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
      meta: {
        title: "Блог",
      },
    },
    {
      path: "/blog/:articleID",
      name: "blog.article",
      component: ArticleView,
      meta: {
        title: "Статья блога",
      },
    },
    {
      path: "/news",
      name: "news",
      component: BlogView,
      meta: {
        title: "Новости блога",
      },
    },
  ],
  scrollBehavior(to) {
    if (to.name == "catalogs") {
      return {
        el: "#catalogs",
        top: "180",
        behavior: "smooth",
      };
    } else if (to.name == "sales") {
      return {
        el: "#sales",
        top: "180",
        behavior: "smooth",
      };
    } else if (to.name == "news") {
      return {
        el: "#news",
        top: "180",
        behavior: "smooth",
      };
    } 
    else if (to.hash) {
      return {
        el: to.hash,
        top: "100",
        behavior: "smooth",
      };
    }
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});
/*
router.beforeEach(async (to, from) => {
  console.log(`going to `, to)
})*/

export default router;
