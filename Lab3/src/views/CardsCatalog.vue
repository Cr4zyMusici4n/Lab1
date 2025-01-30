<script lang="ts" setup>
import Main from '@/components/site-main/Main.vue';
import type { ICard } from '@/main';

const cardArr: ICard[] = [
  { id: 1,
    contry: 'Россия',
    city: 'Москва',
    price: '200 000 руб',
    image: '/images/moscow.jpg'
   },
  { id: 2,
    contry: 'Франция',
    city: 'Париж',
    price: '150 000 руб',
    image: '/images/paris.jpg'
   },
  { id: 3,
    contry: 'Тайланд',
    city: 'Бангкок',
    price: '50 000 руб',
    image: '/images/bangkok.jpg'
   },
  { id: 4,
    contry: 'Тайланд',
    city: 'Пхукет',
    price: '60 000 руб',
    image: '/images/phuket.jpg'
   },
]
</script>

<template>
  <Main :items="cardArr" />
</template>

