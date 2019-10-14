import Vue from 'vue';
import CodeExample from './CodeExample.vue';
import Usage from './Usage.vue';

const Components = {
  CodeExample,
  Usage,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
