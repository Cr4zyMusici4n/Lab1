import { createRouter, createWebHistory } from 'vue-router'
import CardCatalog from '../views/CardsCatalog.vue'
import CartView from '../views/CartView.vue';
import Item from '../views/Item.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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

export default router
