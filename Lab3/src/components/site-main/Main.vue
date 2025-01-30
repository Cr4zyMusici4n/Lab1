<script setup lang="ts">
import type { ICard } from "@/main";
import CardWrapper from "./CardWrapper.vue";
  defineProps({
    items: {
      type: Array<ICard>,
      required: true
    }
  })
</script>

<template>
  <section class="site-main mb-5">
  <div class="container">
   <div class="row">
    <div class="col-xl-3 col-lg-4 col-md-5">
     <div class="filter-sidebar">
      <div class="filter-sidebar-header">Страны:</div>
      <div class="filter-sidebar-content">
       <div class="form-check">
        <input class="form-check-input" type="radio" name="country" id="country-0" value="0" checked>
        <label class="form-check-label" for="country-0">
         Все (21)
        </label>
       </div>
       <div class="form-check">
        <input class="form-check-input" type="radio" name="country" id="country-1" value="1">
        <label class="form-check-label" for="country-1">
         Россия (10)
        </label>
       </div>
       <div class="form-check">
        <input class="form-check-input" type="radio" name="country" id="country-2" value="2">
        <label class="form-check-label" for="country-2">
         Франция (5)
        </label>
       </div>
       <div class="form-check">
        <input class="form-check-input" type="radio" name="country" id="country-3" value="3" >
        <label class="form-check-label" for="country-3">
         Тайланд (6)
        </label>
       </div>
      </div>
     </div>
    </div>
    <div class="col-xl-9 col-lg-8 col-md-7">
     <div class="filter-bar">
      <div>
       <div class="input-group">
        <input type="text" class="form-control" placeholder="Название города">
        <div class="input-group-append">
         <button class="btn btn-outline-secondary" type="button" id="button-addon2">Искать</button>
        </div>
       </div>
      </div>
     </div>

     <CardWrapper :items="items" />

    </div>
   </div>
  </div>
 </section>
</template>