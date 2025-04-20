<script lang="ts" setup>
import Main from '@/components/site-main/Main.vue';
import type { ICard, ICardWithCountry, ICountry } from '@/types';
import { computed, onBeforeMount, ref } from 'vue';

const cardArr = ref<ICard[]>([]);
const countryArr = ref<ICountry[]>([]);

const cardsWithCountry = computed(() => {
  if (cardArr.value.length === 0 || countryArr.value.length === 0) {
    return [];
  }
  return cardArr.value.map<ICardWithCountry>((item) => {
    return { ...item, country: countryArr.value.find((country) => item.country_id === country.id)?.title ?? '' }
  })
})

onBeforeMount(async () => {
  const response = await fetch('http://localhost:3000/items')
  if (!response.ok) {
    console.error('Failed to fetch items data');
    return;
  }
  cardArr.value = await response.json()
})

onBeforeMount(async () => {
  const response = await fetch('http://localhost:3000/countries')
  if (!response.ok) {
    console.error('Failed to fetch countries data');
    return;
  }
  countryArr.value = await response.json()
}) 
</script>

<template>
  <Main :items="cardsWithCountry" />
</template>
