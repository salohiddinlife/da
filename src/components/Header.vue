<template>
  <header class="header">
      <h2 class="header__logo">ImgBook</h2>
    <div class="routes">
      <ul class="header__list">
        <li v-for="link in pages" :key="link.name">
          <RouterLink :to="link.url" class="header__link">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  props:{
    pages:{
      typeof: Array
    }
  }
};
</script>

<style lang="scss" scoped></style>
