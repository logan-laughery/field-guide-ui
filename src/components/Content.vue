<template>
  <div class="scrollbox">
    <div class="content" v-bind:class="{ padding: padding }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    padding: Boolean,
  },
};
</script>

<style scoped>
.scrollbox {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: overlay;
}
.content {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding-right: 10px;
  padding-left: 10px;
  max-height: 100%;
  display: inline-block;
}
.scrollbox::-webkit-scrollbar {
  width:8px;
}
.scrollbox::-webkit-scrollbar * {
  background:transparent;
}
.scrollbox::-webkit-scrollbar-thumb {
  background:#2b2b2bd1 !important;
}
.scrollbox {
  visibility: hidden;
}
.content,
.scrollbox:hover,
.scrollbox:active,
.scrollbox:focus {
  visibility: visible;
}
.content.padding {
  padding: 0 30px;
}
</style>
