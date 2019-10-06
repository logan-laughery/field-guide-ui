<template>
  <h1 class="header-large">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'HeaderLarge',
};
</script>

<style scoped>
.header-large {
  font-size: 28px;
}
</style>
