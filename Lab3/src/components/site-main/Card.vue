<script lang="ts" setup>
import type { ICard } from '@/main';
import router from '@/router';
import type { PropType } from 'vue';

defineProps({
  item: {
    type: Object as PropType<ICard>,
    required: true
  }
})

function goToItem(id: number) {
  router.push(`/items/${id}`);
}
</script>

<template>
  <div class="card text-center card-product">
    <div class="card-product__img">
      <img class="card-img" :src="item.image" :alt="item.city">
    </div>
    <div class="card-body">
      <p>{{ item.contry }}</p>
      <a class="btn" @click="goToItem(item.id)">
        <h4 class="card-product__title">{{ item.city }}</h4>
      </a>
      <p class="card-product__price">{{ item.price }}</p>
      <p><button type="button" class="btn btn-primary">Заказать</button></p>
    </div>
  </div>
</template>