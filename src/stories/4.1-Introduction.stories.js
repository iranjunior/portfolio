import React from 'react';
import Introduction from '../components/introduction';

export default {
  title: 'Introduction',
};

export const About = () => <Introduction message="Oi, eu sou o" />;
export const Skills = () => <Introduction message="Aqui estão as minhas" />;
