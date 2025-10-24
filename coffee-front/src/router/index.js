import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoffeeView from '../views/CoffeeView.vue'
import TeaView from '../views/TeaView.vue'
import VendingView from '../views/VendingView.vue'
import HealthyView from '../views/HealthyView.vue'
import CartView from '../views/CartView.vue'
import ContactsView from '../views/ContactsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Домашняя страница',
      },
    },
    {
      path: '/coffee',
      name: 'catalog-coffee',
      component: CoffeeView,
      meta: {
        title: 'Свежеобжаренный кофе',
      },
    },
    {
      path: '/tea',
      name: 'catalog-tea',
      component: CoffeeView,
      meta: {
        title: 'Чай и кофейные напитки',
      },
    },
    {
      path: '/vending',
      name: 'catalog-vending',
      component: VendingView,
      meta: {
        title: 'Продукция для вендинга',
      },
    },
    {
      path: '/healthy',
      name: 'catalog-healthy',
      component: HealthyView,
      meta: {
        title: 'Здоровое питание',
      },
    },
    {
      path: '/home',
      redirect: { name: 'home' },
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      meta: {
        title: 'Корзина',
      },
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
      meta: {
        title: 'Контакты',
      },
    },/*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
    },
    {
      path: '/posts/:postId',
      name: 'post',
      component: () => import('../views/Post.vue'),
      children: [
        {
          path: 'comments/:commentId',
          component: () => import('../components/PostComment.vue'),
          name: 'post.comment',
          props: true,
        },
      ],
    },*/
  ],
  scrollBehavior: () => ({
    top: 0,
  }),
})
/*
router.beforeEach(async (to, from) => {
  console.log(`going to `, to)
})*/

export default router