import Vue from 'vue';
import VueRouter from 'vue-router';
import Messaging from '../views/Messaging.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Messaging',
    component: Messaging,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
