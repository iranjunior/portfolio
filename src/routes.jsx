import About from './components/about';
import Skills from './components/skills';
import Formation from './components/formation';
import Portfolio from './components/portfolio';
import Contate from './components/contact';

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
];
export default Routes;
