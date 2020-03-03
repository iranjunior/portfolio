import React from 'react';
import PropTypes from 'prop-types';

import Summary from './styles';

const Introduction = ({ message }) => (
  <Summary
    aria-label={message}
    tabIndex={0}
  >
    {message}
  </Summary>
);

Introduction.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Introduction;
