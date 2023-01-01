<template>
  <Navbar/>

  <div class="main">

    <Hero/>

    <CodeEditor v-model="code"/>

    <div class="row items-center q-mt-lg">
      <q-select filled v-model="query" :options="options" label="Select a query" style="width: 250px"/>
      <q-btn @click="runQuery" class="q-mx-lg" round color="black" icon="mdi-play"/>
      <q-btn @click="clearQuery" class="q-ml-auto" color="red" label="Clear Query"/>
    </div>
    <TableSkeleton v-if="loading"/>
    <Table v-if="rows[0] && columns[0]"/>


  </div>
</template>
<script setup>
import {ref, watch, defineAsyncComponent} from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import CodeEditor from "./components/CodeEditor.vue";

const Table = defineAsyncComponent(() => import('./components/Table.vue'));
const TableSkeleton = defineAsyncComponent(() => import('./components/TableSkeleton.vue'));
// import Table from "./components/Table.vue";
// import TableSkeleton from "./components/TableSkeleton.vue";
import {
  rows,
  columns,
  loading,
  seedTreats,
  seedTodos,
  seedUsers,
  seedProducts,
  resetRowsAndColumns
} from "./stores/store.js";


const query = ref(null);
const code = ref('');
const options = [
  'Treats', 'Todos', 'Users'
]

function runQuery() {
  if (query.value === "Treats") {
    seedTreats()
  }
  if (query.value === "Todos") {
    seedTodos()
  }
  if (query.value === "Users") {
    seedUsers()
  }
}

function clearQuery() {
  resetRowsAndColumns();
  code.value = "";
}

watch(query, () => {
  if (query.value === "Treats") {
    code.value = "SELECT * FROM Treats;"
  }
  if (query.value === "Todos") {
    code.value = "SELECT * FROM Todos LIMIT 30;"
  }
  if (query.value === "Users") {
    code.value = "SELECT * FROM Users LIMIT 30;"
  }
})
</script>

<style scoped>
.main {
  width: 50vw;
  margin: auto;
}


</style>