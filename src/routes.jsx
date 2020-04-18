import { lazy } from 'react';

const About = lazy(() => import('./components/composes/about'));
const Skills = lazy(() => import('./components/composes/skills'));
const Formation = lazy(() => import('./components/composes/formation'));
const Portfolio = lazy(() => import('./components/composes/portfolio'));
const Contate = lazy(() => import('./components/composes/contact'));

const NotFound = lazy(() => import('./components/simples/erros/notfound'));

const Routes = [
  {
    title: 'Iran Junior',
    nav: 'Sobre',
    path: '/',
    exact: true,
    component: About,
  },
  {
    title: 'Iran Junior - Habilidades',
    nav: 'Habilidades',
    path: '/skills',
    exact: true,
    component: Skills,
  },
  {
    title: 'Iran Junior - Formação',
    nav: 'Formação',
    path: '/formation',
    exact: true,
    component: Formation,
  },
  {
    title: 'Iran Junior - Portifolio',
    nav: 'Portifolio',
    path: '/portfolio',
    exact: true,
    component: Portfolio,
  },
  {
    title: 'Iran Junior - Contato',
    nav: 'Contato',
    path: '/contact',
    exact: true,
    component: Contate,
  },
  {
    title: 'Não encontrado',
    path: '*',
    exact: false,
    component: NotFound,
  },
];
export default Routes;
