import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  Menu, Item,
} from './styles';

const ListNav = ({ routes, redirect, isMyRoute }) => (
  <Menu>
    {
       routes.map((route) => (
         <Item
           key={route.path}
           onClick={() => redirect(route.path)}
           active={isMyRoute(route.path)}
         >
           {route.nav}
         </Item>
       ))
    }
  </Menu>
);


ListNav.defaultProps = {
  routes: [],
};
ListNav.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    nav: PropTypes.string.isRequired,
    title: PropTypes.string,
    exact: PropTypes.bool,
    component: PropTypes.element,
  })),
  redirect: PropTypes.func.isRequired,
  isMyRoute: PropTypes.func.isRequired,
};

export default memo(ListNav);
