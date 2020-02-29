import React from 'react';
import Summary from '../introduction';
import Destak from '../destak';
import Title from '../title';
import Description from '../description';
import Strengths from '../strengths';

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
