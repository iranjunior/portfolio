import About from './components/about';
import Skills from './components/skills';
import Formation from './components/formation';
import Portfolio from './components/portfolio';

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
    exact: false,
    component: Skills,
  },
  {
    title: 'Iran Junior - Formação',
    nav: 'Formação',
    path: '/formation',
    exact: false,
    component: Formation,
  },
  {
    title: 'Iran Junior - Portifolio',
    nav: 'Portifolio',
    path: '/portfolio',
    exact: false,
    component: Portfolio,
  },
];
export default Routes;
