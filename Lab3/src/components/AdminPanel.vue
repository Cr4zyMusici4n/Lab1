<template>
  <div class="admin-panel">
    <h2>Панель администратора</h2>
    <p v-if="loading">Загрузка данных...</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <ul v-if="items.length > 0">
      <li v-for="item in items" :key="item.id">
        {{ item.title }} - {{ item.price }} ₽
      </li>
    </ul>
    <p v-if="items.length === 0 && !loading">Нет доступных товаров.</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const apiUrl = import.meta.env.VITE_API_URL;
const items = ref([]);
const loading = ref(true);
const errorMessage = ref('');

onMounted(async () => {
  try {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (!token) {
      errorMessage.value = 'Токен не найден. Пожалуйста, войдите снова.';
      return;
    }

    const response = await fetch(`${apiUrl}/items`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.ok) {
      const data = await response.json();
      items.value = data;
    } else {
      const errorData = await response.json();
      errorMessage.value = errorData.error || 'Ошибка при загрузке данных';
    }
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    errorMessage.value = 'Произошла ошибка при загрузке данных';
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.admin-panel {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.error {
  color: red;
}
</style>