import React, { memo } from 'react';
import { redirect } from '../../../services';
import Image from '../../simples/imageProfile';
import Icons from '../../simples/icons';
import ListInformations from '../../simples/informations';

import icons from '../../../constants/icons';
import informations from '../../../constants/informations';

import { Container, Header, Content } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Image />
    </Header>
    <Content>
      <ListInformations redirect={redirect} informations={informations} />
      <Icons redirect={redirect} icons={icons} />
    </Content>
  </Container>
);
export default memo(Profile);
