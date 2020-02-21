import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../../components/menu';
import Nav from '../../components/nav';
import Profile from '../../components/profile';
import Formation from '../../components/formation';

import { Container, Section } from './styles';

const FormationsComponent = ({ history, match }) => (
  <Container>
    <Menu history={history} match={match} />
    <Nav history={history} match={match} />
    <Section>
      <Profile />
      <Formation />
    </Section>
  </Container>
);

FormationsComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default FormationsComponent;
