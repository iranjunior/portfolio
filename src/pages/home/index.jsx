import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../../components/nav';
import Menu from '../../components/menu';
import Profile from '../../components/profile';
import About from '../../components/about';

import { Container, Section } from './styles';

const Home = ({ history, match }) => (
  <Container>
    <Menu match={match} history={history} />
    <Nav match={match} history={history} />
    <Section>
      <Profile />
      <About />
    </Section>
  </Container>
);

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;
