import React from 'react';
import { MdVerticalAlignBottom } from 'react-icons/md';

import {
  Container, Title, Menu, Item, TextButton, Button, WrapperMenu, WrapperButton,
} from './styles';

const Nav = ({ history, match }) => (
  <Container>
    <WrapperMenu>
      <Title>Iran Junior</Title>
      <Menu>
        <Item onClick={() => history.push('/')} active={match.path === '/'}>
          Sobre
        </Item>
        <Item onClick={() => history.push('/skills')} active={match.path === '/skills'}>
          Habilidades
        </Item>
        <Item>
          Serviços
        </Item>
        <Item>
          Formação
        </Item>
        <Item>
          Portifolio
        </Item>
        <Item>
          Testemunhos
        </Item>
        <Item>
          Contato
        </Item>
      </Menu>
    </WrapperMenu>
    <WrapperButton>
      <TextButton>
        Click aqui para baixar meu curriculo
        <Button>
          <MdVerticalAlignBottom size={30} />
        </Button>
      </TextButton>
    </WrapperButton>
  </Container>
);
export default Nav;
