<template>
  <div class="code-content">
    <pre v-highlightjs="code"><code class="xml"></code></pre>
  </div>
</template>

<script>
import 'highlight.js/styles/default.css';

export default {
  name: 'CodeContent',
  props: {
    code: String,
  },
};
</script>

<style scoped>
.code-content {
  border-width: 2px;
  border-style: solid;
  padding: 0px 10px;
}
.code-content {
  background-color: #eee;
}
</style>
