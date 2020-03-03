import React, { memo } from 'react';
import { redirect } from './services';
import Image from '../../simples/imageProfile';
import Icons from '../../simples/icons';
import ListInformations from '../../simples/informations/index';

import { Container, Header, Content } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Image />
    </Header>
    <Content>
      <ListInformations redirect={redirect} />
      <Icons redirect={redirect} />
    </Content>
  </Container>
);
export default memo(Profile);
