import { createWebHashHistory, createRouter } from 'vue-router';
import { createRoutesCollection } from './helpers';
import Views from '@/views';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Views.HomeView,
  },
  ...createRoutesCollection(Views),
  {
    path: '/:pathMatch(.*)*',
    name: '_TheNotFound',
    component: Views._TheNotFound,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
