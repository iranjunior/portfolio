import React, { useState, memo } from 'react';
import Routes from '../../routes';

import {
  Container, Title, Menu, Dropdown, Item, WrapperMenu,
} from './styles';
import { redirect, isMyRoute } from './services';

function MenuComponenet() {
  const [active, setActive] = useState('hidden');

  const toggleDropdown = () => {
    setActive((value) => (value === 'hidden' ? 'show' : 'hidden'));
  };
  return (
    <Container>
      <WrapperMenu>
        <Title>Iran Junior</Title>
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
      </WrapperMenu>
    </Container>
  );
}

export default memo(MenuComponenet);
