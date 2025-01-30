<script lang="ts" setup>
import type { ICardWithCountry } from "@/types";
import Card from "./Card.vue";
  
defineProps({
  items: {
    type: Array<ICardWithCountry>,
    required: true
  }
})

</script>

<template>
  <section class="lattest-product-area pb-40 category-list">
    <div class="card-grid">
    
      <Card 
        v-for="item of items"
        :key="item.id" :item="item"
       />

    </div>
  </section>
</template>