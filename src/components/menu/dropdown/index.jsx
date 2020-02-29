import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Routes from '../../../routes';

import {
  Menu, Dropdown, Item,
} from './styles';

const DropdownComponent = ({ redirect, isMyRoute }) => {
  const [active, setActive] = useState('hidden');

  const toggleDropdown = () => {
    setActive((value) => (value === 'hidden' ? 'show' : 'hidden'));
  };
  return (
    <>
      <Menu active={active}>
        <Dropdown>
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
          <Item type="blank" />
          <Item onClick={toggleDropdown}>Menu</Item>
        </Dropdown>
      </Menu>
    </>
  );
};
DropdownComponent.propTypes = {
  redirect: PropTypes.func.isRequired,
  isMyRoute: PropTypes.func.isRequired,
};
export default DropdownComponent;
