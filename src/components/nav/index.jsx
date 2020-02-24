import React, { memo } from 'react';
import { MdVerticalAlignBottom } from 'react-icons/md';
import { redirect, isMyRoute } from './services';

import Routes from '../../routes';

import {
  Container, Title, Menu, Item, TextButton, Button, WrapperMenu, WrapperButton,
} from './styles';

const Nav = () => (
  <Container>
    <WrapperMenu>
      <Title>Iran Junior</Title>
      <Menu>
        {
          Routes.map((route) => (
            <Item onClick={() => redirect(route.path)} active={isMyRoute(route.path)}>
              {route.nav}
            </Item>
          ))
        }
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
