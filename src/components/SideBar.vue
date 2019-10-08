<template>
  <div class="side-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
};
</script>

<style scoped>
.side-bar {
  height: 100%;
  width: calc(250px - 16px);
  padding: 0px 0px;
  border-right: 4px solid;
}
</style>
