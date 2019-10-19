<template>
  <div class="side-bar" :class="{ mobile: isMobile }">
    <template v-if="!isMobile">
      <slot></slot>
    </template>
    <template v-else>
      <div class="skinny-sidebar">
        <div class="page">{{page}}</div>
        <div class="title">{{title}}</div>
        <span class="menu-icon" v-on:click="toggleExpanded">
          <Menu/>
        </span>
      </div>
      <div class="off-screen">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import Menu from 'vue-material-design-icons/Menu.vue';

export default {
  name: 'SideBar',
  components: {
    Menu,
  },
  props: {
    title: String,
    page: String,
    mobile: Boolean,
    toggle: Function,
  },
  data: () => ({
    width: window.innerWidth,
    expanded: false,
  }),
  created() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
    });
  },
  computed: {
    isMobile() {
      return this.width < 600;
    },
  },
  methods: {
    toggleExpanded() {
      this.toggle();
    },
  },
};
</script>

<style scoped>
.side-bar {
  height: 100%;
  width: 185px;
  min-width: 185px;
  padding: 0px 0px;
  border-right: 4px solid;
}
.side-bar.mobile {
  min-width: 40px;
  max-width: 40px;
  background-color: #2b2b2b;
  border-color: #2b2b2b;
}
.skinny-sidebar {
  color: white;
}
.skinny-sidebar .menu-icon{
  font-size: 40px;
  bottom: 4px;
  left: 0;
  position: absolute;
  transform: rotate(-45deg);
  width: 40px;
  height: 40px;
}
.skinny-sidebar .title {
  color: white;
  font-size: 28px;
  font-weight: 600;
  position: absolute;
  background: none;
  transform-origin: top left;
  padding-top: 7px;
  padding-left: 12px;
  transform: rotate(-90deg);
  bottom: 0;
}
.skinny-sidebar .page {
  color: white;
  font-size: 28px;
  font-weight: 600;
  position: absolute;
  left: 0;
  transform-origin: top right;
  padding-top: 7px;
  padding-right: 10px;
  transform: translateX(-100%) rotate(-90deg);
}
.off-screen {
  left: 0;
  top: 0;
  width: 180px;
  position: absolute;
  transform: translateX(-180px);
  height: 108%;
  max-height: 108%;
  background-color: #2b2b2b;
  color: white;
}
</style>
