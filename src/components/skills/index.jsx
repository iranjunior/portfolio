import React from 'react';
import { redirect } from '../profile/services';
import Description from '../description';
import Introduction from '../introduction';
import Destak from '../destak';
import Skills from './skills';
import Title from '../title';
import FutureSkills from './futureSkills';

import skills from './skills/skills';
import futureSkills from './futureSkills/futureSkills';

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
