import React, { memo } from 'react';
import { MdVerticalAlignBottom } from 'react-icons/md';
import { redirect, isMyRoute } from './services';


import {
  Container, Title, Menu, Item, TextButton, Button, WrapperMenu, WrapperButton,
} from './styles';

const Nav = () => (
  <Container>
    <WrapperMenu>
      <Title>Iran Junior</Title>
      <Menu>
        <Item onClick={() => redirect('')} active={isMyRoute('')}>
          Sobre
        </Item>
        <Item onClick={() => redirect('skills')} active={isMyRoute('skills')}>
          Habilidades
        </Item>
        <Item onClick={() => redirect('formation')} active={isMyRoute('formation')}>
          Formação
        </Item>
        <Item onClick={() => redirect('portfolio')} active={isMyRoute('portfolio')}>
          Portifolio
        </Item>
        {/* <Item>
          Palestras
        </Item>
        <Item>
          Blog
        </Item> */}
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


export default memo(Nav);
