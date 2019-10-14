import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '../docs/LandingPage.vue';
import ImageContainerDocs from '../docs/ImageContainerDocs.vue';
import HelloWorldDocs from '../docs/HelloWorldDocs.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/Introduction',
      name: 'Introduction',
      component: LandingPage,
    },
    {
      path: '/ImageContainer',
      name: 'ImageContainer',
      component: ImageContainerDocs,
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorldDocs,
    },
  ],
});
