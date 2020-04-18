import React from 'react';
import PropTypes from 'prop-types';

import Destak from './styles';
import Boundary from '../erros/boundary';

const DestakComponent = ({ message }) => (
  <Boundary>
    <Destak
      tabIndex={0}
      aria-label={message}
    >
      {message}
    </Destak>
  </Boundary>
);

DestakComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
export default DestakComponent;
