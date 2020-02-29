import React from 'react';
import propTypes from 'prop-types';


import { Container, FutureSkills } from './styles';

const SkillsComponent = ({ futureSkills }) => (
  <Container>
    {futureSkills.map((futureSkill) => (
      <FutureSkills
        key={futureSkill}
      >
        {futureSkill}
      </FutureSkills>
    ))}
  </Container>
);
SkillsComponent.defaultProps = {
  futureSkills: [],
};
SkillsComponent.propTypes = {
  futureSkills: propTypes.arrayOf(propTypes.string),
};

export default SkillsComponent;
