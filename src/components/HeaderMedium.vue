<template>
  <h2 class="header-medium">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'HeaderMedium',
};
</script>

<style scoped>
.header-medium {
  font-size: 20px;
}
</style>
