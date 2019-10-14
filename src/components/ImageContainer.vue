<template>
  <div class="image-container">
    <img :src="src"/>
    <div class="caption">
      <slot name="caption"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageContainer',
  props: {
    src: String,
  },
};
</script>

<style scoped>
.image-container {
  width: fit-content;
  display: inline-flex;
  flex-direction: column;
}
.image-container img {
  border-width: 2px;
  border-style: solid;
  width: 100%;
}
</style>
