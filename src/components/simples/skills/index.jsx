import React, { memo } from 'react';
import propTypes from 'prop-types';

import Skill from './styles';
import Boundary from '../erros/boundary';

const SkillsComponent = ({ redirect, skills, keyPressAction }) => (
  <Boundary>
    {skills.map((skill) => (
      <Skill
        tabIndex={0}
        aria-label={skill.skill}
        key={skill.skill}
        onKeyPress={(event) => keyPressAction(event, redirect, skill.link.type, skill.link.url)}
        onClick={() => redirect(skill.link.type, skill.link.url)}
      >
        {skill.skill}
      </Skill>
    ))}
  </Boundary>
);
SkillsComponent.defaultProps = {
  skills: [],
};
SkillsComponent.propTypes = {
  keyPressAction: propTypes.func.isRequired,
  redirect: propTypes.func.isRequired,
  skills: propTypes.arrayOf(propTypes.shape({
    skill: propTypes.string.isRequired,
    link: propTypes.shape({
      type: propTypes.string.isRequired,
      url: propTypes.string.isRequired,
    }),
  })),
};

export default memo(SkillsComponent);
