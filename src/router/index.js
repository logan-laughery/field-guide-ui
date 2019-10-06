import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '../docs/LandingPage.vue';
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
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorldDocs,
    },
  ],
});
