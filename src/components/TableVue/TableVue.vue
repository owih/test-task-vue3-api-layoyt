<template>
  <AgGridVue
    class="ag-theme-alpine"
    style="width: 100%; height: 300px;"
    :column-defs="columnDefs.value"
    :row-data="table.value"
    animate-rows="true"
  />
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { useTableStore } from '../../stores/useTableStore.js';
import { AgGridVue } from 'ag-grid-vue3';
import { storeToRefs } from 'pinia';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const tableStore = useTableStore();
const { table } = storeToRefs(tableStore);
const columnDefs = reactive({
  value: [
    { field: 'questionnaire.last_name', headerName: 'ФИО' },
    { field: 'status', headerName: 'Статус' },
    { field: 'finished_at', headerName: 'Дата прохождения' },
    { field: 'report_type', headerName: 'Тип отчета' },
  ],
});

const fetchTableToStore = () => {
  tableStore.getTableFromApiToStore();
};

onMounted(fetchTableToStore);
</script>

<style lang="scss" scoped>
</style>