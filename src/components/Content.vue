<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Content',
};
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
  padding: 0px 8px;
}
</style>
