import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Menu, Dropdown, Item,
} from './styles';

const DropdownComponent = ({
  routes, redirect, isMyRoute, keyPressAction,
}) => {
  const [active, setActive] = useState('hidden');

  const toggleDropdown = () => {
    setActive((value) => (value === 'hidden' ? 'show' : 'hidden'));
  };
  return (
    <>
      <Menu active={active}>
        <Dropdown>
          {
              routes.map((route) => (
                <Item
                  tabIndex={0}
                  aria-label={route.nav}
                  key={route.path}
                  onKeyPress={(event) => keyPressAction(event, redirect, route.path)}
                  onClick={() => redirect(route.path)}
                  active={isMyRoute(route.path)}
                >
                  {route.nav}
                </Item>
              ))
            }
          <Item type="blank" />
          <Item onClick={toggleDropdown}>Menu</Item>
        </Dropdown>
      </Menu>
    </>
  );
};

DropdownComponent.defaultProps = {
  routes: [],
};
DropdownComponent.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    nav: PropTypes.string.isRequired,
    title: PropTypes.string,
    exact: PropTypes.bool,
    component: PropTypes.element,
  })),
  redirect: PropTypes.func.isRequired,
  keyPressAction: PropTypes.func.isRequired,
  isMyRoute: PropTypes.func.isRequired,
};
export default DropdownComponent;
