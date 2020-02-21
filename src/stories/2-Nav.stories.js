import React from 'react';
import { action } from '@storybook/addon-actions';
import Nav from '../components/nav';

export default {
  title: 'Nav',
};
const mockHistory = {
  push: action('route'),
};
const mockMatch = {
  path: '/',
};

export const Default = () => <Nav history={mockHistory} match={mockMatch} />;
