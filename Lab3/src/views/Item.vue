<template>
  <section class="site-main mb-5">
    <div class="container">
      <div v-if="item" class="card text-center card-product">
        <div class="card-product__img">
          <img class="card-img" :src="`/images/${item.image}`" :alt="item.title">
        </div>
        <div class="card-body">
          <p>{{ item.country }}</p>
          <h4 class="card-product__title">{{ item.title }}</h4>
          <p class="card-product__price">{{ item.price }} руб</p>
          <p class="card-product__duration">
            <b>Длительность:</b>
            {{ item.duration }} дней
          </p>
          <div class="card-product__description" v-html="itemDescription">
          </div>
          <p><button type="button" class="btn btn-primary" @click="addItem(item)">Заказать</button></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ICardWithCountry, ICountry } from '@/types';
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();
const { addItem } = cartStore;
const apiUrl = import.meta.env.VITE_API_URL;


const route = useRoute()
const item = ref<ICardWithCountry | null>(null);

const itemDescription = computed<string | undefined>(() => {
  return item.value?.description.replace(/\\n/g, '<br />')
})

onMounted(async () => {
  const id = route.params.id
  const cardResponse = await fetch(`${apiUrl}/items/${id}`)

  if (!cardResponse.ok) {
    console.error('Failed to fetch item data');
    return;
  }

  const itemData: ICardWithCountry = await cardResponse.json();

  const countryResponse = await fetch(`${apiUrl}/countries/${itemData.country_id}`)
  if (!countryResponse.ok) {
    console.error('Failed to fetch item data');
    return;
  }

  const countryData: ICountry = await countryResponse.json();
  itemData.country = countryData.title;
  item.value = itemData;
})
</script>
