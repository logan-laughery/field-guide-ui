<template>
  <img class="field-image" :src="src"/>
</template>

<script>
export default {
  name: 'FieldImage',
  props: {
    src: String,
  },
};
</script>

<style scoped>
.field-image {
  border-width: 2px;
  border-style: solid;
}
</style>
