import React, { memo } from 'react';
import { redirect, keyPressAction } from '../../../services';
import Image from '../../simples/imageProfile';
import Icons from '../../simples/icons';
import ListInformations from '../../simples/informations';


import icons from '../../../constants/icons';
import informations from '../../../constants/informations';

import { Container, Header, Content } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Image keyPressAction={keyPressAction} />
    </Header>
    <Content>
      <ListInformations
        redirect={redirect}
        keyPressAction={keyPressAction}
        informations={informations}
      />
      <Icons
        redirect={redirect}
        keyPressAction={keyPressAction}
        icons={icons}
      />
    </Content>
  </Container>
);
export default memo(Profile);
