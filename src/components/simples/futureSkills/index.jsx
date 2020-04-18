import React, { memo } from 'react';
import propTypes from 'prop-types';
import Boundary from '../erros/boundary';

import { Container, FutureSkills } from './styles';

const SkillsComponent = ({ futureSkills }) => (
  <Boundary>
    <Container>
      {futureSkills.map((futureSkill) => (
        <FutureSkills
          tabIndex={0}
          aria-label={futureSkill}
          key={futureSkill}
        >
          {futureSkill}
        </FutureSkills>
      ))}
    </Container>
  </Boundary>
);
SkillsComponent.defaultProps = {
  futureSkills: [],
};
SkillsComponent.propTypes = {
  futureSkills: propTypes.arrayOf(propTypes.string),
};

export default memo(SkillsComponent);
