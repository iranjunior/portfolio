import React from 'react';
import Description from '../components/simples/description';

export default {
  title: 'Description',
  decorators: [(storyFn) => (
    <div
      style={{
        height: '280px',
        width: '85%',
        backgroundColor: '#f5f0f0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '50px',
      }}
    >
      {storyFn()}
    </div>
  )],
};

export const About = () => <Description type="about" />;
export const Skills = () => <Description type="skills" />;
