<template>
  <div class="login-page">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Имя пользователя:</label>
        <input v-model="username" type="text" id="username" required />
      </div>
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">Войти</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const apiUrl = import.meta.env.VITE_API_URL;
const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const login = async () => {
  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value }),
    });

    if (response.ok) {
      const data = await response.json();
      document.cookie = `token=${data.token}; path=/; max-age=3600`;
      router.push('/admin');
    } else {
      const errorData = await response.json();
      errorMessage.value = errorData.error || 'Неверное имя пользователя или пароль';
    }
  } catch (error) {
    console.error('Ошибка при входе:', error);
    errorMessage.value = 'Произошла ошибка при входе';
  }
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.error {
  color: red;
}
</style>