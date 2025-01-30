<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">№</th>
        <th scope="col">Путевка</th>
        <th scope="col">Стоимость</th>
        <th scope="col">Кол-во</th>
        <th scope="col">Сумма</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <CartTableRow v-for="(item, index) in Object.values(items)" :key="index" :item="item" :index="index" />
      <tr>
        <th scope="row" colspan="3">&nbsp;</th>
        <td><b>Итого:</b></td>
        <td>{{ amount.toLocaleString('ru') }} руб</td>
        <td>&nbsp;</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import CartTableRow from '@/components/Cart/CartTableRow.vue';
import { useCartStore } from '@/store/cart';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore)

const amount = computed<number>(() => {
  return Object.values(items.value).reduce<number>((acc, item) => {
    acc += item.count * item.item.price;
    return acc;
  }, 0)
})
</script>