import React from 'react';
import PropTypes from 'prop-types';

import Summary from './styles';
import Boundary from '../erros/boundary';

const Introduction = ({ message }) => (
  <Boundary>
    <Summary
      aria-label={message}
      tabIndex={0}
    >
      {message}
    </Summary>
  </Boundary>
);

Introduction.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Introduction;
