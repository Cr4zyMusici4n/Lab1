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
      <CardTable />
    </tbody>
   </table>
</template>

<script lang="ts" setup>
  import CardTable from '@/components/Cart/CardTable.vue';
</script>