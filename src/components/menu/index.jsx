import React, { memo } from 'react';
import Menu from '../menuDropdown';
import Title from '../title';

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
          redirect={redirect}
          isMyRoute={isMyRoute}
        />
      </WrapperMenu>
    </Container>
  );
}

export default memo(MenuComponenet);
