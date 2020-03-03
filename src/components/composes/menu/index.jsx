import React, { memo } from 'react';
import Menu from '../../simples/menuDropdown';
import Title from '../../simples/title';

import routes from '../../../routes';

import { Container, WrapperMenu } from './styles';
import { changePath, isMyRoute, keyPressAction } from '../../../services';

const MenuComponent = () => (
  <Container>
    <WrapperMenu>
      <Title message="Iran Junior" />
      <Menu
        routes={routes}
        keyPressAction={keyPressAction}
        redirect={changePath}
        isMyRoute={isMyRoute}
      />
    </WrapperMenu>
  </Container>
);

export default memo(MenuComponent);
