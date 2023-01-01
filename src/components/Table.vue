<template>
  <div class="q-pa-md" ref="dataTable">
    <q-table
        class="my-sticky-header-table"
        style="height: 400px"
        :rows="rows"
        :columns="columns"
        row-key="index"
        virtual-scroll
        :rows-per-page-options="[0]"
        :loading="loading"
    />
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {rows, columns, loading} from "../stores/store.js";


// we generate lots of rows here
function reSeedData() {
  rows.value = rows.value.concat(rows.value.slice(0, 30).map(r => ({...r})))
}

// on scroll end/ infinite scroll
onMounted(() => {
  const el = document.querySelector(".q-table__middle");
  // console.log(el);
  el.addEventListener('scroll', () => {
    if (el.offsetHeight + el.scrollTop >= el.scrollHeight) {
      reSeedData();
    }
  })
})


</script>