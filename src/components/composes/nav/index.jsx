import React from 'react';
import { changePath, isMyRoute, getCurriculum } from '../../../services';

import ListNav from '../../simples/listNav';
import Title from '../../simples/title';
import Button from '../../simples/button';
import routes from '../../../routes';

import {
  Container, WrapperMenu, WrapperButton,
} from './styles';

const Nav = () => (
  <Container>
    <WrapperMenu>
      <Title message="Iran Junior" />
      <ListNav
        routes={routes}
        redirect={changePath}
        isMyRoute={isMyRoute}
      />
    </WrapperMenu>
    <WrapperButton>
      <Button getCurriculum={getCurriculum} />
    </WrapperButton>
  </Container>
);


export default Nav;
