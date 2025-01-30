<template>
  <div class="card text-center card-product">
    <div class="card-product__img">
      <img class="card-img" :src="`/images/${item.image}`" :alt="item.title">
    </div>
    <div class="card-body">
      <p>{{ item.country }}</p>
      <RouterLink :to="`/items/${item.id}`" class="btn">
        <h4 class="card-product__title">{{ item.title }}</h4>
      </RouterLink>
      <p class="card-product__price">{{ item.price.toLocaleString('ru') }} руб</p>
      <p><button type="button" class="btn btn-primary" @click="addItem(item)">Заказать</button></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ICardWithCountry } from '@/types';
import type { PropType } from 'vue';
import { RouterLink } from 'vue-router';
import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();
const {addItem} = cartStore

defineProps({
  item: {
    type: Object as PropType<ICardWithCountry>,
    required: true
  }
})
</script>
