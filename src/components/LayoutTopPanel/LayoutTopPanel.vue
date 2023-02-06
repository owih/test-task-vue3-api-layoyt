<template>
  <div :class="$style.root">
    <div :class="$style.row">
      <div
        v-for="item in topPanelData"
        :key="item.id"
        :class="$style.col"
      >
        <div :class="$style.item">
          <div :class="$style.icon">
            <font-awesome-icon
              :icon="`fa-solid fa-${item.icon}`"
              size="3x"
            />
          </div>
          <div :class="$style.text">
            {{ item.text }}
          </div>
          <div :class="$style.count">
            {{ item.count }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  topPanelData: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss" module>
.root {
  border-radius: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  padding: 16px 32px;
  .row {
    display: flex;
    margin: -16px -32px;
    align-items: center;
    flex-direction: column;
    @media (min-width: $md) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  .col {
    padding: 16px 32px;
    @media (min-width: $md) {
      width: 50%;
    }
    @media (min-width: $lg) {
      width: 33.33333%;
    }
    @media (min-width: $xl) {
      width: 25%;
    }
  }
  .item {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    @media (min-width: $md) {
      text-align: start;
      flex-direction: row;
    }
    @media (min-width: $xl) {
      justify-content: space-between;
    }
  }
  .text {
    padding: 8px;
    font-size: 14px;
    color: $gray;
    word-wrap: anywhere;
  }
  .icon {
    padding: 8px;
    color: $primary;
  }
  .count {
    flex: 0 0 80px;
    text-align: end;
    padding: 8px;
  }
}
</style>