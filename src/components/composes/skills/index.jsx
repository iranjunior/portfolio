import React from 'react';
import { redirect } from '../profile/services';
import Description from '../../simples/description';
import Introduction from '../../simples/introduction';
import Destak from '../../simples/destak';
import Skills from '../../simples/skills';
import Title from '../../simples/title';
import FutureSkills from '../../simples/futureSkills';

import skills from '../../simples/skills/skills';
import futureSkills from '../../simples/futureSkills/futureSkills';

import {
  Container, WrapperSkills,
} from './styles';

const About = () => (
  <Container>
    <Introduction message="Aqui estão as minhas" />
    <Destak message="Habilidades" />
    <Description type="skills" />
    <WrapperSkills>
      <Skills redirect={redirect} skills={skills} />
    </WrapperSkills>
    <Title message="Habilidades futuras..." />
    <FutureSkills futureSkills={futureSkills} />
  </Container>
);
export default About;
