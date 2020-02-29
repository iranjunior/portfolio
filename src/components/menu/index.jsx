import React, { memo } from 'react';
import Menu from './dropdown';
import Title from '../nav/title';

import {
  Container, WrapperMenu,
} from './styles';
import { redirect, isMyRoute } from './services';

function MenuComponenet() {
  return (
    <Container>
      <WrapperMenu>
        <Title />
        <Menu
          redirect={redirect}
          isMyRoute={isMyRoute}
        />
      </WrapperMenu>
    </Container>
  );
}

export default memo(MenuComponenet);
