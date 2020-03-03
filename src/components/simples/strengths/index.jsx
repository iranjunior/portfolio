import React, { memo } from 'react';
import Strengths from './strengths';

import {
  Strength, Front, Back,
} from './styles';

const StrengthComponent = () => (
  <>
    {Strengths.map((strength) => (
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
export default memo(StrengthComponent);
