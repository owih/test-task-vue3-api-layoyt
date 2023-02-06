<template>
  <LayoutDefault>
    <h1>Layout</h1>
    <section class="section">
      <LayoutTopPanel :topPanelData="topPanelData" />
    </section>
    <section class="section">
      <LayoutBottomPanel />
    </section>
  </LayoutDefault>
</template>

<script setup lang="ts">
import LayoutDefault from '../components/layoutDefault/LayoutDefault.vue';
import LayoutTopPanel from '../components/LayoutTopPanel/LayoutTopPanel.vue';
import LayoutBottomPanel from '../components/LayoutBottomPanel/LayoutBottomPanel.vue';

const topPanelData = [
  {
    id: 0,
    icon: 'dollar',
    text: 'Отчетов сформулировано',
    count: '10600'
  },
  {
    id: 1,
    icon: 'user',
    text: 'Численность работников',
    count: '13783'
  },
  {
    id: 2,
    icon: 'message',
    text: 'Отчетов сформулировано',
    count: '737'
  },
];
</script>

<style scoped>

</style>