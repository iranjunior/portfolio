import React from 'react';
import PropTypes from 'prop-types';

import { getDescriptions } from '../../../services';
import Description from './styles';

const DescriptionComponent = ({ type }) => (
  <Description
    aria-label={`description-${type}`}
    tabIndex={0}
  >
    {getDescriptions(type)}
  </Description>
);

DescriptionComponent.propTypes = {
  type: PropTypes.string.isRequired,
};
export default DescriptionComponent;
