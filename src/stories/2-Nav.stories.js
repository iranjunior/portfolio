import React from 'react';
import Nav from '../components/nav';

export default {
  title: 'Nav',
};
const mockHistory = {
  push: (route) => console.log(route),
};
const mockMatch = {
  path: '/',
};

const mockMatchSkills = {
  path: '/skills',
};

export const MenuDefault = () => <Nav history={mockHistory} match={mockMatch} />;
export const MenuSkills = () => <Nav history={mockHistory} match={mockMatchSkills} />;
