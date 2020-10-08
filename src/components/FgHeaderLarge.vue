<template>
  <h1 class="header-large">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'FgHeaderLarge',
};
</script>

<style scoped>
.header-large {
  font-size: 28px;
}
.side-bar .content .header-large {
  padding-left: 0px;
}
</style>
