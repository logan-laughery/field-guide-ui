<template>
  <h1 class="text-large">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'TextLarge',
};
</script>

<style scoped>
.text-large {
  font-size: 20px;
  font-weight: 400;
}
</style>
