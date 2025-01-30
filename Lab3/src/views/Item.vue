<template>
  <section class="site-main mb-5">
    <div class="container">
      <div class="card text-center card-product">
        <div class="card-product__img">
          <img class="card-img" src="/images/paris.jpg" alt="">
        </div>
        <div class="card-body">
          <p>Франция</p>
          <h4 class="card-product__title">Париж</h4>
          <p class="card-product__price">150 000 руб</p>
          <p class="card-product__duration">
            <b>Длительность:</b>
            6 дней / 5 ночей
          </p>
          <div class="card-product__description">
            {{ item.description }}
          </div>
          <p><button type="button" class="btn btn-primary">Заказать</button></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const item = ref(null)

onMounted(async () => {
  const id = route.params.id
  const response = await fetch(`http://localhost:3000/items/${id}`)
  if (response.ok) {
    item.value = await response.json();
    console.log(item.value);
  } else {
    console.error('Failed to fetch item data');
  }
})
</script>