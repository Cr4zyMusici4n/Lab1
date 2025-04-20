<script setup lang="ts">
import type { ICardWithCountry } from "@/types";
import CardWrapper from "./CardWrapper.vue";
import { ref, onMounted, watch } from "vue";

const apiUrl = import.meta.env.VITE_API_URL;
const search = ref('');
const country = ref('0');
const filteredItems = ref<ICardWithCountry[]>([]);

const fetchFilteredItems = async () => {
  try {
    const response = await fetch(`${apiUrl}/items/filter?search=${search.value}&country=${country.value}`);
    const data = await response.json();
    filteredItems.value = data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
};

watch([search, country], () => {
  fetchFilteredItems();
});

onMounted(() => {
  fetchFilteredItems();
});
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
                <input v-model="country" class="form-check-input" type="radio" name="country" id="country-0" value="0">
                <label class="form-check-label" for="country-0">
                  Все
                </label>
              </div>
              <div class="form-check">
                <input v-model="country" class="form-check-input" type="radio" name="country" id="country-1" value="1">
                <label class="form-check-label" for="country-1">
                  Россия
                </label>
              </div>
              <div class="form-check">
                <input v-model="country" class="form-check-input" type="radio" name="country" id="country-2" value="2">
                <label class="form-check-label" for="country-2">
                  Франция
                </label>
              </div>
              <div class="form-check">
                <input v-model="country" class="form-check-input" type="radio" name="country" id="country-3" value="3">
                <label class="form-check-label" for="country-3">
                  Тайланд
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-8 col-md-7">
          <div class="filter-bar">
            <div>
              <div class="input-group">
                <input v-model="search" type="text" class="form-control" placeholder="Название города">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" @click="fetchFilteredItems">Искать</button>
                </div>
              </div>
            </div>
          </div>

          <CardWrapper :items="filteredItems" />
        </div>
      </div>
    </div>
  </section>
</template>