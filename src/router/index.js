import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '../docs/LandingPage.vue';
import ImageContainerDocs from '../docs/ImageContainerDocs.vue';
import CardDocs from '../docs/CardDocs.vue';
import TableDocs from '../docs/TableDocs.vue';

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
      name: 'Image Container',
      component: ImageContainerDocs,
    },
    {
      path: '/Card',
      name: 'Card',
      component: CardDocs,
    },
    {
      path: '/Table',
      name: 'Table',
      component: TableDocs,
    },
  ],
});
