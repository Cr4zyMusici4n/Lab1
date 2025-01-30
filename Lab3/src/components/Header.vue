<template>
  <header class="site-header">
   <div class="main_menu">
    <nav class="navbar navbar-expand-lg navbar-light">
     <div class="container">
      <a class="navbar-brand site-header-logo" href="/">Путевки онлайн</a>

      <a class="btn btn-primary" @click="goToCart">
       Корзина <span class="badge badge-light">4</span>
      </a>
     </div>
    </nav>
   </div>
  </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function goToCart() {
  router.push('/cart')
}
</script>
