<template>
  <header class="site-header">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <RouterLink to="/" class="navbar-brand site-header-logo">Путевки онлайн</RouterLink>

          <RouterLink to="/cart" class="btn btn-primary">
            Корзина <span class="badge badge-light">{{ cartCount }}</span>
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/store/cart';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);

const cartCount = computed<number>(() => {
  return Object.values(items.value).reduce((acc, item) => {
    acc += item.count
    return acc;
  }, 0)
})
</script>
