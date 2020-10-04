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
.image-container .caption {
  margin-left: 2px;
  margin-top: 2px;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: flex-end;
}
</style>
