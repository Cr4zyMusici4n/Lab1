import { createRouter, createWebHistory } from 'vue-router'
import CardCatalog from '../views/CardsCatalog.vue'
import CartView from '../views/CartView.vue';
import Item from '../views/Item.vue';
import Login from '../components/Login.vue';
import AdminPanel from '../components/AdminPanel.vue';
import { isAuthenticated } from '../utils/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path: '/admin',
      component: AdminPanel,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
          
        } else {
          next('/login');
          
        }
      },
    },
    {
      path: '/',
      name: 'home',
      component: CardCatalog,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartView
    },
    {
      path: '/items/:id',
      name: 'Item',
      component: Item
    }
  ],
})

export default router;
