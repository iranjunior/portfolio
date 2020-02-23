import React, { memo } from 'react';
import {
  MdBorderColor, MdLocationOn, MdStarBorder, MdEmail, MdPhone, MdDesktopWindows,
  MdVerticalAlignBottom,
} from 'react-icons/md';

import {
  Container, Header, Image, Content, List, Item, Information, WrapperButton,
  TextButton, Button, WrapperIcons, Instagram, Github, Linkedin, Medium,
} from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Image alt="foto do iran" src="https://avatars1.githubusercontent.com/u/44737846?v=4" />
      <WrapperButton>
        <TextButton>
          Click aqui para baixar meu curriculo
          <Button>
            <MdVerticalAlignBottom size={30} />
          </Button>
        </TextButton>
      </WrapperButton>
    </Header>
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
      </List>
      <WrapperIcons>
        <Medium onClick={() => { window.location.href = 'https://medium.com/@iranjunior94'; }} size={25} />
        <Instagram onClick={() => { window.location.href = 'https://instagram.com/iranjunior__'; }} size={25} />
        <Github onClick={() => { window.location.href = 'https://github.com/iranjunior'; }} size={25} />
        <Linkedin onClick={() => { window.location.href = 'https://linkedin.com/in/iran-junior'; }} size={25} />
      </WrapperIcons>
    </Content>
  </Container>
);
export default memo(Profile);
