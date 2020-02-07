import React from 'react';
import {
  MdBorderColor, MdLocationOn, MdStarBorder, MdEmail, MdPhone, MdDesktopWindows,
} from 'react-icons/md';
import {
  FaInstagram, FaGithub, FaLinkedin, FaMedium,
} from 'react-icons/fa';
import {
  Container, Image, Content, List, Item, Information,
} from './styles';

const Profile = () => (
  <Container>
    <Image src="https://avatars1.githubusercontent.com/u/44737846?v=4" />
    <Content>
      <List>
        <Item>
          Informações Gerais
        </Item>
        <Item>
          <MdBorderColor style={{ marginRight: '25px' }} />
          Nome:
          {' '}
          <Information> Iran Junior </Information>
        </Item>
        <Item>
          <MdLocationOn style={{ marginRight: '25px' }} />
          Localização:
          {' '}
          <Information> Recife, PE </Information>
        </Item>
        <Item>
          <MdStarBorder style={{ marginRight: '25px' }} />
          Idade:
          {' '}
          <Information> 25 anos </Information>
        </Item>
        <Item>
          <MdEmail style={{ marginRight: '25px' }} />
          Email:
          {' '}
          <Information link> iranjunior94@gmail.com </Information>
        </Item>
        <Item>
          <MdPhone style={{ marginRight: '25px' }} />
          Phone:
          {' '}
          <Information> +55 81 99790-7717 </Information>
        </Item>
        <Item>
          <MdDesktopWindows style={{ marginRight: '25px' }} />
          Site:
          {' '}
          <Information link> iranjunior.github.io </Information>
        </Item>
        <Item>
          <FaMedium style={{ marginRight: '25px' }} />
          <FaInstagram style={{ marginRight: '25px' }} />
          <FaGithub style={{ marginRight: '25px' }} />
          <FaLinkedin style={{ marginRight: '25px' }} />
        </Item>
      </List>
    </Content>
  </Container>
);

export default Profile;
