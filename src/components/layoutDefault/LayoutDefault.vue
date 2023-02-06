<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <HeaderVue />
    </div>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script setup>
import HeaderVue from '../HeaderVue/HeaderVue.vue';
</script>

<style lang="scss" module>
.root {
  .header {
    margin-bottom: 32px;
  }
}
</style>