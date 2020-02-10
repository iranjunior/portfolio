import React from 'react';
import Nav from '../../components/nav';
import Profile from '../../components/profile';
import Skills from '../../components/skills';

import { Container, Section } from './styles';

const Home = ({ history, match }) => (
  <Container>
    <Nav history={history} match={match} />
    <Section>
      <Profile />
      <Skills />
    </Section>
  </Container>
);

export default Home;
