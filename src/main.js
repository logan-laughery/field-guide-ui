import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import 'vue-material-design-icons/styles.css';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueHighlightJS);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
