<template>
  <header :class="$style.root">
    <div class="container">
      <nav>
        <ul :class="$style.list">
          <li
            v-for="item in navigationList"
            :key="item.id"
            :class="$style.item"
          >
            <RouterLink
              class="link"
              :to="item.url"
            >
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const navigationList = [
  {
    id: 0,
    url: '/',
    name: 'Home'
  },
  {
    id: 1,
    url: '/table',
    name: 'Table'
  },
  {
    id: 2,
    url: '/layout',
    name: 'Layout'
  },
];
</script>

<style lang="scss" module>
.root {
  padding: 16px 0;
  border-bottom: 1px solid $gray;
  .list {
    display: flex;
    padding: 0;
    margin: -8px;
    list-style: none;
  }
  .item {
    display: inline-block;
    padding: 8px;
  }
}
</style>