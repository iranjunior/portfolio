import React, { useState, memo } from 'react';

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
            <Item onClick={() => redirect('')} active={isMyRoute('')}>
              Sobre
            </Item>
            <Item onClick={() => redirect('skills')} active={isMyRoute('skills')}>
              Habilidades
            </Item>
            <Item>Serviços</Item>
            <Item> Formação</Item>
            <Item>Portifolio</Item>
            <Item>Testemunhos</Item>
            <Item>Contato</Item>
            <Item type="blank" />
            <Item onClick={toggleDropdown}>Menu</Item>
          </Dropdown>
        </Menu>
      </WrapperMenu>
    </Container>
  );
}

export default memo(MenuComponenet);
