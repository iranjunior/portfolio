import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Title, Menu, Dropdown, Item, WrapperMenu,
} from './styles';

function MenuComponenet({ history, match }) {
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
            <Item onClick={() => history.push('/')} active={match.path === '/'}>
              Sobre
            </Item>
            <Item onClick={() => history.push('/skills')} active={match.path === '/skills'}>
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

MenuComponenet.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuComponenet;
