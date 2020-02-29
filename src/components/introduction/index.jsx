import React from 'react';
import PropTypes from 'prop-types';

import Summary from './styles';

const Introduction = ({ message }) => (
  <Summary>
    {message}
  </Summary>
);

Introduction.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Introduction;
