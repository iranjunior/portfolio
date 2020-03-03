import React from 'react';
import PropTypes from 'prop-types';

import Destak from './styles';

const DestakComponent = ({ message }) => (
  <Destak
    tabIndex={0}
    aria-label={message}
  >
    {message}
  </Destak>
);

DestakComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
export default DestakComponent;
