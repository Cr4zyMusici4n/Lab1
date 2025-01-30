<template>
  <tr>
    <th scope="row">{{ index }}</th>
    <td>{{ item.item.title }}</td>
    <td>{{ item.item.price.toLocaleString('ru') }} руб</td>
    <td><input type="number" class="form-control cart-number" :value="item.count" min="1"
        @input="setCount(item.item.id, +($event.target as HTMLInputElement).value)"></td>
    <td>{{ amount.toLocaleString('ru') }} руб</td>
    <td><button type="button" class="btn btn-danger" @click="removeItem(item.item.id)">Удалить</button></td>
  </tr>
</template>

<script lang="ts" setup>
import type { ItemInCart } from '@/types';
import { computed } from 'vue';
import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();
const { removeItem, setCount } = cartStore;

const props = defineProps<{ item: ItemInCart, index: number }>();

const amount = computed<number>(() => {
  return props.item.count * props.item.item.price;
})
</script>
