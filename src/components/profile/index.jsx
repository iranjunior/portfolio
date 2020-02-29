import React, { memo } from 'react';
import { redirect } from './services';
import Image from '../imageProfile';
import Icons from '../icons';
import ListInformations from '../informations/index';

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
