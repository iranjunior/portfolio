import React from 'react';
import PropTypes from 'prop-types';

import Destak from './styles';

const DestakComponent = ({ message }) => (
  <Destak>
    {message}
  </Destak>
);

DestakComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
export default DestakComponent;
