import React, { memo } from 'react';
import Menu from '../../simples/menuDropdown';
import Title from '../../simples/title';

import routes from '../../../routes';

import { Container, WrapperMenu } from './styles';
import { changePath, isMyRoute } from '../../../services';

const MenuComponent = () => (
  <Container>
    <WrapperMenu>
      <Title message="Iran Junior" />
      <Menu
        routes={routes}
        redirect={changePath}
        isMyRoute={isMyRoute}
      />
    </WrapperMenu>
  </Container>
);

export default memo(MenuComponent);
