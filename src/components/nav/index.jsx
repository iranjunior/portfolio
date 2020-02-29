import React from 'react';
import { redirect, isMyRoute, getCurriculum } from './services';

import ListNav from '../listNav';
import Title from '../title';
import Button from '../button';

import {
  Container, WrapperMenu, WrapperButton,
} from './styles';

const Nav = () => (
  <Container>
    <WrapperMenu>
      <Title message="Iran Junior" />
      <ListNav
        redirect={redirect}
        isMyRoute={isMyRoute}
      />
    </WrapperMenu>
    <WrapperButton>
      <Button getCurriculum={getCurriculum} />
    </WrapperButton>
  </Container>
);


export default Nav;
