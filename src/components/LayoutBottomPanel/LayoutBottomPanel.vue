<template>
  <div :class="$style.root">
    <div :class="$style.wrapper">
      <div :class="$style.item">
        <div :class="$style.controls">
          <div :class="$style.row">
            <div :class="$style.col">
              <UICheckbox
                :id="0"
                v-model="firstCheckbox"
              >
                Заполните информацию о компании
              </UICheckbox>
            </div>
            <div :class="$style.col">
              <UIButton @click="onClick">
                Перейти
              </UIButton>
            </div>
          </div>
        </div>
        <div :class="$style.text">
          Это создаст более привлекательный образ компании и позволит вашим сотрудникам убедиться, что все идет как нужно.
        </div>
      </div>
      <div :class="$style.item">
        <div :class="$style.controls">
          <div :class="$style.row">
            <div :class="$style.col">
              <UICheckbox
                :id="1"
                v-model="secondCheckbox"
              >
                Создайте сотрудника
              </UICheckbox>
            </div>
            <div :class="$style.col">
              <UIButton @click="onClick">
                Перейти
              </UIButton>
            </div>
          </div>
        </div>
        <div :class="$style.text">
          Это создаст более привлекательный образ компании и позволит вашим сотрудникам убедиться, что все идет как нужно.
        </div>
      </div>
    </div>
    <div :class="$style.preview">
      {{ `Первый чекбокс: ${ firstCheckbox }` }}
      <br>
      {{ `Второй чекбокс: ${ secondCheckbox }` }}
    </div>
  </div>
</template>

<script setup>
import UIButton from '../UI/UIButton/UIButton.vue';
import UICheckbox from '../UI/UIButton/UICheckbox.vue';
import { ref } from 'vue';

const firstCheckbox = ref(false);
const secondCheckbox = ref(true);
const onClick = () => {
  console.log('click');
};
</script>

<style lang="scss" module>
.root {
  .item {
    padding: 16px 0;
    border-top: 1px solid $gray;
    &:last-child {
      border-bottom: 1px solid $gray;
    }
  }
  .controls {
    padding: 0 0 16px 8px;
    border-bottom: 1px solid $gray;
  }
  .text {
    padding: 16px 0 0 16px;
    color: $gray;
  }
  .row {
    display: flex;
    flex-direction: column;
    margin: -8px;

    @media (min-width: $md) {
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    }
  }
  .col {
    padding: 8px;
  }
  .preview {
    margin-top: 32px;
  }
}
</style>