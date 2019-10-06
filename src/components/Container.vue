<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style>
.container {
  display: flex;
  height: 100%;
  width: 100%;
  font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2b2b2b;
  border-color: #2b2b2b;
}
body, html {
  height: 100%;
  width: 100%;
  margin: 0;
  /* background-color: #A6834E; */
  /* background-color: #bb8634ed; */
  /* background-image: url(https://www.transparenttextures.com/patterns/paper-3.png); */
}
</style>
