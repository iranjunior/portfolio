import React from 'react';
import PropTypes from 'prop-types';

import { getDescriptions } from '../../../services';
import Description from './styles';
import Boundary from '../erros/boundary';

const DescriptionComponent = ({ type }) => (
  <Boundary>
    <Description
      aria-label={`description-${type}`}
      tabIndex={0}
    >
      {getDescriptions(type)}
    </Description>
  </Boundary>
);

DescriptionComponent.propTypes = {
  type: PropTypes.string.isRequired,
};
export default DescriptionComponent;
