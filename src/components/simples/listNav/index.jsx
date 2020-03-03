import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  Menu, Item,
} from './styles';

const ListNav = ({
  routes, redirect, isMyRoute, keyPressAction,
}) => (
  <Menu>
    {
       routes.map((route) => (
         <Item
           tabIndex={0}
           aria-label={route.nav}
           key={route.path}
           onKeyPress={((event) => keyPressAction(event, redirect, route.path))}
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
  keyPressAction: PropTypes.func.isRequired,
};

export default memo(ListNav);
