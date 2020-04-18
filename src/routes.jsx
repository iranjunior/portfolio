import About from './components/composes/about';
import Skills from './components/composes/skills';
import Formation from './components/composes/formation';
import Portfolio from './components/composes/portfolio';
import Contate from './components/composes/contact';

import NotFound from './components/simples/erros/notfound';

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
