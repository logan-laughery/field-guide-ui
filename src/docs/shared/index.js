import Vue from 'vue';
import FgCodeExample from './FgCodeExample.vue';
import FgUsage from './FgUsage.vue';

const Components = {
  FgCodeExample,
  FgUsage,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
