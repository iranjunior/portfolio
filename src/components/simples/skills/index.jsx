import React from 'react';
import propTypes from 'prop-types';

import Skill from './styles';

const SkillsComponent = ({ redirect, skills }) => (
  <>
    {skills.map((skill) => (
      <Skill
        key={skill.skill}
        onClick={() => redirect(skill.link.type, skill.link.url)}
      >
        {skill.skill}
      </Skill>
    ))}
  </>
);
SkillsComponent.defaultProps = {
  skills: [],
};
SkillsComponent.propTypes = {
  redirect: propTypes.func.isRequired,
  skills: propTypes.arrayOf(propTypes.shape({
    skill: propTypes.string.isRequired,
    link: propTypes.shape({
      type: propTypes.string.isRequired,
      url: propTypes.string.isRequired,
    }),
  })),
};

export default SkillsComponent;
