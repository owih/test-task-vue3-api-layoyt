<template>
  <div :class="$style.root">
    <input
      :id="id"
      type="checkbox"
      :checked="modelValue"
      @change="onChange"
    >
    <label :for="id">
      <slot />
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: false,
    default: false,
  },
  id: {
    type: Number,
    required: true,
  }
});
const emits = defineEmits(['update:modelValue']);
const onChange = (e) => {
  emits('update:modelValue', e.target.checked);
};

</script>

<style lang="scss" module>
.root {
  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
    pointer-events: none;
  }
  label {
    padding-left: 32px;
    position: relative;
    display: inline-block;
    &:before {
      content: '';
      width: 20px;
      height: 20px;
      border: 1px solid $gray;
      display: block;
      position: absolute;
      left: 0;
    }
  }
  input:checked ~ label {
    &:before {
      border-color: $primary;
      border-width: 2px;
    }
    &:after {
      content: '';
      position: absolute;
      left: 6px;
      top: 3px;
      display: inline-block;
      transform: rotate(45deg);
      height: 10px;
      width: 8px;
      border-bottom: 2px solid $primary;
      border-right: 2px solid $primary;
    }
  }
}
</style>