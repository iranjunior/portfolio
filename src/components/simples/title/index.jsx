import React from 'react';
import PropTypes from 'prop-types';
import Title from './styles';
import Boundary from '../erros/boundary';

const TitleComponent = ({ message }) => (
  <Boundary>
    <Title tabIndex={0} aria-label={message}>{message}</Title>
  </Boundary>
);

TitleComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
export default TitleComponent;
