import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';
import SideBar from './SideBar.vue';
import Container from './Container.vue';
import Content from './Content.vue';
import HeaderLarge from './HeaderLarge.vue';
import HeaderMedium from './HeaderMedium.vue';
import TextLarge from './TextLarge.vue';
import Divider from './Divider.vue';

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
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
