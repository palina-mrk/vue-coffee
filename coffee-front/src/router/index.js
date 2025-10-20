import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoffeeView from '../views/CoffeeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home page',
      },
    },
    {
      path: '/coffee',
      name: 'catalog-coffee',
      component: CoffeeView,
      meta: {
        title: 'Catalog coffee page',
      },
    },
    {
      path: '/home',
      redirect: { name: 'home' },
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