import React from 'react';

import PropTypes from 'prop-types';

import {
  Card, Title,
} from './styles';

const Toast = ({ opacity, message }) => (
  <Card opacity={opacity}>
    <Title>{message}</Title>
  </Card>
);

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
};

export default Toast;
