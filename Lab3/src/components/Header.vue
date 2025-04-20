<template>
  <header class="site-header">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <!-- Логотип -->
          <RouterLink to="/" class="navbar-brand site-header-logo">Путевки онлайн</RouterLink>

          <!-- Навигация -->
          <div class="navbar-nav ml-auto">
            <RouterLink to="/login" class="nav-link" v-if="!isAuthenticated">Вход</RouterLink>
            <RouterLink to="/admin" class="nav-link" v-if="isAuthenticated">Админ-панель</RouterLink>
            <button v-if="isAuthenticated" @click="logout" class="btn btn-outline-secondary ml-2">Выйти</button>
          </div>

          <!-- Корзина -->
          <RouterLink to="/cart" class="btn btn-primary">
            Корзина <span class="badge badge-light">{{ cartCount }}</span>
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/store/cart';
import { storeToRefs } from 'pinia';

// Импортируем функцию для проверки авторизации
import { isAuthenticated as checkAuth } from '@/utils/auth';

export default {
  setup() {
    const cartStore = useCartStore();
    const { items } = storeToRefs(cartStore);

    // Состояние авторизации
    const isAuthenticated = ref(checkAuth());

    // Вычисляем количество товаров в корзине
    const cartCount = computed<number>(() => {
      return Object.values(items.value).reduce((acc, item) => {
        acc += item.count;
        return acc;
      }, 0);
    });

    // Роутер для перенаправления
    const router = useRouter();

    // Функция выхода
    const logout = () => {
      document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      isAuthenticated.value = false;
      router.push('/login');
    };

    return {
      isAuthenticated,
      cartCount,
      logout,
    };
  },
};
</script>
