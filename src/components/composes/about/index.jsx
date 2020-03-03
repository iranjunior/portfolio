import React from 'react';
import Summary from '../../simples/introduction';
import Destak from '../../simples/destak';
import Title from '../../simples/title';
import Description from '../../simples/description';
import Strengths from '../../simples/strengths';

import {
  Container, WrapperStrength,
} from './styles';

const About = () => (
  <Container>
    <Summary message="Oi, eu sou o" />
    <Destak message="Iran Junior" />
    <Title message="Descrição" />

    <Description type="about" />
    <Title message="Fortalezas" />
    <WrapperStrength>
      <Strengths />
    </WrapperStrength>
  </Container>
);
export default About;
