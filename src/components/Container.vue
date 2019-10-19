<template>
  <div class="container" :class="{expanded: expanded}">
    <template v-if="mobile">
      <slot
        name="sidebar"
        :close="close"
        :toggle="toggle"
      />
      <slot name="content"/>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Container',
  data: () => ({
    width: window.innerWidth,
    expanded: false,
  }),
  props: {
    title: String,
    mobile: Boolean,
  },
  created() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.close();
    });
  },
  computed: {
    isMobile() {
      return this.width < 600;
    },
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
    close() {
      this.expanded = false;
    },
  },
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
  overflow: hidden;
  /* background-color: #A6834E; */
  /* background-color: #bb8634ed; */
  /* background-image: url(https://www.transparenttextures.com/patterns/paper-3.png); */
}
.container.expanded {
  transform: translateX(180px);
}
.container {
  transition-timing-function: ease-out;
  transition: transform .2s;
}
</style>
