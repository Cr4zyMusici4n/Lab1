import type { ICardWithCountry, ItemInCart } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
  const items = ref<Record<ICardWithCountry['id'], ItemInCart>>({});

  const addItem = (item: ICardWithCountry) => {
    items.value[item.id] = ({item, count: 1});
  }

  const removeItem = (itemId: string) => {
    delete items.value[itemId];
  }

  const setCount = (itemId: string, count: number) => {
    items.value[itemId].count = count;
  }

  return {
    items,
    addItem,
    removeItem,
    setCount,  
  }
})