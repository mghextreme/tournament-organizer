import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Standings from '../views/Standings.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    alias: '/standings',
    name: 'Standings',
    component: Standings,
  },
  {
    path: '/matches',
    name: 'Matches',
    component: () => import(/* webpackChunkName: "matches" */ '../views/Matches.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
