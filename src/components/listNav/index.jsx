import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Routes from '../../routes';

import {
  Menu, Item,
} from './styles';

const ListNav = ({ redirect, isMyRoute }) => (
  <Menu>
    {
       Routes.map((route) => (
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

ListNav.propTypes = {
  redirect: PropTypes.func.isRequired,
  isMyRoute: PropTypes.func.isRequired,
};

export default memo(ListNav);
