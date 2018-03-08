import './images/favicon.ico';
import './application.scss';

import Vue from 'vue';
import VueRouter from "vue-router";

import routes from './routes';
import AppView from './components/app/app_component';


document.addEventListener("DOMContentLoaded", () => {
  Vue.use(VueRouter);

  const router = new VueRouter({routes: routes});

  new Vue({
    el: '#app',
    router: router,
    render: h => h(AppView)
  });
});
