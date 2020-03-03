import React, { memo } from 'react';
import Proptypes from 'prop-types';
import {
  Strength, Front, Back,
} from './styles';

const StrengthComponent = ({ strengths }) => (
  <>
    {strengths.map((strength) => (
      <Strength
        key={strength.title}
      >
        <Front
          aria-label={strength.description}
        >
          {strength.title}
        </Front>
        <Back
          aria-label={strength.description}
        >
          {strength.description}
        </Back>
      </Strength>
    ))}
  </>
);
StrengthComponent.defaultProps = {
  strengths: [],
};
StrengthComponent.propTypes = {
  strengths: Proptypes.arrayOf(Proptypes.shape({
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
  })),
};


export default memo(StrengthComponent);
