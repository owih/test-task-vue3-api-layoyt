<template>
  <button :class="$style.root">
    <slot />
  </button>
</template>

<style lang="scss" module>
.root {
  padding: 10px;
  background-color: $primary;
  color: white;
  border: 1px solid transparent;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
  &:hover {
    background-color: transparent;
    border-color: $gray;
    color: $dark;
  }
}
</style>