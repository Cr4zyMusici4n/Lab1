<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
</script>
