import Vue from 'vue';
import FgHelloWorld from './FgHelloWorld.vue';
import FgSideBar from './FgSideBar.vue';
import FgContainer from './FgContainer.vue';
import FgContent from './FgContent.vue';
import FgHeaderLarge from './FgHeaderLarge.vue';
import FgHeaderMedium from './FgHeaderMedium.vue';
import FgTextLarge from './FgTextLarge.vue';
import FgDivider from './FgDivider.vue';
import FgImageContainer from './FgImageContainer.vue';
import FgCodeContent from './FgCodeContent.vue';
import FgCard from './FgCard.vue';
import FgTable from './FgTable.vue';

require('typeface-roboto-condensed');

const Components = {
  FgHelloWorld,
  FgSideBar,
  FgContainer,
  FgContent,
  FgHeaderLarge,
  FgHeaderMedium,
  FgTextLarge,
  FgDivider,
  FgImageContainer,
  FgCodeContent,
  FgCard,
  FgTable,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
