import React from 'react';
import { MdVerticalAlignBottom } from 'react-icons/md';

import {
  Container, Title, Menu, Item, TextButton, Button, WrapperMenu, WrapperButton,
} from './styles';

const Nav = () => (
  <Container>
    <WrapperMenu>
      <Title>Iran Junior</Title>
      <Menu>
        <Item active>
          Sobre
        </Item>
        <Item>
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
