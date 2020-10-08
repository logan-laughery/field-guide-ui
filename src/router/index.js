import Vue from 'vue';
import Router from 'vue-router';
import FgLandingPage from '../docs/FgLandingPage.vue';
import FgImageContainerDocs from '../docs/FgImageContainerDocs.vue';
import FgCardDocs from '../docs/FgCardDocs.vue';
import FgTableDocs from '../docs/FgTableDocs.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: FgLandingPage,
    },
    {
      path: '/Introduction',
      name: 'Introduction',
      component: FgLandingPage,
    },
    {
      path: '/FgImageContainer',
      name: 'Image Container',
      component: FgImageContainerDocs,
    },
    {
      path: '/FgCard',
      name: 'Card',
      component: FgCardDocs,
    },
    {
      path: '/FgTable',
      name: 'Table',
      component: FgTableDocs,
    },
  ],
});
