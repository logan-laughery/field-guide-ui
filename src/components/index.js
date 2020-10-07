import HelloWorld from './HelloWorld.vue';
import SideBar from './SideBar.vue';
import Container from './Container.vue';
import Content from './Content.vue';
import HeaderLarge from './HeaderLarge.vue';
import HeaderMedium from './HeaderMedium.vue';
import TextLarge from './TextLarge.vue';
import Divider from './Divider.vue';
import ImageContainer from './ImageContainer.vue';
import CodeContent from './Code.vue';
import Card from './Card.vue';
import Table from './Table.vue';

require('typeface-roboto-condensed');

const Components = {
  HelloWorld,
  SideBar,
  Container,
  Content,
  HeaderLarge,
  HeaderMedium,
  TextLarge,
  Divider,
  ImageContainer,
  CodeContent,
  Card,
  Table,
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
export { HelloWorld };
export { SideBar };
export { Container };
export { Content };
export { HeaderLarge };
export { HeaderMedium };
export { TextLarge };
export { Divider };
export { ImageContainer };
export { CodeContent };
export { Card };
export { Table };
