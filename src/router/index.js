import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView';
import CadastrarView from '../views/CadastrarView';
import VisualizarView from '../views/VisualizarView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: CadastrarView,
  },
  {
    path: '/visualizar',
    name: 'visualizar',
    component: VisualizarView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
