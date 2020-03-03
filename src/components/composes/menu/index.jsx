import React, { memo } from 'react';
import Menu from '../../simples/menuDropdown';
import Title from '../../simples/title';

import routes from '../../../routes';

import {
  Container, WrapperMenu,
} from './styles';
import { redirect, isMyRoute } from './services';

function MenuComponenet() {
  return (
    <Container>
      <WrapperMenu>
        <Title message="Iran Junior" />
        <Menu
          routes={routes}
          redirect={redirect}
          isMyRoute={isMyRoute}
        />
      </WrapperMenu>
    </Container>
  );
}

export default memo(MenuComponenet);
