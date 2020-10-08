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

const install = (Vue) => {
  Object.keys(Components).forEach((name) => {
    Vue.component(name, Components[name]);
  });
};

// Automatic installation if Vue has been added to the global scope and file is imported/included.
// - Typically CDN usage.
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// Exports install script if user wants to install framework globally
export default install;

// Named exports for all components if user wants to use components on demand instead of globally.
export { FgHelloWorld };
export { FgSideBar };
export { FgContainer };
export { FgContent };
export { FgHeaderLarge };
export { FgHeaderMedium };
export { FgTextLarge };
export { FgDivider };
export { FgImageContainer };
export { FgCodeContent };
export { FgCard };
export { FgTable };
